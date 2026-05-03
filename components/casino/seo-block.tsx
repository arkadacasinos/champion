import type { LucideIcon } from "lucide-react"

interface SeoBlockProps {
  icon?: LucideIcon
  title: string
  text: string
  variant?: "default" | "accent"
}

export function SeoBlock({ icon: Icon, title, text, variant = "default" }: SeoBlockProps) {
  const isAccent = variant === "accent"

  return (
    <section className="px-3 sm:px-4 lg:px-6 mt-8">
      <div
        className={`relative overflow-hidden rounded-2xl ring-1 p-4 sm:p-6 ${
          isAccent
            ? "bg-gradient-to-br from-primary/15 via-primary/5 to-accent/10 ring-primary/30"
            : "bg-secondary/30 ring-border"
        }`}
      >
        {isAccent && (
          <div
            aria-hidden
            className="absolute -right-20 -top-20 size-60 rounded-full bg-primary/20 blur-3xl pointer-events-none"
          />
        )}
        <div className="relative">
          <h2 className="flex items-center gap-2 font-display font-bold text-lg sm:text-xl text-foreground text-balance">
            {Icon && (
              <Icon
                className={`size-5 shrink-0 ${isAccent ? "text-accent" : "text-primary"}`}
                aria-hidden
              />
            )}
            <span className="min-w-0">{title}</span>
          </h2>
          <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-muted-foreground text-pretty max-w-3xl">
            {text}
          </p>
        </div>
      </div>
    </section>
  )
}
