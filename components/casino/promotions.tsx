import { ChevronRight, Trophy, Gift, Heart } from "lucide-react"

const items = [
  {
    title: "Впиши своё имя в зал чемпионов!",
    eyebrow: "Акция",
    desc: "Крупные выигрыши",
    icon: Trophy,
    gradient: "from-[oklch(0.55_0.25_300)] via-[oklch(0.4_0.22_280)] to-[oklch(0.3_0.18_265)]",
    art: "🏆",
  },
  {
    title: "Лови подарки каждый день!",
    eyebrow: "Акция • До 04:01:14",
    desc: "Wazdan-фест",
    icon: Gift,
    gradient: "from-[oklch(0.55_0.22_30)] via-[oklch(0.45_0.22_15)] to-[oklch(0.35_0.2_350)]",
    art: "🎁",
  },
  {
    title: "Получай больше с каждым уровнем",
    eyebrow: "Программа",
    desc: "Программа лояльности",
    icon: Heart,
    gradient: "from-[oklch(0.6_0.18_200)] via-[oklch(0.45_0.2_240)] to-[oklch(0.3_0.2_280)]",
    art: "💜",
  },
]

export function Promotions() {
  return (
    <section className="px-3 sm:px-4 lg:px-6 mt-8">
      <div className="flex items-center justify-between mb-3 gap-2">
        <h2 className="font-display font-bold text-lg md:text-xl truncate">Акции</h2>
        <button className="flex items-center gap-1 text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground shrink-0">
          <span className="hidden sm:inline">Все акции</span>
          <span className="sm:hidden">Все</span>
          <ChevronRight className="size-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {items.map((it) => (
          <article
            key={it.title}
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${it.gradient} p-4 sm:p-5 min-h-[150px] ring-1 ring-white/10`}
          >
            <div className="absolute -right-6 -bottom-6 text-7xl sm:text-8xl opacity-25 select-none pointer-events-none">
              {it.art}
            </div>
            <div className="relative">
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-white/15 text-white">
                <it.icon className="size-3" />
                {it.eyebrow}
              </span>
              <h3 className="mt-3 font-display font-bold text-lg sm:text-xl text-white text-balance leading-tight max-w-[75%]">
                {it.title}
              </h3>
              <p className="mt-1 text-xs text-white/70 max-w-[80%] text-pretty">{it.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
