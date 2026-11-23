"use client"

import { useEffect, useState } from "react"

import { STATIC_CONTENT, type ContentCollection, type ContentTypes } from "@/lib/content/collections"

/**
 * Renders bundled content immediately, then swaps in whatever the admin app
 * has published to Firestore. A failed fetch leaves the static content in place.
 */
export function useContent<K extends ContentCollection>(collection: K): ContentTypes[K][] {
  const [items, setItems] = useState<ContentTypes[K][]>(STATIC_CONTENT[collection] as ContentTypes[K][])

  useEffect(() => {
    const controller = new AbortController()

    fetch(`/api/content/${collection}`, { signal: controller.signal, cache: "no-store" })
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((payload: { items?: unknown[] }) => {
        if (Array.isArray(payload.items)) {
          setItems(payload.items as ContentTypes[K][])
        }
      })
      .catch(() => {
        // Keep the static fallback.
      })

    return () => controller.abort()
  }, [collection])

  return items
}
