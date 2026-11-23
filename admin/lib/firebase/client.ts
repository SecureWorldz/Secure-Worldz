import { getApp, getApps, initializeApp, type FirebaseApp } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'
import { getFirestore, type Firestore } from 'firebase/firestore'

/**
 * Firebase Web SDK (client-side) for the admin app.
 *
 * All values come from NEXT_PUBLIC_* environment variables — see .env.example.
 * If they are missing, this module exports `isFirebaseConfigured = false` and
 * `auth`/`db` stay null. The UI detects this and renders a clear notice instead
 * of crashing, so the app can still be previewed without credentials.
 */
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.appId,
)

let app: FirebaseApp | null = null
let auth: Auth | null = null
let db: Firestore | null = null

// Initialize only in the browser. Keeping this out of the server render avoids
// SSR issues with browser-only Auth persistence; effects/handlers are client-only.
if (isFirebaseConfigured && typeof window !== 'undefined') {
  app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)
  auth = getAuth(app)
  db = getFirestore(app)
}

export { app, auth, db }

/** Throwing accessors for code paths that are known to run in the browser. */
export function getAuthInstance(): Auth {
  if (!auth) throw new Error('Firebase Auth is not configured. See .env.example.')
  return auth
}

export function getDb(): Firestore {
  if (!db) throw new Error('Firestore is not configured. See .env.example.')
  return db
}
