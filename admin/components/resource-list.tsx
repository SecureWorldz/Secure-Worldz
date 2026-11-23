'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import {
  AlertCircle,
  ChevronRight,
  Loader2,
  Pencil,
  Plus,
  Trash2,
} from 'lucide-react'
import { getCollectionConfig } from '@/lib/collections'
import { isFirebaseConfigured } from '@/lib/firebase/client'
import {
  listDocuments,
  removeDocument,
  type StoredDocument,
} from '@/lib/firestore'
import { accentBtn, ghostBtn } from '@/lib/ui'
import NotConfigured from './not-configured'

export default function ResourceList({ collection }: { collection: string }) {
  const config = getCollectionConfig(collection)
  const [docs, setDocs] = useState<StoredDocument[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [deleting, setDeleting] = useState<string | null>(null)

  const load = useCallback(async () => {
    if (!config) return
    if (!isFirebaseConfigured) {
      setLoading(false)
      return
    }
    setLoading(true)
    setError('')
    try {
      setDocs(await listDocuments(config.name))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not load documents.')
    } finally {
      setLoading(false)
    }
  }, [config])

  useEffect(() => {
    void load()
  }, [load])

  async function handleDelete(doc: StoredDocument) {
    if (!config) return
    const label = String(doc[config.titleField] ?? doc.id)
    if (!window.confirm(`Delete “${label}”? This cannot be undone.`)) return
    setDeleting(doc.id)
    setError('')
    try {
      await removeDocument(config.name, doc.id)
      await load()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not delete the document.')
    } finally {
      setDeleting(null)
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
    <div className="mx-auto max-w-4xl">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-ink/40">
            Content
          </p>
          <h1 className="text-4xl text-ink">{config.label}</h1>
          <p className="mt-2 max-w-xl text-sm text-ink/55">{config.description}</p>
        </div>
        <Link href={`/${config.name}/new`} className={accentBtn}>
          <Plus size={16} /> New {config.singular}
        </Link>
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
          <Loader2 className="animate-spin" size={18} /> Loading {config.label.toLowerCase()}…
        </div>
      ) : docs.length === 0 ? (
        <div className="rounded-xl border border-dashed border-ink/20 bg-white/50 px-6 py-16 text-center">
          <p className="font-serif text-xl">Nothing here yet</p>
          <p className="mt-1 text-sm text-ink/55">
            {isFirebaseConfigured
              ? `Create your first ${config.singular.toLowerCase()} to get started.`
              : 'Connect Firebase to load and edit content.'}
          </p>
          {isFirebaseConfigured && (
            <Link href={`/${config.name}/new`} className={`${ghostBtn} mt-5`}>
              <Plus size={15} /> New {config.singular}
            </Link>
          )}
        </div>
      ) : (
        <ul className="space-y-2">
          {docs.map((doc) => {
            const title = String(doc[config.titleField] ?? doc.id)
            const subtitle = config.subtitleField
              ? doc[config.subtitleField]
              : undefined
            return (
              <li
                key={doc.id}
                className="group flex items-center gap-4 rounded-xl border border-ink/10 bg-white px-4 py-3.5 transition hover:border-ink/20"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/${config.name}/${doc.id}`}
                      className="truncate font-medium text-ink hover:underline"
                    >
                      {title}
                    </Link>
                    {subtitle !== undefined && subtitle !== '' && (
                      <span className="shrink-0 rounded-full bg-ink/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-ink/55">
                        {String(subtitle)}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 truncate font-mono text-[11px] text-ink/40">
                    {doc.id}
                  </p>
                </div>
                <Link
                  href={`/${config.name}/${doc.id}`}
                  aria-label={`Edit ${title}`}
                  className="rounded-lg p-2 text-ink/50 transition hover:bg-ink/5 hover:text-ink"
                >
                  <Pencil size={16} />
                </Link>
                <button
                  type="button"
                  aria-label={`Delete ${title}`}
                  disabled={deleting === doc.id}
                  onClick={() => void handleDelete(doc)}
                  className="rounded-lg p-2 text-ink/40 transition hover:bg-red-50 hover:text-red-600 disabled:opacity-40"
                >
                  {deleting === doc.id ? (
                    <Loader2 className="animate-spin" size={16} />
                  ) : (
                    <Trash2 size={16} />
                  )}
                </button>
                <ChevronRight size={15} className="hidden text-ink/25 sm:block" />
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
