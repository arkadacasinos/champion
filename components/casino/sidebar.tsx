import {
  LayoutGrid,
  Flame,
  Trophy,
  Crown,
  Heart,
  Plane,
  Joystick,
  Tv,
  Volleyball,
  Gamepad2,
  Dumbbell,
  Gift,
} from "lucide-react"
import { cn } from "@/lib/utils"

const items = [
  { label: "Все", icon: LayoutGrid, active: false },
  { label: "Акции", icon: Flame, active: false, badge: "HOT" },
  { label: "Турниры", icon: Trophy, active: false },
  { label: "Зал чемпионов", icon: Crown, active: false },
  { label: "Программа лояльности", icon: Heart, active: false },
  { label: "Aviatrix", icon: Plane, active: true, brand: true },
  { label: "Слоты", icon: Joystick, active: false },
  { label: "Live Казино", icon: Tv, active: false },
  { label: "Спорт", icon: Volleyball, active: false },
  { label: "Киберспорт", icon: Gamepad2, active: false },
  { label: "V-Спорт", icon: Dumbbell, active: false },
]

export function Sidebar() {
  return (
    <aside className="hidden lg:flex sticky top-0 h-screen w-56 shrink-0 flex-col bg-sidebar border-r border-sidebar-border">
      {/* Logo */}
      <div className="flex items-center gap-2 px-5 h-16 border-b border-sidebar-border">
        <div className="size-9 rounded-lg bg-gradient-to-br from-[oklch(0.7_0.22_295)] to-[oklch(0.5_0.24_280)] flex items-center justify-center shadow-lg shadow-primary/30">
          <Crown className="size-5 text-white" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-display font-bold text-sm tracking-wide text-sidebar-foreground">
            CHAMPION
          </span>
          <span className="font-display text-[10px] tracking-[0.3em] text-primary">SLOTS</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3 px-2">
        <ul className="flex flex-col gap-1">
          {items.map((it) => (
            <li key={it.label}>
              <button
                className={cn(
                  "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  it.active
                    ? "bg-gradient-to-r from-primary/30 to-primary/5 text-sidebar-foreground ring-1 ring-primary/40"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground",
                )}
              >
                <it.icon
                  className={cn(
                    "size-4 shrink-0",
                    it.active ? "text-primary" : "text-sidebar-foreground/60 group-hover:text-primary",
                  )}
                />
                <span className="truncate flex-1 text-left">{it.label}</span>
                {it.badge && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-accent text-accent-foreground">
                    {it.badge}
                  </span>
                )}
                {it.brand && !it.active && <span className="size-1.5 rounded-full bg-primary" />}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-6 mx-2 rounded-xl bg-gradient-to-br from-primary/30 via-primary/10 to-transparent p-3 ring-1 ring-primary/20">
          <Gift className="size-5 text-accent mb-2" />
          <p className="text-xs font-semibold text-sidebar-foreground leading-tight">
            Получи бонус новичка +100%
          </p>
          <p className="text-[10px] text-sidebar-foreground/60 mt-1">До 50 000 ₽</p>
        </div>
      </nav>
    </aside>
  )
}
