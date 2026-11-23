import { ShieldCheck, Users, Bug, Trophy, Sparkles, Award } from "lucide-react"

export default function TrustLogoStrip() {
  const logos = [
    { label: "OWASP 2026", icon: ShieldCheck, sub: "ASI Aligned" },
    { label: "DRAGOZ", icon: Users, sub: "300+ Collective" },
    { label: "CyberJai", icon: Sparkles, sub: "Tech Educator" },
    { label: "BugAtlas", icon: Bug, sub: "Vulnerability Tool" },
    { label: "Prathyusha", icon: Award, sub: "Academic Partner" },
    { label: "100+ Events", icon: Trophy, sub: "National Reach" },
  ]

  return (
    <div className="w-full bg-[#f2f0eb] border-y border-[#e3e3e2] py-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        <p className="text-xs uppercase tracking-wider text-[#666666] font-[460] text-center mb-6">
          Trusted by universities, ethical hackers, and industry security teams
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border border-[#e3e3e2] bg-[#ffffff] divide-x divide-y lg:divide-y-0 divide-[#e3e3e2]">
          {logos.map((item, idx) => {
            const IconComponent = item.icon
            return (
              <div
                key={idx}
                className="bg-[#ffffff] py-6 px-4 flex flex-col items-center justify-center text-center group hover:bg-[#f2f0eb]/50 transition-colors"
              >
                <div className="flex items-center gap-2 text-[#292827] mb-1">
                  <IconComponent className="w-5 h-5 text-[#292827]" />
                  <span className="text-sm font-[540] tracking-tight">{item.label}</span>
                </div>
                <span className="text-[11px] text-[#666666] font-[460]">{item.sub}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
