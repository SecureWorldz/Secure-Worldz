import React from "react"

/**
 * BotanicalFoliage Component
 * A standalone, unclipped botanical leaf branch that enters from the top right.
 * Designed with a spacious 450x520 viewBox and 40px+ safety margins on all sides
 * so no leaf, stem, or drop-shadow can ever be clipped or cut off.
 */
export function BotanicalFoliage({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg
        viewBox="-40 -30 460 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        aria-hidden="true"
      >
        <defs>
          {/* Soft ambient natural shadow for realistic depth */}
          <filter id="foliage-ambient-shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="12" dy="20" stdDeviation="16" floodColor="#0E1E14" floodOpacity="0.22" />
          </filter>

          {/* Gradients for multi-toned, sunlit leaves */}
          <linearGradient id="leaf-tone-sun" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A6E55" />
            <stop offset="45%" stopColor="#355541" />
            <stop offset="100%" stopColor="#1E3627" />
          </linearGradient>

          <linearGradient id="leaf-tone-mid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3D5F48" />
            <stop offset="50%" stopColor="#2A4534" />
            <stop offset="100%" stopColor="#182E20" />
          </linearGradient>

          <linearGradient id="leaf-tone-deep" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#314D3A" />
            <stop offset="60%" stopColor="#22392A" />
            <stop offset="100%" stopColor="#14261B" />
          </linearGradient>
        </defs>

        <g filter="url(#foliage-ambient-shadow)">
          {/* Main Central Stem entering from top-right */}
          <path
            d="M340 10 C305 75 265 170 215 280 C195 325 170 365 145 400"
            stroke="#382C1E"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Leaf 1: Topmost leaf */}
          <g transform="translate(305, 45) rotate(-32)">
            <path
              d="M0 0 C22 -30 55 -18 74 0 C55 20 22 20 0 0Z"
              fill="url(#leaf-tone-sun)"
            />
            <path d="M0 0 C28 -4 50 -4 74 0" stroke="#60836B" strokeWidth="1" strokeOpacity="0.4" />
          </g>

          {/* Leaf 2: Upper branch extending left */}
          <g transform="translate(300, 105) rotate(-115)">
            <path
              d="M0 0 C28 -40 70 -25 90 0 C70 26 28 26 0 0Z"
              fill="url(#leaf-tone-mid)"
            />
            <path d="M0 0 C36 -6 64 -5 90 0" stroke="#52755E" strokeWidth="1" strokeOpacity="0.4" />
          </g>

          {/* Leaf 3: Upper-middle branch extending right */}
          <g transform="translate(280, 155) rotate(18)">
            <path
              d="M0 0 C26 -35 66 -22 86 0 C66 24 26 24 0 0Z"
              fill="url(#leaf-tone-sun)"
            />
            <path d="M0 0 C32 -5 60 -4 86 0" stroke="#60836B" strokeWidth="1" strokeOpacity="0.4" />
          </g>

          {/* Leaf 4: Center branch extending left (over laptop frame) */}
          <g transform="translate(255, 215) rotate(-120)">
            <path
              d="M0 0 C30 -42 75 -26 96 0 C75 28 30 28 0 0Z"
              fill="url(#leaf-tone-deep)"
            />
            <path d="M0 0 C38 -6 68 -5 96 0" stroke="#4D7058" strokeWidth="1" strokeOpacity="0.4" />
          </g>

          {/* Leaf 5: Middle branch extending right */}
          <g transform="translate(235, 270) rotate(22)">
            <path
              d="M0 0 C24 -34 62 -20 80 0 C62 23 24 23 0 0Z"
              fill="url(#leaf-tone-mid)"
            />
            <path d="M0 0 C32 -5 56 -4 80 0" stroke="#52755E" strokeWidth="1" strokeOpacity="0.4" />
          </g>

          {/* Leaf 6: Lower branch extending left towards screen */}
          <g transform="translate(200, 330) rotate(-110)">
            <path
              d="M0 0 C24 -32 60 -18 78 0 C60 22 24 22 0 0Z"
              fill="url(#leaf-tone-sun)"
            />
            <path d="M0 0 C30 -5 54 -4 78 0" stroke="#60836B" strokeWidth="1" strokeOpacity="0.4" />
          </g>

          {/* Leaf 7: Terminal leaf cluster tip */}
          <g transform="translate(145, 400) rotate(-70)">
            <path
              d="M0 0 C20 -26 52 -15 66 0 C52 18 20 18 0 0Z"
              fill="url(#leaf-tone-mid)"
            />
            <path d="M0 0 C26 -4 46 -4 66 0" stroke="#52755E" strokeWidth="1" strokeOpacity="0.4" />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default BotanicalFoliage
