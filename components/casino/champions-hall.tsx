import { Crown, ChevronRight, Trophy, Target } from "lucide-react"

const winners = [
  { rank: 1, user: "f4b****", win: "5 042 705,20 RUB", prize: "🏆", note: "x1009.40" },
  { rank: 2, user: "tetra***", win: "1 282 647,25 RUB", prize: "🥈", note: "x539.21" },
  { rank: 3, user: "Xerb***", win: "1 099 364,25 RUB", prize: "🥉", note: "x420" },
]

const rounds = [
  { rank: 1, user: "rebbe***", rounds: "28 605", prize: "🏆" },
  { rank: 2, user: "den7***", rounds: "27 940", prize: "🥈" },
  { rank: 3, user: "Estd5***", rounds: "20 416", prize: "🥉" },
]

type Row = { rank: number; user: string; value: string; prize: string }

export function ChampionsHall() {
  return (
    <section className="px-3 sm:px-4 lg:px-6 mt-8">
      <div className="flex items-center justify-between mb-3 gap-2">
        <h2 className="flex items-center gap-2 font-display font-bold text-lg md:text-xl min-w-0 truncate">
          <Crown className="size-5 text-accent shrink-0" />
          <span className="truncate">Зал чемпионов</span>
        </h2>
        <button className="flex items-center gap-1 text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground shrink-0">
          <span className="hidden sm:inline">Смотреть все</span>
          <span className="sm:hidden">Все</span>
          <ChevronRight className="size-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Leaderboard
          title="Чемпионы по выигрышам"
          icon={Trophy}
          valueLabel="Выигрыш"
          rows={winners.map((w) => ({ rank: w.rank, user: w.user, value: w.win, prize: w.prize }))}
        />

        <Leaderboard
          title="Чемпионы по раундам"
          icon={Target}
          valueLabel="Раунды"
          rows={rounds.map((w) => ({ rank: w.rank, user: w.user, value: w.rounds, prize: w.prize }))}
        />

        <div className="rounded-2xl bg-card ring-1 ring-border p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <Crown className="size-4 text-accent shrink-0" />
            <h3 className="font-semibold text-sm truncate">Чемпионы турниров</h3>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center py-8 text-center">
            <div className="size-12 rounded-full bg-secondary flex items-center justify-center mb-3">
              <Trophy className="size-6 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground text-balance">Скоро здесь будут результаты</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Leaderboard({
  title,
  icon: Icon,
  valueLabel,
  rows,
}: {
  title: string
  icon: typeof Trophy
  valueLabel: string
  rows: Row[]
}) {
  return (
    <div className="rounded-2xl bg-card ring-1 ring-border overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-gradient-to-r from-primary/10 to-transparent">
        <Icon className="size-4 text-accent shrink-0" />
        <h3 className="font-semibold text-sm truncate">{title}</h3>
      </div>

      <ul className="divide-y divide-border/40">
        {rows.map((r) => (
          <li key={r.rank} className="flex items-center gap-3 px-3 py-2.5 min-w-0">
            <span className="inline-flex items-center justify-center size-7 rounded-full bg-primary/20 text-primary font-bold text-xs shrink-0">
              {r.rank}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{r.user}</p>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{valueLabel}</p>
            </div>
            <span className="text-xs sm:text-sm font-semibold tabular-nums text-foreground/90 truncate max-w-[45%] text-right">
              {r.value}
            </span>
            <span className="text-lg shrink-0" aria-hidden>
              {r.prize}
            </span>
          </li>
        ))}
      </ul>

      <button className="w-full py-2.5 text-xs font-semibold text-primary hover:bg-primary/10 transition-colors border-t border-border/40">
        Развернуть
      </button>
    </div>
  )
}
