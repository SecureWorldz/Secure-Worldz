import { AlertTriangle } from 'lucide-react'

export default function NotConfigured() {
  return (
    <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
      <AlertTriangle className="mt-0.5 shrink-0" size={18} />
      <div>
        <p className="font-medium">Firebase is not configured</p>
        <p className="mt-1 text-amber-800">
          Copy <code className="rounded bg-amber-100 px-1 py-0.5 font-mono text-xs">.env.example</code> to{' '}
          <code className="rounded bg-amber-100 px-1 py-0.5 font-mono text-xs">.env.local</code> and add your
          Firebase web app values. The interface is shown for preview, but reads and writes are disabled.
        </p>
      </div>
    </div>
  )
}
