import { Play, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

export type Game = {
  title: string
  provider?: string
  emoji: string
  gradient: string
  badge?: { label: string; color: "gold" | "purple" | "pink" | "cyan" | "red" }
}

const badgeStyles: Record<NonNullable<Game["badge"]>["color"], string> = {
  gold: "bg-accent text-accent-foreground",
  purple: "bg-primary text-primary-foreground",
  pink: "bg-[oklch(0.65_0.22_350)] text-white",
  cyan: "bg-[oklch(0.7_0.16_200)] text-[oklch(0.18_0.02_280)]",
  red: "bg-[oklch(0.6_0.24_25)] text-white",
}

export function GameCard({ game, size = "md" }: { game: Game; size?: "md" | "lg" }) {
  return (
    <div
      className={cn(
        "group relative shrink-0 overflow-hidden rounded-xl ring-1 ring-border hover:ring-primary/60 transition-all cursor-pointer",
        size === "lg" ? "w-[160px] md:w-[180px] aspect-[3/4]" : "w-[130px] md:w-[150px] aspect-[3/4]",
      )}
    >
      {/* Cover */}
      <div className={cn("absolute inset-0 bg-gradient-to-br", game.gradient)}>
        <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-90 group-hover:scale-110 transition-transform">
          {game.emoji}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* Top badges */}
      <div className="absolute top-2 left-2 right-2 flex items-start justify-between gap-1">
        {game.badge ? (
          <span
            className={cn(
              "text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider",
              badgeStyles[game.badge.color],
            )}
          >
            {game.badge.label}
          </span>
        ) : (
          <span />
        )}
        <button
          aria-label="Добавить в избранное"
          className="size-7 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="size-3.5" />
        </button>
      </div>

      {/* Hover play */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
        <div className="size-12 rounded-full bg-gradient-to-br from-[oklch(0.7_0.22_295)] to-[oklch(0.5_0.24_280)] flex items-center justify-center shadow-xl shadow-primary/40">
          <Play className="size-5 text-white fill-white ml-0.5" />
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-2">
        <p className="text-xs font-semibold text-white truncate">{game.title}</p>
        {game.provider && <p className="text-[10px] text-white/60 truncate">{game.provider}</p>}
      </div>
    </div>
  )
}
