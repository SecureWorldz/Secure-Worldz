import React from "react"

/**
 * Hand-drawn doodle loop arrow matching the reference image layout.
 * Starts in an organic loop and points toward the laptop and defense card.
 */
export function DoodleLoopArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 110 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M52 14 C28 18 16 48 36 56 C58 64 64 30 46 32 C26 34 18 72 38 92 C52 106 72 110 88 112"
        stroke="#27272A"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arrow tip */}
      <path
        d="M78 103 L89 112 L77 121"
        stroke="#27272A"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Upward trending threat mitigation sparkline for the "Threat Defense" floating card.
 */
export function PerformanceSparkline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cyber-sparkline" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#27272A" />
          <stop offset="70%" stopColor="#1E3A2B" />
          <stop offset="100%" stopColor="#39F763" />
        </linearGradient>
      </defs>
      <path
        d="M2 25 C24 25 40 22 56 23 C72 24 82 10 98 4"
        stroke="url(#cyber-sparkline)"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Ascending 3-bar security level chart for the "OWASP 2026" floating card.
 */
export function ThreeBarChart({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="14" width="4" height="8" rx="2" fill="#18181B" />
      <rect x="9.5" y="8" width="4" height="14" rx="2" fill="#18181B" />
      <rect x="17" y="2" width="4" height="20" rx="2" fill="#10B981" />
    </svg>
  )
}

/**
 * Shield vector security icon for the "OWASP 2026" floating card.
 */
export function ShieldSecurityIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2L3 6V12C3 17.5 7 21.5 12 22C17 21.5 21 17.5 21 12V6L12 2Z"
        stroke="#18181B"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12L11 14L15 10"
        stroke="#10B981"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Organic botanical foliage sprig / leaf branch entering from top-right.
 * Features multi-shade leaves with soft ambient drop-shadow.
 */
export function BotanicalBranch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <filter id="foliage-shadow" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="12" dy="20" stdDeviation="14" floodColor="#0F1F17" floodOpacity="0.22" />
        </filter>
        <linearGradient id="leaf-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#415C49" />
          <stop offset="60%" stopColor="#2E4738" />
          <stop offset="100%" stopColor="#1E3327" />
        </linearGradient>
        <linearGradient id="leaf-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A6953" />
          <stop offset="60%" stopColor="#35513F" />
          <stop offset="100%" stopColor="#243C2E" />
        </linearGradient>
        <linearGradient id="leaf-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#324B3B" />
          <stop offset="100%" stopColor="#1B2B21" />
        </linearGradient>
      </defs>

      <g filter="url(#foliage-shadow)">
        {/* Main curved woody stem */}
        <path
          d="M245 10 C220 80 185 180 140 290 C125 325 110 350 95 360"
          stroke="#382C1E"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Leaf 1 (Top Upper Right) */}
        <g transform="translate(195, 20) rotate(-35)">
          <path
            d="M0 0 C25 -35 65 -20 85 0 C65 25 25 25 0 0Z"
            fill="url(#leaf-grad-1)"
          />
          <path d="M0 0 C35 -5 65 -5 85 0" stroke="#52705C" strokeWidth="1" strokeOpacity="0.4" />
        </g>

        {/* Leaf 2 (Upper Left branch) */}
        <g transform="translate(205, 75) rotate(-110)">
          <path
            d="M0 0 C30 -40 75 -25 95 0 C75 30 30 30 0 0Z"
            fill="url(#leaf-grad-2)"
          />
          <path d="M0 0 C40 -5 70 -5 95 0" stroke="#5D7E68" strokeWidth="1" strokeOpacity="0.4" />
        </g>

        {/* Leaf 3 (Right side branch) */}
        <g transform="translate(190, 120) rotate(10)">
          <path
            d="M0 0 C30 -38 80 -25 100 0 C80 28 30 28 0 0Z"
            fill="url(#leaf-grad-1)"
          />
          <path d="M0 0 C40 -5 75 -5 100 0" stroke="#52705C" strokeWidth="1" strokeOpacity="0.4" />
        </g>

        {/* Leaf 4 (Left middle branch) */}
        <g transform="translate(170, 175) rotate(-115)">
          <path
            d="M0 0 C28 -36 70 -22 90 0 C70 26 28 26 0 0Z"
            fill="url(#leaf-grad-3)"
          />
          <path d="M0 0 C35 -5 65 -5 90 0" stroke="#486552" strokeWidth="1" strokeOpacity="0.4" />
        </g>

        {/* Leaf 5 (Right middle-lower branch) */}
        <g transform="translate(160, 220) rotate(20)">
          <path
            d="M0 0 C26 -34 68 -20 85 0 C68 25 26 25 0 0Z"
            fill="url(#leaf-grad-2)"
          />
          <path d="M0 0 C35 -5 65 -5 85 0" stroke="#5D7E68" strokeWidth="1" strokeOpacity="0.4" />
        </g>

        {/* Leaf 6 (Lower left branch) */}
        <g transform="translate(135, 275) rotate(-105)">
          <path
            d="M0 0 C24 -30 60 -18 78 0 C60 22 24 22 0 0Z"
            fill="url(#leaf-grad-1)"
          />
          <path d="M0 0 C30 -5 55 -5 78 0" stroke="#52705C" strokeWidth="1" strokeOpacity="0.4" />
        </g>

        {/* Leaf 7 (Terminal leaf tip) */}
        <g transform="translate(95, 360) rotate(-65)">
          <path
            d="M0 0 C22 -28 55 -16 70 0 C55 20 22 20 0 0Z"
            fill="url(#leaf-grad-2)"
          />
          <path d="M0 0 C28 -5 50 -5 70 0" stroke="#5D7E68" strokeWidth="1" strokeOpacity="0.4" />
        </g>
      </g>
    </svg>
  )
}
