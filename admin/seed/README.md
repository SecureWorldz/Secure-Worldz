# Seed data

`*.json` files here are **sample data only**, used to bootstrap an empty Firestore
project with `npm run seed`.

## The public site owns the canonical content

These JSON files are **not** the source of truth. The public SECUREWORLDZ website
owns the canonical content for courses, workshops, testimonials, products and
meetups (historically shipped as TypeScript constants in the site repo). Firestore
is the runtime source of truth that both apps share:

- the admin app writes documents to Firestore;
- the public site reads those collections at runtime (server-side Firebase Admin
  SDK), falling back to its bundled constants if a document or the whole database
  is unavailable.

Treat the files in this folder as a convenient starting snapshot. Once the public
site has been migrated, keep it as the authoring source and export from it.

## Exporting the canonical content from the public site

1. In the public site repo, locate the content module (the arrays/objects that
   define courses, workshops, etc.).
2. Dump each collection to this folder, e.g. with a one-off script:

   ```js
   import { writeFile } from 'node:fs/promises'
   import { courses } from '../lib/content/courses'
   await writeFile('admin/seed/courses.json', JSON.stringify(courses, null, 2) + '\n')
   ```

3. Make sure every record has a stable, unique `id` (slug) — Firestore documents
   are keyed by it, so changing an id creates a new document.
4. Run `npm run seed` from `admin/` with `GOOGLE_APPLICATION_CREDENTIALS` set.
   Seeding merges by id, so it is safe to re-run; it does not delete documents that
   are no longer in the JSON files.

## Restoring / migrating later

The seed script only writes sample data. For a real migration, export the exact
content shape used by the public site and verify it against the Zod schemas in
`lib/collections.ts` before seeding. Never run the seeder against production with
stale sample files — it will overwrite documents sharing the same ids.
