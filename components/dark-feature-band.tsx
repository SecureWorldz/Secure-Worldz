import Link from "next/link"
import { ArrowRight, ShieldCheck, Terminal, Cpu } from "lucide-react"

export default function DarkFeatureBand() {
  return (
    <section className="w-full bg-[#0c4243] text-white py-20 lg:py-28 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left half: Layered translucent geometric rectangles with handwritten script overlays */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[360px] sm:min-h-[420px]">
          {/* Background layered translucent geometric rectangles */}
          <div className="relative w-full max-w-[460px] h-[340px] flex items-center justify-center">
            {/* Lavender rectangle 50% opacity */}
            <div className="absolute w-[80%] h-[75%] rounded-[16px] bg-[#d4c7ff]/40 backdrop-blur-md border border-white/20 transform -rotate-6 top-2 left-4 shadow-lg transition-transform hover:-rotate-3" />

            {/* Blue rectangle 50% opacity */}
            <div className="absolute w-[82%] h-[72%] rounded-[16px] bg-[#38bdf8]/35 backdrop-blur-md border border-white/25 transform rotate-3 bottom-3 right-3 shadow-lg transition-transform hover:rotate-1" />

            {/* Pink rectangle 50% opacity */}
            <div className="absolute w-[78%] h-[68%] rounded-[16px] bg-[#f472b6]/30 backdrop-blur-md border border-white/20 transform rotate-1 top-8 right-6 shadow-lg" />

            {/* Foreground Glass Card with Technical Script & Blueprint details */}
            <div className="relative z-10 w-[92%] rounded-[16px] bg-white/10 backdrop-blur-xl border border-white/30 p-6 text-white shadow-2xl flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/15">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#d4c7ff]" />
                  <span className="text-xs font-[540] tracking-wide text-white uppercase">
                    OWASP 2026 ASI-01 · Threat Matrix
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#d4c7ff] bg-white/10 px-2 py-0.5 rounded-full">
                  Verified
                </span>
              </div>

              {/* Script overlay notation */}
              <div className="flex flex-col gap-2 font-mono text-xs">
                <div className="flex items-center justify-between text-white/90">
                  <span className="text-white/60">Target:</span>
                  <span className="text-[#d4c7ff]">Multi-Agent Toolchain Sandbox</span>
                </div>
                <div className="flex items-center justify-between text-white/90">
                  <span className="text-white/60">Vector:</span>
                  <span className="text-[#f472b6]">Indirect Prompt Infiltration</span>
                </div>
                <div className="flex items-center justify-between text-white/90">
                  <span className="text-white/60">Defense:</span>
                  <span className="text-[#38bdf8]">Heuristic Runtime Guardrails</span>
                </div>
              </div>

              {/* Annotation badge */}
              <div className="mt-2 p-3 rounded-[8px] bg-black/20 border border-white/10 text-[11px] text-white/80 italic font-serif">
                &ldquo;Direct manipulation of LLM context boundaries intercepted at execution layer.&rdquo;
              </div>
            </div>
          </div>
        </div>

        {/* Right half: 64px Super Sans VF weight 460 #ffffff headline, body text at 16px weight 460 #ffffff at 80% opacity, and a white-outlined ghost button */}
        <div className="lg:col-span-6 flex flex-col items-start gap-6 text-left">
          <span className="text-xs uppercase tracking-wider text-[#d4c7ff] font-[460]">
            Feature Storytelling · The Only Dark Surface
          </span>

          <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-[460] leading-[0.96] tracking-[-0.028em] text-white">
            A new standard for offensive AI security.
          </h2>

          <p className="text-[16px] font-[460] leading-[1.5] text-white/80 max-w-[500px]">
            As autonomous agents and LLM APIs orchestrate real software workflows, vulnerabilities shift from standard memory corruption to prompt injection, semantic privilege escalation, and tool-use hijack. SECUREWORLDZ pioneers 10 dedicated simulation environments built for the OWASP 2026 framework.
          </p>

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 border border-white text-white rounded-[8px] px-5 py-2 text-sm font-[460] hover:bg-white/15 transition-colors"
          >
            <span>Read our announcement</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
