import { Volleyball, Spade, Plane } from "lucide-react"

const modes = [
  {
    label: "Ставки на спорт",
    short: "Спорт",
    icon: Volleyball,
    gradient: "from-[oklch(0.55_0.22_30)] to-[oklch(0.4_0.2_350)]",
  },
  {
    label: "Выигрывай в казино",
    short: "Казино",
    icon: Spade,
    gradient: "from-[oklch(0.55_0.24_300)] to-[oklch(0.4_0.22_280)]",
    active: true,
  },
  {
    label: "Aviatrix",
    short: "Aviatrix",
    icon: Plane,
    gradient: "from-[oklch(0.6_0.2_200)] to-[oklch(0.4_0.22_260)]",
  },
]

export function ModeTabs() {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3 px-3 sm:px-4 lg:px-6 mt-3">
      {modes.map((m) => (
        <button
          key={m.label}
          className={`group relative overflow-hidden rounded-xl h-12 sm:h-14 px-3 sm:px-4 bg-gradient-to-r ${m.gradient} ring-1 ring-white/10 hover:ring-white/30 transition-all min-w-0`}
        >
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          <div className="relative flex items-center gap-2 sm:gap-3 h-full min-w-0">
            <m.icon className="size-4 sm:size-5 text-white shrink-0" />
            <span className="font-semibold text-white text-xs sm:text-sm md:text-base text-left truncate">
              <span className="sm:hidden">{m.short}</span>
              <span className="hidden sm:inline">{m.label}</span>
            </span>
            {m.active && (
              <span className="ml-auto size-2 rounded-full bg-accent shadow-lg shadow-accent/50 shrink-0" />
            )}
          </div>
        </button>
      ))}
    </div>
  )
}
