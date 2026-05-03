import { HelpCircle } from "lucide-react"

const faqs: { q: string; a: string }[] = [
  {
    // ~58 chars / ~155 chars
    q: "Что такое Champion Casino и Champion Slots?",
    a: "Champion Casino (Champion Slots) — премиум онлайн казино с лицензией: слоты, live-дилеры, краш-игры, турниры и бонусы для игроков из РФ и СНГ.",
  },
  {
    // ~46 / ~150
    q: "Как зайти в champion casino онлайн?",
    a: "Champion casino вход доступен с любого устройства. Откройте чемпион казино официальный сайт, нажмите «Вход» и используйте логин и пароль.",
  },
  {
    // ~46 / ~155
    q: "Есть ли champion casino зеркало?",
    a: "Да, чемпион казино зеркало работает 24/7. Рабочее champion casino зеркало даёт доступ к Champion Slots без блокировок и с полным функционалом.",
  },
  {
    // ~52 / ~155
    q: "Где играть в чемпион слотс казино?",
    a: "Чемпион слотс казино доступно прямо в браузере и в приложении. Champion slots casino — это слоты, рулетка, blackjack и эксклюзивные игры от топ-студий.",
  },
  {
    // ~50 / ~150
    q: "Как champion casino играть без риска?",
    a: "В Champion казино можно играть в демо-режиме без депозита. Чемпион казино онлайн поддерживает игру на фантики во всех слотах из главного каталога.",
  },
  {
    // ~58 / ~155
    q: "Чемпион казино официальный сайт — это надёжно?",
    a: "Да. Чемпион казино официальный сайт работает по лицензии Curaçao, использует SSL-шифрование и честный RNG. Champion Slots — проверенный бренд с 2018 года.",
  },
]

export function SeoFaq() {
  return (
    <section className="px-3 sm:px-4 lg:px-6 mt-10">
      <div className="rounded-2xl ring-1 ring-border bg-secondary/20 p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="size-5 text-accent shrink-0" aria-hidden />
          <h2 className="font-display font-bold text-lg sm:text-xl text-balance">
            Champion Casino — частые вопросы
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {faqs.map((f) => (
            <article
              key={f.q}
              className="rounded-xl bg-card/60 ring-1 ring-border p-4 hover:ring-primary/30 transition-colors"
            >
              <h3 className="font-display font-semibold text-base text-foreground text-balance">
                {f.q}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">
                {f.a}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
