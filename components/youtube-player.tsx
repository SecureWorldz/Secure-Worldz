"use client"

import { useState } from "react"
import { PlayCircle, Youtube } from "lucide-react"

interface YoutubePlayerProps {
  videoId: string
  title: string
  /** Small caption shown in the bottom-left overlay of the poster frame */
  highlight?: string
  className?: string
}

/**
 * Lightweight YouTube player.
 * Renders a poster frame with a play button and only mounts the real
 * iframe embed once the user clicks it (no YouTube JS loaded up front).
 */
export function YoutubePlayer({
  videoId,
  title,
  highlight,
  className = "",
}: YoutubePlayerProps) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <div
        className={`relative w-full aspect-video overflow-hidden rounded-xl border border-[rgba(55,50,47,0.15)] bg-black shadow-xs ${className}`}
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
    )
  }

  return (
    <div
      className={`relative w-full aspect-video overflow-hidden rounded-xl border border-[rgba(55,50,47,0.15)] bg-[#1F1E1D] text-white shadow-xs group/thumb ${className}`}
    >
      {/* Poster frame */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: `url(https://i.ytimg.com/vi/${videoId}/hqdefault.jpg)`,
        }}
      />
      <div className="absolute inset-0 bg-black/35" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:12px_12px] opacity-30"
      />

      {/* Top bar */}
      <div className="absolute inset-x-0 top-0 z-10 flex justify-between items-center px-4 pt-3">
        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
          Secureworldz Free Access
        </span>
        <Youtube className="w-4 h-4 text-red-500" />
      </div>

      {/* Bottom bar */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-between items-center px-4 pb-3 text-[10px] font-mono text-neutral-400">
        <span>{highlight}</span>
        <span>HD 1080P</span>
      </div>

      {/* Play button */}
      <button
        type="button"
        onClick={() => setPlaying(true)}
        aria-label={`Play ${title}`}
        className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer"
      >
        <span className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/30 group-hover/thumb:bg-[#181716] group-hover/thumb:text-[#39F763] group-hover/thumb:scale-110 transition-all shadow-xs">
          <PlayCircle className="w-6 h-6 group-hover/thumb:text-[#39F763] transition-colors" />
        </span>
      </button>
    </div>
  )
}

export default YoutubePlayer
