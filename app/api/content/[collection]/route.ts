import { NextResponse } from "next/server"

import { isContentCollection, STATIC_CONTENT } from "@/lib/content/collections"
import { readCollection } from "@/lib/content/firebase-server"

export const dynamic = "force-dynamic"

export async function GET(_request: Request, context: { params: Promise<{ collection: string }> }) {
  const { collection } = await context.params

  if (!isContentCollection(collection)) {
    return NextResponse.json({ error: "Unknown content collection" }, { status: 404 })
  }

  try {
    const items = await readCollection(collection)
    return NextResponse.json(
      { source: items ? "firebase" : "static", items: items ?? STATIC_CONTENT[collection] },
      { headers: { "Cache-Control": "no-store" } }
    )
  } catch {
    // Firebase is optional; never let a content fetch break the public page.
    return NextResponse.json(
      { source: "static", items: STATIC_CONTENT[collection] },
      { headers: { "Cache-Control": "no-store" } }
    )
  }
}
