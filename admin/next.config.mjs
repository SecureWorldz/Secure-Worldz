import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Keep this standalone app's bundler root scoped to admin/ (the parent repo has
// its own lockfiles, which would otherwise be inferred as the workspace root).
const root = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: { root },
  // Avatars and cover images are arbitrary public URLs supplied by staff.
  images: { unoptimized: true },
}

export default nextConfig
