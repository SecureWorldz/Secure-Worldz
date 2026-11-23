import React from "react"
import {
  Mic,
  Clapperboard,
  Type,
  CheckCircle2,
  ExternalLink,
  Shield,
  Clock,
  Sparkles,
  BookOpen,
  AlertTriangle,
  Lightbulb,
} from "lucide-react"

interface MarkdownBlogContentProps {
  content: string
}

// Inline formatting helper for bold, italic, code, links
function formatInline(text: string): React.ReactNode {
  // Regex to split on code, bold, links, italic
  const parts: React.ReactNode[] = []
  let remainder = text

  // Quick parser loop
  let keyIdx = 0
  while (remainder.length > 0) {
    // 1. Inline code: `code`
    const codeMatch = remainder.match(/`([^`]+)`/)
    // 2. Bold: **bold**
    const boldMatch = remainder.match(/\*\*([^*]+)\*\*/)
    // 3. Markdown Link: [text](url)
    const linkMatch = remainder.match(/\[([^\]]+)\]\(([^)]+)\)/)
    // 4. Raw URL: https://...
    const rawUrlMatch = remainder.match(/(https?:\/\/[^\s)<]+)/)
    // 5. Italic: *italic*
    const italicMatch = remainder.match(/(?<!\*)\*([^*]+)\*(?!\*)/)

    // Find the earliest match
    const matches = [
      codeMatch ? { type: "code", index: codeMatch.index!, match: codeMatch } : null,
      boldMatch ? { type: "bold", index: boldMatch.index!, match: boldMatch } : null,
      linkMatch ? { type: "link", index: linkMatch.index!, match: linkMatch } : null,
      rawUrlMatch ? { type: "rawUrl", index: rawUrlMatch.index!, match: rawUrlMatch } : null,
      italicMatch ? { type: "italic", index: italicMatch.index!, match: italicMatch } : null,
    ].filter(Boolean) as Array<{
      type: "code" | "bold" | "link" | "rawUrl" | "italic"
      index: number
      match: RegExpMatchArray
    }>

    if (matches.length === 0) {
      parts.push(remainder)
      break
    }

    // Sort by earliest occurrence
    matches.sort((a, b) => a.index - b.index)
    const first = matches[0]

    // Push preceding text
    if (first.index > 0) {
      parts.push(remainder.slice(0, first.index))
    }

    const m = first.match
    if (first.type === "code") {
      parts.push(
        <code
          key={`code-${keyIdx++}`}
          className="px-1.5 py-0.5 mx-0.5 rounded-md bg-[#181716] text-[#39F763] font-mono text-xs border border-white/10"
        >
          {m[1]}
        </code>
      )
    } else if (first.type === "bold") {
      parts.push(
        <strong key={`bold-${keyIdx++}`} className="font-semibold text-[#1C1A18]">
          {m[1]}
        </strong>
      )
    } else if (first.type === "link") {
      const isExternal = m[2].startsWith("http")
      parts.push(
        <a
          key={`link-${keyIdx++}`}
          href={m[2]}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-[#181716] font-medium underline underline-offset-4 decoration-[#39F763] hover:text-[#39F763] hover:decoration-[#181716] transition-colors inline-flex items-center gap-0.5"
        >
          <span>{m[1]}</span>
          {isExternal && <ExternalLink className="w-3 h-3 inline ml-0.5 opacity-70" />}
        </a>
      )
    } else if (first.type === "rawUrl") {
      const url = m[1]
      parts.push(
        <a
          key={`rawurl-${keyIdx++}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#181716] font-mono text-xs underline underline-offset-4 decoration-[#39F763] hover:text-[#39F763] transition-colors inline-flex items-center gap-1 break-all"
        >
          <span>{url}</span>
          <ExternalLink className="w-3 h-3 inline shrink-0 opacity-70" />
        </a>
      )
    } else if (first.type === "italic") {
      parts.push(
        <em key={`italic-${keyIdx++}`} className="italic text-[#37322F]">
          {m[1]}
        </em>
      )
    }

    remainder = remainder.slice(first.index + m[0].length)
  }

  return parts
}

export function MarkdownBlogContent({ content }: MarkdownBlogContentProps) {
  const lines = content.split("\n")
  const elements: React.ReactNode[] = []

  let i = 0
  let elementKey = 0

  while (i < lines.length) {
    const line = lines[i]
    const trimmed = line.trim()

    // Skip empty lines
    if (!trimmed) {
      i++
      continue
    }

    // 1. Table Detection
    if (trimmed.startsWith("|") && lines[i + 1]?.includes("|---")) {
      const tableLines: string[] = []
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i].trim())
        i++
      }

      if (tableLines.length >= 2) {
        const headerRow = tableLines[0]
          .split("|")
          .map((c) => c.trim())
          .filter(Boolean)

        const bodyRows = tableLines.slice(2).map((row) =>
          row
            .split("|")
            .map((c) => c.trim())
            .filter(Boolean)
        )

        elements.push(
          <div
            key={`table-${elementKey++}`}
            className="my-8 overflow-x-auto rounded-2xl border border-[rgba(55,50,47,0.12)] bg-white shadow-xs"
          >
            <table className="w-full border-collapse text-left text-xs sm:text-sm font-sans">
              <thead>
                <tr className="bg-[rgba(55,50,47,0.03)] border-b border-[rgba(55,50,47,0.1)]">
                  {headerRow.map((col, idx) => (
                    <th
                      key={idx}
                      className="px-4 sm:px-6 py-3.5 font-semibold text-[#1C1A18] tracking-tight uppercase text-[11px] font-sans"
                    >
                      {formatInline(col)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(55,50,47,0.06)]">
                {bodyRows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className="hover:bg-[rgba(55,50,47,0.02)] transition-colors"
                  >
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className="px-4 sm:px-6 py-3.5 text-[#37322F] leading-relaxed"
                      >
                        {formatInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
      continue
    }

    // 2. Horizontal Divider
    if (trimmed === "---" || trimmed === "***") {
      elements.push(
        <div key={`hr-${elementKey++}`} className="my-10 relative flex items-center justify-center">
          <div className="w-full border-t border-[rgba(55,50,47,0.12)]" />
          <div className="absolute px-3 bg-[#F7F5F3] text-neutral-400">
            <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
          </div>
        </div>
      )
      i++
      continue
    }

    // 3. Script Cues (🎙 = Voice Speech, 🎬 = B-Roll Visuals, 🔤 = On-Screen Graphic)
    if (trimmed.startsWith("🎙")) {
      const speechText = trimmed.replace(/^🎙\s*/, "")
      elements.push(
        <div
          key={`speech-${elementKey++}`}
          className="my-3 p-4 sm:p-5 rounded-2xl bg-white border border-[rgba(55,50,47,0.1)] shadow-xs flex items-start gap-3.5 hover:border-[#39F763]/30 transition-all group"
        >
          <div className="w-8 h-8 rounded-full bg-[#181716] text-[#39F763] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
            <Mic className="w-4 h-4" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-semibold">
              VOICE NARRATION
            </span>
            <p className="text-sm sm:text-base text-[#1C1A18] font-sans leading-relaxed">
              {formatInline(speechText)}
            </p>
          </div>
        </div>
      )
      i++
      continue
    }

    if (trimmed.startsWith("🎬")) {
      const visualText = trimmed.replace(/^🎬\s*/, "")
      elements.push(
        <div
          key={`visual-${elementKey++}`}
          className="my-3 p-3.5 sm:p-4 rounded-xl bg-[#141518] text-white border border-white/10 shadow-xs flex items-center gap-3 font-sans"
        >
          <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-amber-400">
            <Clapperboard className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">
              VISUAL CUE / B-ROLL
            </span>
            <span className="text-xs sm:text-sm text-neutral-200">
              {formatInline(visualText)}
            </span>
          </div>
        </div>
      )
      i++
      continue
    }

    if (trimmed.startsWith("🔤")) {
      const graphicText = trimmed.replace(/^🔤\s*/, "")
      elements.push(
        <div
          key={`graphic-${elementKey++}`}
          className="my-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-sans font-medium"
        >
          <Type className="w-3.5 h-3.5 text-emerald-600" />
          <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-emerald-700">
            ON-SCREEN:
          </span>
          <span>{formatInline(graphicText)}</span>
        </div>
      )
      i++
      continue
    }

    // 4. Headings
    if (trimmed.startsWith("# ")) {
      const headingText = trimmed.replace(/^#\s*/, "")
      elements.push(
        <h2
          key={`h1-${elementKey++}`}
          className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1C1A18] tracking-tight font-normal mt-10 mb-4 pb-2 border-b border-[rgba(55,50,47,0.1)]"
        >
          {formatInline(headingText)}
        </h2>
      )
      i++
      continue
    }

    if (trimmed.startsWith("## ")) {
      const headingText = trimmed.replace(/^##\s*/, "")
      elements.push(
        <h3
          key={`h2-${elementKey++}`}
          className="text-xl sm:text-2xl md:text-3xl font-serif text-[#1C1A18] tracking-tight font-normal mt-8 mb-3"
        >
          {formatInline(headingText)}
        </h3>
      )
      i++
      continue
    }

    if (trimmed.startsWith("### ")) {
      const headingText = trimmed.replace(/^###\s*/, "")
      elements.push(
        <h4
          key={`h3-${elementKey++}`}
          className="text-base sm:text-lg font-sans font-semibold text-[#1C1A18] tracking-tight mt-6 mb-2"
        >
          {formatInline(headingText)}
        </h4>
      )
      i++
      continue
    }

    // 5. Blockquote (> ...)
    if (trimmed.startsWith("> ")) {
      const quoteLines: string[] = []
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quoteLines.push(lines[i].trim().replace(/^>\s*/, ""))
        i++
      }
      elements.push(
        <div
          key={`quote-${elementKey++}`}
          className="my-6 p-5 sm:p-6 rounded-2xl bg-white border-l-4 border-[#181716] shadow-xs text-sm sm:text-base text-[#37322F] italic leading-relaxed font-sans"
        >
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5 not-italic" />
            <div className="flex flex-col gap-2">
              {quoteLines.map((qLine, qIdx) => (
                <p key={qIdx}>{formatInline(qLine)}</p>
              ))}
            </div>
          </div>
        </div>
      )
      continue
    }

    // 6. Checklists (- [ ] or - [x])
    if (/^-\s*\[([ xX])\]\s*/.test(trimmed)) {
      const checkItems: Array<{ checked: boolean; text: string }> = []
      while (i < lines.length && /^-\s*\[([ xX])\]\s*/.test(lines[i].trim())) {
        const m = lines[i].trim().match(/^-\s*\[([ xX])\]\s*(.*)$/)
        if (m) {
          checkItems.push({
            checked: m[1].toLowerCase() === "x",
            text: m[2],
          })
        }
        i++
      }
      elements.push(
        <div
          key={`checklist-${elementKey++}`}
          className="my-5 p-5 rounded-2xl bg-white border border-[rgba(55,50,47,0.1)] shadow-xs flex flex-col gap-2.5 font-sans text-xs sm:text-sm"
        >
          {checkItems.map((item, cIdx) => (
            <div key={cIdx} className="flex items-start gap-2.5 text-[#37322F]">
              <div
                className={`w-4 h-4 rounded-md mt-0.5 flex items-center justify-center shrink-0 border ${
                  item.checked
                    ? "bg-[#181716] border-[#181716] text-[#39F763]"
                    : "border-[rgba(55,50,47,0.3)] bg-white"
                }`}
              >
                {item.checked && <CheckCircle2 className="w-3 h-3" />}
              </div>
              <span className={item.checked ? "line-through text-neutral-400" : ""}>
                {formatInline(item.text)}
              </span>
            </div>
          ))}
        </div>
      )
      continue
    }

    // 7. Bullet Lists (- or *)
    if (/^[-*]\s+/.test(trimmed)) {
      const listItems: string[] = []
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^[-*]\s+/, ""))
        i++
      }
      elements.push(
        <ul
          key={`list-${elementKey++}`}
          className="my-4 space-y-2.5 text-xs sm:text-sm md:text-[15px] font-sans text-[#37322F] pl-2"
        >
          {listItems.map((item, lIdx) => (
            <li key={lIdx} className="flex items-start gap-2.5 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#181716] shrink-0 mt-2" />
              <span>{formatInline(item)}</span>
            </li>
          ))}
        </ul>
      )
      continue
    }

    // 8. Numbered Lists (1. 2.)
    if (/^\d+\.\s+/.test(trimmed)) {
      const numItems: string[] = []
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        numItems.push(lines[i].trim().replace(/^\d+\.\s+/, ""))
        i++
      }
      elements.push(
        <ol
          key={`numlist-${elementKey++}`}
          className="my-4 space-y-2 text-xs sm:text-sm md:text-[15px] font-sans text-[#37322F] pl-2"
        >
          {numItems.map((item, nIdx) => (
            <li key={nIdx} className="flex items-start gap-3 leading-relaxed">
              <span className="w-5 h-5 rounded-full bg-white border border-[rgba(55,50,47,0.15)] text-[11px] font-semibold text-[#1C1A18] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs font-mono">
                {nIdx + 1}
              </span>
              <span>{formatInline(item)}</span>
            </li>
          ))}
        </ol>
      )
      continue
    }

    // 9. Standard Paragraph
    elements.push(
      <p
        key={`p-${elementKey++}`}
        className="my-3 text-sm sm:text-base text-[#37322F] font-sans leading-[1.8] font-normal"
      >
        {formatInline(trimmed)}
      </p>
    )
    i++
  }

  return <div className="w-full flex flex-col">{elements}</div>
}

export default MarkdownBlogContent
