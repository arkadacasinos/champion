import { ChevronRight } from "lucide-react"

const providers = [
  "Pragmatic",
  "Playson",
  "Endorphina",
  "PG Soft",
  "Amusnet",
  "VoltEnt",
  "Kendoo",
  "BGT Digital",
  "imaginelive",
  "Yggdrasil",
  "Live88",
  "NetEnt",
]

export function Providers() {
  return (
    <section className="px-3 sm:px-4 lg:px-6 mt-8">
      <div className="flex items-center justify-between mb-3 gap-2">
        <h2 className="font-display font-bold text-lg md:text-xl truncate">Провайдеры</h2>
        <button className="flex items-center gap-1 text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground shrink-0">
          <span className="hidden sm:inline">Все провайдеры</span>
          <span className="sm:hidden">Все</span>
          <ChevronRight className="size-4" />
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
        {providers.map((p) => (
          <button
            key={p}
            className="h-12 sm:h-14 rounded-xl bg-secondary/40 hover:bg-secondary ring-1 ring-border hover:ring-primary/40 flex items-center justify-center text-xs sm:text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors px-2 truncate"
          >
            {p}
          </button>
        ))}
      </div>
    </section>
  )
}
