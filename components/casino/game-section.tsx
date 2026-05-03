import type { LucideIcon } from "lucide-react"
import { ChevronRight } from "lucide-react"
import { GameCard, type Game } from "./game-card"

export function GameSection({
  title,
  icon: Icon,
  iconColor = "text-accent",
  games,
  cta = "Все игры",
  size = "md",
}: {
  title: string
  icon?: LucideIcon
  iconColor?: string
  games: Game[]
  cta?: string
  size?: "md" | "lg"
}) {
  return (
    <section className="px-3 sm:px-4 lg:px-6 mt-8">
      <div className="flex items-center justify-between mb-3 gap-2">
        <h2 className="flex items-center gap-2 font-display font-bold text-lg md:text-xl min-w-0 truncate">
          {Icon && <Icon className={`size-5 shrink-0 ${iconColor}`} />}
          <span className="truncate">{title}</span>
        </h2>
        <button className="flex items-center gap-1 text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors shrink-0">
          {cta}
          <ChevronRight className="size-4" />
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-3 sm:-mx-4 lg:-mx-6 px-3 sm:px-4 lg:px-6 pb-2">
        {games.map((g, i) => (
          <GameCard key={`${title}-${i}`} game={g} size={size} />
        ))}
      </div>
    </section>
  )
}
