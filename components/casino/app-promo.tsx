import { Monitor, Smartphone, Send } from "lucide-react"

export function AppPromo() {
  return (
    <section className="px-3 sm:px-4 lg:px-6 mt-10">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[oklch(0.3_0.18_300)] via-[oklch(0.22_0.15_280)] to-[oklch(0.18_0.12_265)] ring-1 ring-primary/30 p-6 sm:p-8 md:p-12">
        {/* glow */}
        <div className="absolute -left-20 -top-20 size-80 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
        <div className="absolute -right-20 -bottom-20 size-80 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

        <div className="relative grid md:grid-cols-2 gap-6 items-center">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 text-xs font-semibold text-white mb-4">
              <Send className="size-3" />
              Champion App
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white text-balance leading-tight">
              Чемпион всегда с Вами!
            </h2>
            <p className="mt-3 text-white/70 text-sm md:text-base text-pretty">
              Установи приложение и получи быстрый доступ к играм, турнирам и эксклюзивным бонусам прямо со
              своего устройства.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
              <button className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-4 sm:px-6 rounded-full bg-gradient-to-r from-[oklch(0.7_0.22_295)] to-[oklch(0.55_0.24_290)] text-white font-bold text-xs sm:text-sm hover:opacity-90 shadow-xl shadow-primary/40">
                <Monitor className="size-4 shrink-0" />
                <span className="truncate">Установить на компьютер</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-4 sm:px-6 rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/20 text-white font-bold text-xs sm:text-sm hover:bg-white/20">
                <Smartphone className="size-4 shrink-0" />
                <span className="truncate">Установить на телефон</span>
              </button>
            </div>
            <p className="mt-4 text-xs text-white/50 text-pretty">
              Мы используем инновационную технологию установки приложения прямо из браузера. Для любой
              операционной системы.
            </p>
          </div>

          <div className="relative flex items-center justify-center order-first md:order-last">
            <div className="relative">
              <div className="text-[120px] sm:text-[150px] md:text-[200px] leading-none drop-shadow-2xl select-none">
                👸
              </div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold shadow-lg">
                JACKPOT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
