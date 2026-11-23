# SECUREWORLDZ Content Admin

A standalone Next.js app for staff to manage the public site's content in Firebase
Firestore. It handles six collections: `courses`, `workshops`, `testimonials`,
`products`, `meetups` and `blogs`.

## Setup

1. **Install dependencies**

   ```bash
   cd admin
   npm install
   ```

2. **Configure Firebase.** Copy `.env.example` to `.env.local` and fill in the
   values from your Firebase web app (Firebase console → Project settings → Your
   apps → Web app):

   ```bash
   cp .env.example .env.local
   ```

   All `NEXT_PUBLIC_FIREBASE_*` variables are required for sign-in and CRUD. If
   they are missing, the app still renders but shows a clear "not configured"
   notice and disables reads/writes.

3. **Enable Email/Password sign-in** in Firebase console → Authentication →
   Sign-in method, and create a staff user.

4. **Set the admin custom claim** for that user (once, from a trusted server
   environment — never in browser code):

   ```js
   const admin = require('firebase-admin/app')
   const { getAuth } = require('firebase-admin/auth')
   const { initializeApp, applicationDefault } = require('firebase-admin/app')
   initializeApp({ credential: applicationDefault() })
   await getAuth().setCustomUserClaims(uid, { admin: true })
   // Ask the user to sign out and back in so their ID token is refreshed.
   ```

5. **Deploy security rules**

   ```bash
   firebase deploy --only firestore:rules   # uses admin/firestore.rules
   ```

6. **(Optional) seed the site's current content**

   ```bash
   GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account.json npm run seed
   ```

7. **Run the app**

   ```bash
   npm run dev     # http://localhost:3001
   ```

   `npm run build`, `npm start`, and `npm run lint` (`tsc --noEmit`) are also
   available. The dev/start scripts use port 3001 so they don't collide with the
   public site on port 3000.

## Importing a blog from Markdown

On **New Blog Post** (or when editing one), use **Import & review** to upload a
`.md` / `.mdx` file. The importer (`lib/markdown-import.ts`) reads optional YAML
frontmatter at the top of the file and maps it to the form. The body is split
into plain-text paragraphs for the **Article paragraphs** field, and tags are
taken from frontmatter (or derived from subheadings and the category):

```markdown
---
title: "My Article"
slug: my-article
category: "AI Security"
author: "Cyber Jai"
date: "23 November 2026"
excerpt: "Short summary"
tags: [AI Security, Import]
readTime: "5 min read"
---

# My Article

Article body in Markdown...
```

Supported frontmatter keys: `title`/`name`, `slug`, `category`/`type`, `author`,
`date`/`publishDate`, `excerpt`/`description`, `metaDescription`, `tags`, and
`readTime`. Tags may be a comma-separated list or a YAML-style `- item` list.
Without frontmatter, the first `#` heading becomes the title, the first paragraph
becomes the excerpt, and read time is estimated from word count.

- **Import & review** fills the form so you can adjust fields before saving.
- **Import & publish** creates the post immediately.

The Markdown body is stored in the `markdown` field and rendered on the public
article page in place of paragraph content.

## Architecture / system design

```
                  ┌──────────────────────────┐
                  │  Admin app (this repo)   │
                  │  Next.js + Firebase Auth │
                  └────────────┬─────────────┘
                               │ writes (client SDK)
                               │ guarded by firestore.rules:
                               │   read: public
                               │   write: auth.token.admin == true
                               ▼
                  ┌──────────────────────────┐
                  │   Firebase Firestore     │  ← single source of truth
                  │ courses / workshops /    │    (runtime content)
                  │ testimonials / products  │
                  │ meetups / blogs          │
                  └────────────┬─────────────┘
                               │ reads (server-side Firebase Admin SDK)
                               ▼
                  ┌──────────────────────────┐
                  │  Public SECUREWORLDZ     │
                  │  website (Next.js)       │
                  │  + static fallback       │
                  └──────────────────────────┘
```

### Key decisions

- **Firestore is the single source of truth at runtime.** Both apps read and write
  the same six collections. The public site's bundled constants remain as a
  static fallback, but a Firestore document, when present, wins.
- **The admin app is the only writer.** Staff sign in with Firebase Auth
  (email/password). Writes go through the client SDK but are authorized by
  `firestore.rules`: the six content collections are publicly readable and
  writable only when `request.auth.token.admin == true`. The UI deliberately does
  not check custom claims; the rules are the actual security boundary.
- **Why the public site never writes from the client.** Giving the public site
  write access would require shipping privileged credentials or allowing anonymous
  writes — both are unacceptable. The public site reads with the server-side
  Firebase Admin SDK (service account, never exposed to the browser), which also
  lets it fall back to static content when Firestore is unavailable. Keeping all
  writes in this separate app keeps the attack surface small.
- **Custom claim `admin: true`.** Set it with the Admin SDK as shown above. The
  claim is embedded in the user's ID token, so rules can evaluate it without a
  database lookup. Users must re-authenticate after the claim changes.
- **Stable document IDs.** New records get a URL-safe slug derived from the title
  (with `-2`, `-3`, … on collision). IDs are locked after creation, so public URLs
  and cross-references stay stable.
- **Derived data stays derived.** `updatedAt` and `createdAt` are server timestamps
  written by Firestore. Any sorting, filtering, or aggregation on the public site
  is derived from the raw documents.
- **Media in Firebase Storage.** Image fields (`avatar`, `imageUrl`) store public
  download URLs. Upload binaries to Firebase Storage and paste the resulting URL;
  don't embed base64 blobs in Firestore documents.

## Project layout

```
admin/
├── app/
│   ├── (dashboard)/[collection]/…   # list, new, edit routes (collection = 5 names)
│   ├── login/page.tsx               # Firebase Auth sign-in
│   ├── globals.css                  # Tailwind 4 + site palette
│   └── layout.tsx
├── components/                      # generic list + form, shared notices
├── lib/
│   ├── auth-context.tsx             # onAuthStateChanged provider/hook
│   ├── collections.ts               # Zod schemas + field descriptors
│   ├── firebase/client.ts           # Firebase Web SDK + "not configured" state
│   ├── firestore.ts                 # list/get/create/update/remove + slug helpers
│   └── ui.ts                        # shared Tailwind class strings
├── firestore.rules
├── scripts/seed.mjs
└── seed/                            # sample JSON + export notes
```
