import { Flame, Sparkles, Rocket, Crown, Tv, Trophy, Gamepad2, Zap, KeyRound, ShieldCheck } from "lucide-react"

import { Sidebar } from "@/components/casino/sidebar"
import { TopBar } from "@/components/casino/top-bar"
import { CategoryTabs } from "@/components/casino/category-tabs"
import { PromoBanners } from "@/components/casino/promo-banners"
import { ModeTabs } from "@/components/casino/mode-tabs"
import { GameSection } from "@/components/casino/game-section"
import { ThemeChips } from "@/components/casino/theme-chips"
import { Providers } from "@/components/casino/providers"
import { Promotions } from "@/components/casino/promotions"
import { Tournaments } from "@/components/casino/tournaments"
import { ChampionsHall } from "@/components/casino/champions-hall"
import { AppPromo } from "@/components/casino/app-promo"
import { SeoBlock } from "@/components/casino/seo-block"
import { SeoFaq } from "@/components/casino/seo-faq"
import { Footer } from "@/components/casino/footer"
import { JsonLd } from "@/components/casino/json-ld"

import {
  popularGames,
  topGames,
  newGames,
  crashGames,
  championsChoice,
  liveGames,
  jackpotGames,
  dropsGames,
} from "@/lib/casino-data"

export default function HomePage() {
  return (
    <div className="min-h-screen flex bg-background">
      <JsonLd />
      <Sidebar />

      <div className="flex-1 min-w-0 flex flex-col">
        <TopBar />
        <CategoryTabs />

        <main className="flex-1 pb-10">
          <PromoBanners />
          <ModeTabs />

          {/* SEO #1 — главные ключи: champion casino, champion slots, чемпион казино */}
          <SeoBlock
            icon={Crown}
            variant="accent"
            // 51 char
            title="Champion Casino — играй в Champion Slots онлайн"
            // 154 char
            text="Champion Casino и Champion Slots — премиум онлайн казино с турнирами, бонусами и live-играми. Чемпион казино каждый день дарит победы и фриспины."
          />

          <GameSection
            title="Популярные сейчас"
            icon={Flame}
            iconColor="text-[oklch(0.7_0.22_30)]"
            games={popularGames}
          />

          <ThemeChips />

          <GameSection title="Топ" icon={Sparkles} iconColor="text-accent" games={topGames} />

          <GameSection title="Новые" icon={Sparkles} iconColor="text-[oklch(0.7_0.22_350)]" games={newGames} />

          <GameSection title="Crash Игры" icon={Rocket} iconColor="text-[oklch(0.7_0.22_30)]" games={crashGames} />

          {/* SEO #2 — champion slots casino, чемпион слотс, champion казино */}
          <SeoBlock
            icon={Zap}
            // 47 char
            title="Champion Slots Casino — слоты, краш и live"
            // 152 char
            text="Champion slots casino собрал лучшие слоты от топ-провайдеров. Чемпион слотс — это краш, jackpot и live с реальными дилерами в Champion казино."
          />

          <GameSection
            title="Выбор Чемпионов"
            icon={Crown}
            iconColor="text-accent"
            games={championsChoice}
          />

          <Providers />

          <GameSection title="Live Казино" icon={Tv} iconColor="text-[oklch(0.7_0.22_350)]" games={liveGames} />

          <GameSection title="Джекпот" icon={Trophy} iconColor="text-accent" games={jackpotGames} />

          {/* SEO #3 — champion casino вход, champion casino зеркало, чемпион казино зеркало */}
          <SeoBlock
            icon={KeyRound}
            variant="accent"
            // 38 char
            title="Champion Casino вход и зеркало"
            // 152 char
            text="Champion casino вход через рабочее зеркало — быстро и безопасно. Чемпион казино зеркало откроет Champion Slots без блокировок и с полным функционалом."
          />

          <Promotions />

          <GameSection
            title="Drops & Wins"
            icon={Gamepad2}
            iconColor="text-[oklch(0.7_0.16_200)]"
            games={dropsGames}
          />

          <Tournaments />

          <ChampionsHall />

          {/* SEO #4 — чемпион казино официальный сайт, champion casino играть, чемпион казино онлайн */}
          <SeoBlock
            icon={ShieldCheck}
            // 36 char
            title="Чемпион казино — официальный сайт"
            // 155 char
            text="Чемпион казино официальный сайт — лицензированное чемпион казино онлайн. Заходи, регистрируйся и начни Champion Casino играть в чемпион слотс казино."
          />

          <SeoFaq />

          <AppPromo />
        </main>

        <Footer />
      </div>
    </div>
  )
}
