import { Send, MessageCircle, Globe, Crown, ShieldCheck } from "lucide-react"

const links = [
  ["Контакты", "FAQ", "Политика платежей", "Правила клуба и Ответственная игра"],
  ["Политика конфиденциальности", "Политика возврата", "Служба поддержки", "Процедура KYC"],
  ["Все о бонусах", "Как пополнить?", "Правила приёма ставок", "Как использовать бонусы в спорте"],
  ["Верификация", "Задания", "Политика по предотвращению отмывания денег", ""],
]

const payments = [
  "ЮMoney",
  "ВТБ",
  "ЯRP",
  "Альфа-Bank",
  "QIWI",
  "СБП",
  "Сбер Pay",
  "USDT",
  "BTC",
  "TRON",
]

const partners = [
  "Playson",
  "Endorphina",
  "PG Soft",
  "Amusnet",
  "VoltEnt",
  "Kendoo",
  "BGT Digital",
  "imaginelive",
  "YGR",
  "Live88",
  "1Bet",
  "Web3",
  "Formula Spin",
  "3 Oaks",
  "Play'n GO",
  "Amatic",
  "Yggdrasil",
  "Hacksaw",
  "Evolution",
  "Quickspin",
  "BGaming",
  "Playtech",
  "NetEnt",
  "Belatra",
  "Thunderkick",
  "ELK",
  "Novomatic",
  "Betsoft",
  "Relax",
  "Spinomenal",
  "Zillion",
  "Onlyplay",
  "Microgaming",
  "Booming",
  "NetGame",
  "Gamzix",
  "Apollo",
  "Fugaso",
  "Aviatrix",
  "Avatux",
  "Platipus",
  "Peter & Sons",
  "Tazi",
  "Gamomat",
  "Champion Originals",
  "Tom Horn",
  "Red Tiger",
  "ELA",
  "Octoplay",
  "Popiplay",
  "Game Beat",
  "Habanero",
  "InOut",
  "ZeusPlay",
  "EvoPlay",
  "Mancala",
  "7Mojos",
  "1Soft",
  "Magnet",
  "Aviatrix",
  "Klamer",
  "Slotopia",
  "Mr. Slotty",
  "Triple Cherry",
  "StakeLogic",
  "Apollo Games",
  "Retro",
  "Edict",
  "Playbro",
  "Felix",
  "CT Interactive",
  "Turbo",
  "Skywind",
  "Gaming1",
  "Spinmatic",
  "Ezugi",
  "GamesOS",
  "Spinthon",
  "Splashtech",
  "Spribe",
  "Leap",
  "GreenTube",
  "Vivo",
  "Push Gaming",
  "GoldenRace",
  "Cazinart",
]

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border/60 bg-sidebar">
      <div className="px-3 sm:px-4 lg:px-6 py-10">
        {/* Top columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {links.map((col, i) => (
            <ul key={i} className="space-y-2">
              {col.map(
                (l) =>
                  l && (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors text-pretty"
                      >
                        {l}
                      </a>
                    </li>
                  ),
              )}
            </ul>
          ))}
        </div>

        {/* Socials */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Следите за нами в соц. сетях:
          </span>
          <div className="flex gap-2">
            {[Send, MessageCircle, Globe].map((Icon, i) => (
              <button
                key={i}
                className="size-9 rounded-full bg-secondary hover:bg-primary/30 ring-1 ring-border flex items-center justify-center transition-colors"
                aria-label="Социальная сеть"
              >
                <Icon className="size-4 text-foreground/80" />
              </button>
            ))}
          </div>
        </div>

        {/* Payments */}
        <div className="mt-10">
          <h3 className="text-center text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
            Принимаем к оплате
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {payments.map((p) => (
              <div
                key={p}
                className="h-9 sm:h-10 px-3 sm:px-4 rounded-lg bg-secondary/40 ring-1 ring-border flex items-center justify-center text-[11px] sm:text-xs font-semibold text-foreground/80"
              >
                {p}
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="mt-10">
          <h3 className="text-center text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
            Наши партнёры
          </h3>
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {partners.map((p, i) => (
              <div
                key={`${p}-${i}`}
                className="h-11 sm:h-12 rounded-lg bg-secondary/30 ring-1 ring-border flex items-center justify-center text-[10px] sm:text-[11px] font-semibold text-foreground/70 truncate px-2 text-center min-w-0"
              >
                <span className="truncate">{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2 min-w-0">
            <Crown className="size-4 text-primary shrink-0" />
            <span className="truncate">© 2026 Champion Slots. Все права защищены.</span>
          </div>
          <div className="flex items-start gap-2 min-w-0">
            <ShieldCheck className="size-4 text-accent shrink-0 mt-0.5" />
            <span className="text-pretty">18+ Играй ответственно. Лицензия Curaçao eGaming #8048/JAZ</span>
          </div>
          <div className="flex items-center gap-2 min-w-0">
            <span className="px-2 py-1 rounded bg-secondary ring-1 ring-border shrink-0">RU</span>
            <span className="truncate">support@championslots.com</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
