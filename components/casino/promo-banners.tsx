import { ArrowRight, Sparkles, Crown, Candy } from "lucide-react"

const banners = [
  {
    eyebrow: "Акция",
    title: "Раскрути май на FS и бонусы!",
    cta: "Принять участие",
    icon: Sparkles,
    gradient:
      "from-[oklch(0.55_0.25_300)] via-[oklch(0.45_0.22_280)] to-[oklch(0.35_0.18_265)]",
    accent: "bg-accent text-accent-foreground",
    art: "🎰",
  },
  {
    eyebrow: "Ранний доступ • от Formula Spin",
    title: "Стань королём в топ-слоте",
    cta: "Играть",
    icon: Crown,
    gradient:
      "from-[oklch(0.55_0.22_350)] via-[oklch(0.4_0.22_330)] to-[oklch(0.3_0.18_300)]",
    accent: "bg-white/15 text-white",
    art: "👑",
  },
  {
    eyebrow: "Ранний доступ • от Hacksaw",
    title: "Собирай леденцы сейчас!",
    cta: "К игре",
    icon: Candy,
    gradient:
      "from-[oklch(0.6_0.2_200)] via-[oklch(0.45_0.2_240)] to-[oklch(0.3_0.2_280)]",
    accent: "bg-accent text-accent-foreground",
    art: "🍬",
  },
]

export function PromoBanners() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 px-3 sm:px-4 lg:px-6 pt-5">
      {banners.map((b, i) => (
        <article
          key={i}
          className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${b.gradient} p-5 min-h-[160px] flex flex-col justify-between ring-1 ring-white/10 shadow-xl shadow-black/30`}
        >
          {/* decorative blur */}
          <div className="absolute -right-10 -top-10 size-48 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute right-2 bottom-2 text-7xl opacity-30 select-none pointer-events-none leading-none">
            {b.art}
          </div>

          <div className="relative flex items-start justify-between gap-2">
            <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${b.accent}`}>
              <b.icon className="size-3" />
              {b.eyebrow}
            </span>
          </div>

          <div className="relative">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white text-balance leading-tight max-w-[80%]">
              {b.title}
            </h3>
            <button className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white">
              {b.cta}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </article>
      ))}
    </section>
  )
}
