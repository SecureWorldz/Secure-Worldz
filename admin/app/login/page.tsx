'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { AlertCircle, ArrowRight, Loader2, ShieldCheck } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { auth, isFirebaseConfigured } from '@/lib/firebase/client'
import { inputClass, labelClass, primaryBtn } from '@/lib/ui'

const errorMessages: Record<string, string> = {
  'auth/invalid-email': 'That email address is not valid.',
  'auth/user-not-found': 'No account exists for that email.',
  'auth/wrong-password': 'Incorrect password.',
  'auth/invalid-credential': 'Incorrect email or password.',
  'auth/too-many-requests': 'Too many attempts. Please try again later.',
  'auth/network-request-failed': 'Network error. Check your connection and try again.',
}

export default function LoginPage() {
  const router = useRouter()
  const { user, loading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!loading && user) router.replace('/courses')
  }, [loading, user, router])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!isFirebaseConfigured || !auth) {
      setError('Firebase is not configured. Add the NEXT_PUBLIC_FIREBASE_* values to .env.local (see .env.example).')
      return
    }
    setSubmitting(true)
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password)
      router.replace('/courses')
    } catch (err) {
      const code = (err as { code?: string }).code ?? ''
      setError(errorMessages[code] ?? 'Sign in failed. Please check your credentials and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-accent">
            <ShieldCheck size={24} />
          </div>
          <h1 className="text-3xl text-ink">SECUREWORLDZ</h1>
          <p className="mt-1 text-sm text-ink/55">Content admin · staff access only</p>
        </div>

        <div className="rounded-2xl border border-ink/10 bg-white p-7 shadow-sm">
          {!isFirebaseConfigured ? (
            <div className="space-y-4">
              <div className="flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
                <AlertCircle className="mt-0.5 shrink-0" size={18} />
                <p>
                  Firebase is not configured. Copy{' '}
                  <code className="font-mono text-xs">.env.example</code> to{' '}
                  <code className="font-mono text-xs">.env.local</code> and fill in your Firebase web app
                  values to enable sign-in.
                </p>
              </div>
              <Link
                href="/courses"
                className="inline-flex items-center gap-1 text-sm font-medium text-ink underline underline-offset-4"
              >
                Continue to content anyway <ArrowRight size={15} />
              </Link>
            </div>
          ) : (
            <form onSubmit={(e) => void handleSubmit(e)} className="space-y-5">
              <div>
                <label className={labelClass} htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  placeholder="you@secureworldz.com"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={inputClass}
                  placeholder="••••••••"
                />
              </div>
              {error && (
                <div role="alert" className="flex gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                  <AlertCircle className="mt-0.5 shrink-0" size={17} />
                  <span>{error}</span>
                </div>
              )}
              <button type="submit" disabled={submitting} className={`${primaryBtn} w-full`}>
                {submitting ? <><Loader2 className="animate-spin" size={16} /> Signing in…</> : <>Sign in <ArrowRight size={16} /></>}
              </button>
            </form>
          )}
        </div>
        <p className="mt-6 text-center text-xs text-ink/45">
          Access is restricted to authorized staff accounts.
        </p>
      </div>
    </main>
  )
}
