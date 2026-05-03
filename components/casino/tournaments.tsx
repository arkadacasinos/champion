import { ChevronRight, Trophy, Clock } from "lucide-react"

const items = [
  {
    title: "Book Of Billionaire",
    badge: "FUGASO",
    desc: "Сразись за 69 750 000 RUB",
    type: "Турнир • Fugaso",
    countdown: "26d 03:09:15",
    art: "👑",
    gradient: "from-[oklch(0.55_0.25_300)] via-[oklch(0.4_0.22_280)] to-[oklch(0.25_0.18_260)]",
  },
  {
    title: "Lucky Races",
    badge: "3 OAKS",
    desc: "Врывайся в гонку за 225 000 000 RUB",
    type: "Турнир • 3Oaks",
    countdown: "04d 02:09:15",
    art: "🏁",
    gradient: "from-[oklch(0.55_0.22_30)] via-[oklch(0.45_0.22_15)] to-[oklch(0.3_0.18_350)]",
  },
  {
    title: "Cash Days",
    badge: "PLAYSON",
    desc: "Покажи класс и раздели 13 500 000 RUB",
    type: "Турнир • Playson",
    countdown: "05d 04:04:15",
    art: "💰",
    gradient: "from-[oklch(0.6_0.18_200)] via-[oklch(0.45_0.2_240)] to-[oklch(0.3_0.2_280)]",
  },
]

export function Tournaments() {
  return (
    <section className="px-3 sm:px-4 lg:px-6 mt-8">
      <div className="flex items-center justify-between mb-3 gap-2">
        <h2 className="font-display font-bold text-lg md:text-xl truncate">Турниры</h2>
        <button className="flex items-center gap-1 text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground shrink-0">
          <span className="hidden sm:inline">Все турниры</span>
          <span className="sm:hidden">Все</span>
          <ChevronRight className="size-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {items.map((it) => (
          <article
            key={it.title}
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${it.gradient} p-4 sm:p-5 min-h-[200px] ring-1 ring-white/10 flex flex-col justify-between`}
          >
            <div className="absolute -right-4 -bottom-4 text-8xl sm:text-9xl opacity-20 select-none pointer-events-none">
              {it.art}
            </div>

            <div className="relative">
              <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-accent text-accent-foreground">
                  <Trophy className="size-3" />
                  {it.badge}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-full bg-black/30 text-white/90 backdrop-blur-sm">
                  <Clock className="size-3" />
                  {it.countdown}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white text-balance">
                {it.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-white/80 max-w-[90%] text-pretty">{it.desc}</p>
            </div>

            <div className="relative mt-4 flex items-center justify-between gap-2">
              <span className="text-[11px] sm:text-xs text-white/60 truncate">{it.type}</span>
              <button className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-white hover:gap-2 transition-all shrink-0">
                Участвовать
                <ChevronRight className="size-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
