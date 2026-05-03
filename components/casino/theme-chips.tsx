const chips = [
  { label: "Dog House", emoji: "🐶" },
  { label: "Big Bass", emoji: "🐟" },
  { label: "Мегавейс", emoji: "💎" },
  { label: "Фрукты", emoji: "🍒" },
  { label: "Египет", emoji: "🐫" },
  { label: "Книжки", emoji: "📚" },
  { label: "Hold&Win", emoji: "🔒" },
  { label: "Джекпот", emoji: "💰" },
  { label: "Богиня", emoji: "👸" },
  { label: "Лайв Шоу", emoji: "🎤" },
  { label: "Рулетка", emoji: "🎡" },
  { label: "Приключения", emoji: "🗺️" },
  { label: "Пираты", emoji: "🏴‍☠️" },
  { label: "Викинги", emoji: "⚔️" },
  { label: "Средневековье", emoji: "🏰" },
  { label: "Драконы", emoji: "🐉" },
  { label: "Животные", emoji: "🦊" },
  { label: "Boltri", emoji: "⚡" },
  { label: "Лето", emoji: "☀️" },
  { label: "Джокер", emoji: "🃏" },
  { label: "Лепреконы", emoji: "🍀" },
  { label: "Азия", emoji: "🐲" },
  { label: "Ирландия", emoji: "🍻" },
  { label: "Древний мир", emoji: "🏛️" },
  { label: "Аркады", emoji: "🕹️" },
]

export function ThemeChips() {
  return (
    <section className="px-3 sm:px-4 lg:px-6 mt-8">
      <h2 className="font-display font-bold text-lg md:text-xl mb-3">Любимые тематики</h2>
      <div className="flex flex-wrap gap-2">
        {chips.map((c) => (
          <button
            key={c.label}
            className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full bg-secondary/60 hover:bg-primary/20 hover:ring-primary/40 text-sm text-foreground/80 hover:text-foreground ring-1 ring-border transition-colors"
          >
            <span className="text-sm leading-none">{c.emoji}</span>
            {c.label}
          </button>
        ))}
      </div>
    </section>
  )
}
