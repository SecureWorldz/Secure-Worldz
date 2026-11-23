/**
 * Seed Firestore with the site's current content in ../seed/*.json.
 *
 * Usage:
 *   GOOGLE_APPLICATION_CREDENTIALS=/absolute/path/service-account.json npm run seed
 *
 * Uses the Firebase Admin SDK with a service account, so writes bypass Security
 * Rules. Documents are keyed by their `id` field and merged — re-running is safe.
 */

import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { cert, getApps, initializeApp } from 'firebase-admin/app'
import { FieldValue, getFirestore } from 'firebase-admin/firestore'

const COLLECTIONS = [
  'courses',
  'workshops',
  'testimonials',
  'products',
  'meetups',
  'blogs',
]

const here = path.dirname(fileURLToPath(import.meta.url))
const seedDir = path.join(here, '..', 'seed')

async function main() {
  const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS
  if (!credentialsPath) {
    console.error(
      'GOOGLE_APPLICATION_CREDENTIALS is not set. Point it at a Firebase service account JSON file.',
    )
    process.exit(1)
  }

  const serviceAccount = JSON.parse(await readFile(credentialsPath, 'utf8'))
  const app =
    getApps().length > 0
      ? getApps()[0]
      : initializeApp({ credential: cert(serviceAccount) })
  const db = getFirestore(app)

  for (const name of COLLECTIONS) {
    const file = path.join(seedDir, `${name}.json`)
    const records = JSON.parse(await readFile(file, 'utf8'))
    if (!Array.isArray(records)) {
      throw new Error(`${file} must contain a JSON array.`)
    }

    const batch = db.batch()
    for (const record of records) {
      if (!record.id) throw new Error(`A record in ${file} is missing an "id".`)
      const ref = db.collection(name).doc(record.id)
      batch.set(
        ref,
        {
          ...record,
          createdAt: FieldValue.serverTimestamp(),
          updatedAt: FieldValue.serverTimestamp(),
        },
        { merge: true },
      )
    }
    await batch.commit()
    console.log(`✓ ${name}: wrote ${records.length} document(s)`)
  }

  console.log('\nSeed complete.')
}

main().catch((error) => {
  console.error('Seed failed:', error)
  process.exit(1)
})
