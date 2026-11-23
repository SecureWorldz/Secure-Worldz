import type { FormValues } from '@/lib/collections'

export interface MarkdownImportResult {
  values: FormValues
  title: string
  wordCount: number
}

function unquote(value: string): string {
  const trimmed = value.trim()
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1)
  }
  return trimmed
}

function slugify(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
}

function parseList(value: string): string[] {
  const inner = value.replace(/^\[|\]$/g, '').trim()
  if (!inner) return []
  return inner.split(',').map(unquote).filter(Boolean)
}

/** Strip Markdown syntax so a block can be used as a plain-text paragraph. */
function plainText(block: string): string {
  return block
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^[-*+]\s+/gm, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`~>#]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Turn the Markdown body into one readable paragraph per blank-line block. */
function extractParagraphs(body: string): string[] {
  return body
    .replace(/```[\s\S]*?```/g, '')
    .split(/\r?\n\s*\r?\n/)
    .map((block) => ({ raw: block.trim(), text: plainText(block) }))
    .filter(({ raw, text }) => text.length > 3 && !/^#{1,6}\s/.test(raw))
    .map(({ text }) => text)
}

/** Prefer frontmatter tags; otherwise use subheadings, then the category. */
function deriveTags(
  meta: Record<string, string>,
  lists: Record<string, string[]>,
  body: string,
  category: string,
): string[] {
  const explicit = lists.tags?.length ? lists.tags : parseList(meta.tags || '')
  if (explicit.length) return [...new Set(explicit)]

  const headings = [...body.matchAll(/^#{2,6}\s+(.+)$/gm)]
    .map((match) => plainText(match[1]))
    .filter(Boolean)
  return [...new Set([...headings, category])].filter(Boolean).slice(0, 6)
}

/**
 * Reads a Markdown file with optional YAML-style frontmatter and maps it to
 * the blog form. Without frontmatter, the first # heading becomes the title
 * and the first paragraph becomes the excerpt.
 */
export function parseMarkdownFile(text: string, filename: string): MarkdownImportResult {
  let body = text.replace(/^\uFEFF/, '')
  const meta: Record<string, string> = {}
  const lists: Record<string, string[]> = {}

  const frontmatter = body.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)
  if (frontmatter) {
    body = body.slice(frontmatter[0].length)
    let activeList: string | null = null

    for (const rawLine of frontmatter[1].split(/\r?\n/)) {
      const line = rawLine.trim()
      if (!line || line.startsWith('#')) continue

      if (line.startsWith('- ') && activeList) {
        lists[activeList].push(unquote(line.slice(2)))
        continue
      }

      const separator = line.indexOf(':')
      if (separator < 0) continue
      const key = line.slice(0, separator).trim().toLowerCase()
      const value = line.slice(separator + 1).trim()

      if (value.startsWith('[') && value.endsWith(']')) {
        lists[key] = parseList(value)
        activeList = key
      } else if (!value) {
        lists[key] = []
        activeList = key
      } else {
        meta[key] = unquote(value)
        activeList = null
      }
    }
  }

  const heading = body.match(/^#\s+(.+)$/m)
  const fallbackTitle = heading ? unquote(heading[1]) : filename.replace(/\.mdx?$/i, '').replace(/[-_]/g, ' ')

  const paragraphs = extractParagraphs(body)
  const firstParagraph = paragraphs.find((paragraph) => paragraph.length > 30) ?? paragraphs[0]

  const title = meta.title || meta.name || fallbackTitle
  const category = meta.category || meta.type || 'AI Learning'
  const tags = deriveTags(meta, lists, body, category)
  const words = body.replace(/[#*`>\[\]()]/g, ' ').split(/\s+/).filter(Boolean).length
  const readTime = meta.readtime || `${Math.max(1, Math.round(words / 200))} min read`

  const values: FormValues = {
    id: meta.slug ? slugify(meta.slug) : '',
    slug: meta.slug ? slugify(meta.slug) : slugify(title),
    title,
    category,
    author: meta.author || 'Cyber Jai',
    publishDate: meta.publishdate || meta.date || '',
    excerpt: meta.excerpt || meta.description || (firstParagraph ? firstParagraph.slice(0, 220) : ''),
    metaDescription: metadescription(meta) || (firstParagraph ? firstParagraph.slice(0, 160) : ''),
    content: paragraphs.join('\n'),
    markdown: body.trim(),
    tags: tags.join('\n'),
    readTime,
  }

  return { values, title, wordCount: words }
}

function metadescription(meta: Record<string, string>): string {
  return meta.metadescription || meta.meta_description || ''
}
