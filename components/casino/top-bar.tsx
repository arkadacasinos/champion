"use client"

import { Search, MessageCircle, Globe, Crown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TopBar() {
  return (
    <header className="sticky top-0 z-30 flex items-center gap-2 h-16 px-3 sm:px-4 lg:px-6 border-b border-border bg-background/80 backdrop-blur-xl">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden text-foreground/80 shrink-0"
        aria-label="Открыть меню"
      >
        <Menu className="size-5" />
      </Button>

      {/* Mobile logo */}
      <div className="flex items-center gap-2 lg:hidden min-w-0">
        <div className="size-8 rounded-lg bg-gradient-to-br from-[oklch(0.7_0.22_295)] to-[oklch(0.5_0.24_280)] flex items-center justify-center shrink-0">
          <Crown className="size-4 text-white" />
        </div>
        <span className="font-display font-bold text-sm tracking-wide truncate hidden sm:inline">
          CHAMPION
        </span>
      </div>

      {/* Search desktop */}
      <div className="hidden md:flex items-center gap-2 flex-1 min-w-0 max-w-md ml-2">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Поиск игр, провайдеров…"
            className="w-full h-10 pl-10 pr-4 rounded-full bg-secondary/60 border border-border text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          />
        </div>
      </div>

      <div className="ml-auto flex items-center gap-1.5 sm:gap-2 shrink-0">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground/80 hover:text-foreground"
          aria-label="Поиск"
        >
          <Search className="size-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hidden sm:flex text-foreground/80 hover:text-foreground"
          aria-label="Чат"
        >
          <MessageCircle className="size-5" />
        </Button>
        <button className="hidden md:flex items-center gap-1.5 px-3 h-9 rounded-full bg-secondary/60 hover:bg-secondary text-sm font-medium transition-colors">
          <Globe className="size-4 text-muted-foreground" />
          <span>RU</span>
        </button>

        <Button
          variant="ghost"
          className="h-9 px-2.5 sm:px-4 text-xs sm:text-sm font-semibold text-foreground/90 hover:text-foreground hover:bg-secondary"
        >
          Вход
        </Button>
        <Button className="h-9 px-3 sm:px-4 text-xs sm:text-sm font-bold rounded-full bg-gradient-to-r from-[oklch(0.65_0.22_295)] to-[oklch(0.55_0.24_290)] hover:opacity-90 text-white shadow-lg shadow-primary/30">
          <span className="hidden sm:inline">Регистрация</span>
          <span className="sm:hidden">Регистр.</span>
        </Button>
      </div>
    </header>
  )
}
