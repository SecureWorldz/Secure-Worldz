import { applicationDefault, cert, getApp, getApps, initializeApp } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"

import { isContentCollection, type ContentCollection } from "@/lib/content/collections"

/**
 * Firebase Admin is only initialised when credentials are present. Without them
 * the public site keeps working from its bundled static content, so a missing
 * or misconfigured Firebase project can never take the site down.
 */
function getFirebaseApp() {
  if (getApps().length) return getApp()

  const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_JSON
  if (serviceAccount) {
    return initializeApp({ credential: cert(JSON.parse(serviceAccount)) })
  }

  if (process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.FIREBASE_PROJECT_ID) {
    return initializeApp({
      projectId: process.env.FIREBASE_PROJECT_ID,
      credential: applicationDefault(),
    })
  }

  return null
}

export function isFirebaseConfigured() {
  return getFirebaseApp() !== null
}

export async function readCollection<T>(collection: ContentCollection): Promise<T[] | null> {
  if (!isContentCollection(collection)) return null

  const app = getFirebaseApp()
  if (!app) return null

  const snapshot = await getFirestore(app).collection(collection).get()
  const items = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as T[]

  // Optional `order` field lets editors control sequence without changing ids.
  return items.sort((a, b) => {
    const ao = (a as { order?: number }).order
    const bo = (b as { order?: number }).order
    if (typeof ao === "number" && typeof bo === "number") return ao - bo
    return 0
  })
}
