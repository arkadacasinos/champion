"use client"

import { Search, Star, Users, Sparkles, Crown, Rocket, Layers, Joystick, Gift, Tv, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = [
  { icon: Search, label: null },
  { icon: Star, label: "Промо/Акции", active: true, color: "text-accent" },
  { icon: Users, label: "Играем в Мяч" },
  { icon: Sparkles, label: "Топ" },
  { icon: Sparkles, label: "Новые" },
  { icon: Crown, label: "Champion Originals" },
  { icon: Rocket, label: "Crash Игры" },
  { icon: Layers, label: "Классика" },
  { icon: Joystick, label: "Джекпот" },
  { icon: Gift, label: "Открытые бонусы" },
  { icon: Tv, label: "Live Казино" },
  { icon: Trophy, label: "Выбор Чемпи" },
]

export function CategoryTabs() {
  return (
    <div className="border-b border-border/60">
      <div className="flex gap-1 px-3 sm:px-4 lg:px-6 py-3 overflow-x-auto no-scrollbar">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={cn(
              "flex items-center gap-2 shrink-0 h-10 px-4 rounded-full text-sm font-medium transition-all",
              tab.active
                ? "bg-gradient-to-r from-primary/40 to-primary/10 text-foreground ring-1 ring-primary/40"
                : "bg-secondary/50 text-foreground/70 hover:bg-secondary hover:text-foreground",
            )}
          >
            <tab.icon className={cn("size-4", tab.color ?? (tab.active ? "text-accent" : "text-foreground/60"))} />
            {tab.label && <span>{tab.label}</span>}
          </button>
        ))}
      </div>
    </div>
  )
}
