'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  BookOpen,
  CalendarDays,
  Home,
  Loader2,
  LogOut,
  Package,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { COLLECTION_NAMES, getCollectionConfig } from '@/lib/collections'
import { useAuth } from '@/lib/auth-context'

const icons: Record<string, React.ComponentType<{ size?: number }>> = {
  courses: BookOpen,
  workshops: CalendarDays,
  testimonials: Users,
  products: Package,
  meetups: Sparkles,
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, loading, configured, signOut } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (configured && !loading && !user) router.replace('/login')
  }, [configured, loading, user, router])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-ink/50">
        <Loader2 className="animate-spin" size={22} />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {!configured && (
        <div className="border-b border-amber-200 bg-amber-50 px-5 py-2.5 text-center text-xs text-amber-900">
          Firebase is not configured — add your NEXT_PUBLIC_FIREBASE_* values to{' '}
          <code className="font-mono">.env.local</code> to enable reads and writes.
        </div>
      )}

      <div className="mx-auto flex min-h-[calc(100vh-42px)] max-w-[1400px]">
        <aside className="hidden w-60 shrink-0 flex-col border-r border-ink/10 bg-white/60 px-4 py-6 md:flex">
          <Link href="/courses" className="mb-8 flex items-center gap-2.5 px-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-accent">
              <ShieldCheck size={19} />
            </span>
            <span>
              <span className="block font-serif text-lg leading-tight">SECUREWORLDZ</span>
              <span className="block text-[10px] uppercase tracking-widest text-ink/45">
                Content admin
              </span>
            </span>
          </Link>

          <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-widest text-ink/40">
            Collections
          </p>
          <nav className="space-y-1">
            {COLLECTION_NAMES.map((name) => {
              const config = getCollectionConfig(name)
              const Icon = icons[name] ?? Home
              const active =
                pathname === `/${name}` || pathname.startsWith(`/${name}/`)
              return (
                <Link
                  key={name}
                  href={`/${name}`}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                    active
                      ? 'bg-ink text-white'
                      : 'text-ink/70 hover:bg-ink/5 hover:text-ink'
                  }`}
                >
                  <Icon size={16} />
                  {config?.label ?? name}
                </Link>
              )
            })}
          </nav>

          <div className="mt-auto border-t border-ink/10 pt-4">
            {configured && user ? (
              <>
                <p className="truncate px-2 text-xs text-ink/55" title={user.email ?? ''}>
                  {user.email}
                </p>
                <button
                  type="button"
                  onClick={() => void signOut()}
                  className="mt-2 flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-ink/70 transition hover:bg-ink/5 hover:text-ink"
                >
                  <LogOut size={16} /> Sign out
                </button>
              </>
            ) : (
              <Link href="/login" className="block px-2 text-sm text-ink/55 hover:text-ink">
                Sign in
              </Link>
            )}
          </div>
        </aside>

        <main className="min-w-0 flex-1 px-5 py-8 md:px-10">
          <div className="mb-6 flex gap-2 overflow-x-auto pb-1 md:hidden">
            {COLLECTION_NAMES.map((name) => {
              const config = getCollectionConfig(name)
              const active =
                pathname === `/${name}` || pathname.startsWith(`/${name}/`)
              return (
                <Link
                  key={name}
                  href={`/${name}`}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition ${
                    active ? 'bg-ink text-white' : 'border border-ink/15 bg-white text-ink/60'
                  }`}
                >
                  {config?.label ?? name}
                </Link>
              )
            })}
          </div>
          {children}
        </main>
      </div>
    </div>
  )
}
