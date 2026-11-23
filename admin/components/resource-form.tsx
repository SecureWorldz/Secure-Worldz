'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AlertCircle, ArrowLeft, FileUp, Loader2, Save, Trash2 } from 'lucide-react'
import { ZodError } from 'zod'
import {
  fromFormValues,
  getCollectionConfig,
  toFormValues,
  type FieldDescriptor,
  type FormValues,
} from '@/lib/collections'
import { isFirebaseConfigured } from '@/lib/firebase/client'
import {
  createDocument,
  generateId,
  getDocument,
  listDocuments,
  removeDocument,
  slugify,
  updateDocument,
} from '@/lib/firestore'
import {
  accentBtn,
  dangerBtn,
  ghostBtn,
  inputClass,
  labelClass,
} from '@/lib/ui'
import NotConfigured from './not-configured'
import { parseMarkdownFile } from '@/lib/markdown-import'

export default function ResourceForm({
  collection,
  id,
}: {
  collection: string
  id?: string | null
}) {
  const config = getCollectionConfig(collection)
  const router = useRouter()
  const isEdit = Boolean(id)

  const [values, setValues] = useState<FormValues>(config?.defaults ?? {})
  const [loading, setLoading] = useState(isEdit && isFirebaseConfigured)
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState('')
  const [importNote, setImportNote] = useState('')

  useEffect(() => {
    if (!config || !id || !isFirebaseConfigured) {
      setLoading(false)
      return
    }
    let active = true
    setLoading(true)
    getDocument(config.name, id)
      .then((doc) => {
        if (!active) return
        if (!doc) {
          setError('This document no longer exists.')
          return
        }
        setValues(toFormValues(config, doc))
      })
      .catch((err: unknown) => {
        if (active) setError(err instanceof Error ? err.message : 'Could not load the document.')
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => {
      active = false
    }
  }, [config, id])

  function setValue(name: string, value: string | boolean) {
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  function describeError(err: unknown): string {
    if (err instanceof ZodError) {
      return err.issues.map((issue) => issue.message).join(' · ') || 'Please check the fields.'
    }
    return err instanceof Error ? err.message : 'Something went wrong.'
  }

  async function persist(nextValues: FormValues): Promise<boolean> {
    setError('')
    if (!config) return false
    if (!isFirebaseConfigured) {
      setError('Firebase is not configured. See .env.example.')
      return false
    }

    let parsed: Record<string, unknown>
    try {
      parsed = config.schema.parse(fromFormValues(config, nextValues))
    } catch (err) {
      setError(describeError(err))
      return false
    }

    setSaving(true)
    try {
      let docId = id ?? null
      if (!docId) {
        const customId = typeof parsed.id === 'string' ? slugify(parsed.id) : ''
        const title = String(parsed[config.titleField] ?? '')
        const existing = (await listDocuments(config.name)).map((d) => d.id)
        docId = customId || generateId(title, existing)
        if (existing.includes(docId)) {
          throw new Error(`A document with the id “${docId}” already exists.`)
        }
      }

      if (id) await updateDocument(config.name, id, parsed)
      else await createDocument(config.name, parsed, docId)

      router.push(`/${config.name}`)
      router.refresh()
      return true
    } catch (err) {
      setError(describeError(err))
      return false
    } finally {
      setSaving(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await persist(values)
  }

  async function handleMarkdownFile(
    event: React.ChangeEvent<HTMLInputElement>,
    publish: boolean,
  ) {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return

    try {
      const result = parseMarkdownFile(await file.text(), file.name)
      const nextValues = { ...values, ...result.values }
      setValues(nextValues)
      setImportNote(
        `Imported “${result.title}” (${result.wordCount} words). ` +
          (publish ? 'Publishing…' : 'Review the fields, then click Save.'),
      )
      if (publish) await persist(nextValues)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not read that Markdown file.')
    }
  }

  async function handleDelete() {
    if (!config || !id) return
    if (!window.confirm('Delete this document? This cannot be undone.')) return
    setDeleting(true)
    setError('')
    try {
      await removeDocument(config.name, id)
      router.push(`/${config.name}`)
      router.refresh()
    } catch (err) {
      setError(describeError(err))
      setDeleting(false)
    }
  }

  if (!config) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-sm text-red-700">
        Unknown collection <code className="font-mono">{collection}</code>.
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl">
      <Link
        href={`/${config.name}`}
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-ink/55 transition hover:text-ink"
      >
        <ArrowLeft size={15} /> Back to {config.label.toLowerCase()}
      </Link>

      <header className="mb-8">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-ink/40">
          {isEdit ? 'Edit' : 'New'} {config.singular}
        </p>
        <h1 className="text-4xl text-ink">
          {isEdit ? String(values[config.titleField] || `Edit ${config.singular}`) : `New ${config.singular}`}
        </h1>
      </header>

      {!isFirebaseConfigured && (
        <div className="mb-6">
          <NotConfigured />
        </div>
      )}

      {error && (
        <div
          role="alert"
          className="mb-6 flex gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
        >
          <AlertCircle className="mt-0.5 shrink-0" size={17} />
          <span>{error}</span>
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center gap-2 py-20 text-sm text-ink/50">
          <Loader2 className="animate-spin" size={18} /> Loading document…
        </div>
      ) : (
        <form
          onSubmit={(e) => void handleSubmit(e)}
          className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm md:p-8"
        >
          {config.name === 'blogs' && (
            <div className="mb-7 rounded-xl border border-ink/10 bg-[#F7F5F3] p-4">
              <p className="text-sm font-medium text-ink">Import a Markdown file</p>
              <p className="mt-1 text-xs leading-relaxed text-ink/55">
                Reads optional <code className="font-mono">---</code> frontmatter (title, slug,
                category, author, date, excerpt, tags, readTime) and uses the rest as the article
                body. Without frontmatter, the first heading becomes the title.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <label className={`${ghostBtn} cursor-pointer`}>
                  <FileUp size={15} /> Import &amp; review
                  <input
                    type="file"
                    accept=".md,.mdx,text/markdown,text/plain"
                    className="hidden"
                    onChange={(e) => void handleMarkdownFile(e, false)}
                  />
                </label>
                <label className={`${accentBtn} cursor-pointer`}>
                  <FileUp size={15} /> Import &amp; publish
                  <input
                    type="file"
                    accept=".md,.mdx,text/markdown,text/plain"
                    className="hidden"
                    onChange={(e) => void handleMarkdownFile(e, true)}
                  />
                </label>
              </div>
              {importNote && (
                <p className="mt-3 text-xs text-ink/60" role="status">
                  {importNote}
                </p>
              )}
            </div>
          )}

          <div className="grid gap-5 md:grid-cols-2">
            {config.fields.map((field) => (
              <FieldControl
                key={field.name}
                field={field}
                value={values[field.name]}
                locked={isEdit && field.name === 'id'}
                onChange={(value) => setValue(field.name, value)}
              />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-6">
            {isEdit ? (
              <button
                type="button"
                onClick={() => void handleDelete()}
                disabled={deleting || saving}
                className={dangerBtn}
              >
                {deleting ? <Loader2 className="animate-spin" size={16} /> : <Trash2 size={16} />}
                Delete
              </button>
            ) : (
              <span />
            )}
            <div className="flex gap-3">
              <Link href={`/${config.name}`} className={ghostBtn}>
                Cancel
              </Link>
              <button type="submit" disabled={saving} className={accentBtn}>
                {saving ? <Loader2 className="animate-spin" size={16} /> : <Save size={16} />}
                {saving ? 'Saving…' : 'Save'}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

function FieldControl({
  field,
  value,
  locked,
  onChange,
}: {
  field: FieldDescriptor
  value: string | boolean | undefined
  locked?: boolean
  onChange: (value: string | boolean) => void
}) {
  const wide =
    field.kind === 'textarea' || field.kind === 'stringArray' || field.name === 'description'

  const hint = field.hint && (
    <p className="mt-1 text-[11px] leading-snug text-ink/45">{field.hint}</p>
  )

  let control: React.ReactNode

  switch (field.kind) {
    case 'boolean':
      control = (
        <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-ink/12 bg-white px-3 py-2.5 text-sm text-ink">
          <input
            type="checkbox"
            checked={Boolean(value)}
            disabled={locked}
            onChange={(e) => onChange(e.target.checked)}
            className="h-4 w-4 rounded border-ink/30 accent-[#1C1A18]"
          />
          {field.label}
        </label>
      )
      break

    case 'select':
      control = (
        <select
          id={`field-${field.name}`}
          value={String(value ?? '')}
          disabled={locked}
          required={field.required}
          onChange={(e) => onChange(e.target.value)}
          className={inputClass}
        >
          {(field.options ?? []).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )
      break

    case 'textarea':
      control = (
        <textarea
          id={`field-${field.name}`}
          value={String(value ?? '')}
          disabled={locked}
          required={field.required}
          rows={4}
          placeholder={field.placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={`${inputClass} resize-y`}
        />
      )
      break

    case 'stringArray':
      control = (
        <textarea
          id={`field-${field.name}`}
          value={String(value ?? '')}
          disabled={locked}
          rows={5}
          placeholder={field.placeholder ?? 'One item per line'}
          onChange={(e) => onChange(e.target.value)}
          className={`${inputClass} resize-y font-mono text-xs leading-relaxed`}
        />
      )
      break

    case 'number':
      control = (
        <input
          id={`field-${field.name}`}
          type="number"
          value={String(value ?? '')}
          disabled={locked}
          required={field.required}
          min={0}
          placeholder={field.placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={inputClass}
        />
      )
      break

    default:
      control = (
        <input
          id={`field-${field.name}`}
          type="text"
          value={String(value ?? '')}
          disabled={locked}
          readOnly={locked}
          required={field.required}
          placeholder={field.placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={`${inputClass} ${locked ? 'cursor-not-allowed bg-ink/5 font-mono text-xs' : ''}`}
        />
      )
  }

  return (
    <div className={wide ? 'md:col-span-2' : ''}>
      {field.kind !== 'boolean' && (
        <label className={labelClass} htmlFor={`field-${field.name}`}>
          {field.label}
          {field.required && <span className="ml-0.5 text-red-500">*</span>}
        </label>
      )}
      {control}
      {hint}
    </div>
  )
}
