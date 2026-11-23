# Content admin & Firebase data flow

Two independent Next.js apps share one Firebase Firestore database:

| App | Folder | Port | Role |
| --- | --- | --- | --- |
| Public site | `.` | 3000 | Renders content, reads Firestore at runtime |
| Content admin | `admin/` | 3001 | Staff-only CRUD for content |

## Collections

`courses`, `workshops`, `testimonials`, `products`, `meetups`.

Each document is keyed by a stable slug in its `id` field. An optional numeric
`order` field controls display sequence. `createdAt` / `updatedAt` are server
timestamps.

## Data flow

```
Admin (Firebase Auth, client SDK)
        │ writes, guarded by firestore.rules:
        │   read = public, write = auth.token.admin == true
        ▼
Firestore  ── single source of truth at runtime
        │ reads via Firebase Admin SDK from /api/content/[collection]
        ▼
Public site (useContent hook) ── falls back to bundled lib/data/* if Firebase
                                 is unavailable or unconfigured
```

The public site renders its bundled content immediately, then replaces it with
Firestore documents once `/api/content/<collection>` responds. Editing content in
the admin app therefore changes the live site without a rebuild or redeploy. The
public site never writes to Firestore and never ships privileged credentials.

## Setup

1. `cd admin && cp .env.example .env.local` and fill in the `NEXT_PUBLIC_FIREBASE_*` values.
2. Enable Email/Password auth and set `admin: true` as a custom claim on staff users.
3. Deploy `admin/firestore.rules`.
4. Optionally seed current content:
   `cd admin && GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account.json npm run seed`.
5. Public-site reads need one of `FIREBASE_SERVICE_ACCOUNT_JSON`,
   `GOOGLE_APPLICATION_CREDENTIALS`, or `FIREBASE_PROJECT_ID` (Application Default
   Credentials). With none of them, the site keeps working from static data.

Full admin setup and design notes: `admin/README.md`.
