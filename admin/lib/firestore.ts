import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore'
import { getDb } from './firebase/client'

export type StoredDocument = Record<string, unknown> & {
  id: string
  createdAt?: unknown
  updatedAt?: unknown
}

/** Stable, URL-safe slug used as the Firestore document id. */
export function slugify(input: string): string {
  return input
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
}

/** Generate a unique slug within a collection (appends -2, -3, … on collision). */
export function generateId(name: string, existing: string[] = []): string {
  const base = slugify(name) || 'item'
  const taken = new Set(existing)
  let candidate = base
  let n = 2
  while (taken.has(candidate)) {
    candidate = `${base}-${n++}`
  }
  return candidate
}

export async function listDocuments(
  collectionName: string,
): Promise<StoredDocument[]> {
  const snapshot = await getDocs(collection(getDb(), collectionName))
  return snapshot.docs.map(
    (d) => ({ ...d.data(), id: d.id }) as StoredDocument,
  )
}

export async function getDocument(
  collectionName: string,
  id: string,
): Promise<StoredDocument | null> {
  const snapshot = await getDoc(doc(getDb(), collectionName, id))
  if (!snapshot.exists()) return null
  return { ...snapshot.data(), id: snapshot.id } as StoredDocument
}

/**
 * Create a document. When `customId` is supplied (the normal path — our forms
 * generate stable slugs) we setDoc(doc(db, collection, id)). Otherwise addDoc
 * allocates the id and a follow-up merge stores it in the `id` field as well.
 */
export async function createDocument(
  collectionName: string,
  data: Record<string, unknown>,
  customId?: string,
): Promise<string> {
  const db = getDb()

  if (customId) {
    await setDoc(doc(db, collectionName, customId), {
      ...data,
      id: customId,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    })
    return customId
  }

  const ref = await addDoc(collection(db, collectionName), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
  await setDoc(ref, { id: ref.id }, { merge: true })
  return ref.id
}

/** Merge an update and always refresh `updatedAt`. */
export async function updateDocument(
  collectionName: string,
  id: string,
  data: Record<string, unknown>,
): Promise<void> {
  await setDoc(
    doc(getDb(), collectionName, id),
    { ...data, id, updatedAt: serverTimestamp() },
    { merge: true },
  )
}

export async function removeDocument(
  collectionName: string,
  id: string,
): Promise<void> {
  await deleteDoc(doc(getDb(), collectionName, id))
}
