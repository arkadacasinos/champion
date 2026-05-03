import type { Game } from "@/components/casino/game-card"

const G = (
  title: string,
  emoji: string,
  gradient: string,
  provider?: string,
  badge?: Game["badge"],
): Game => ({ title, emoji, gradient, provider, badge })

export const popularGames: Game[] = [
  G("Coin Strike 2", "⚡", "from-yellow-400 via-orange-500 to-red-600", "Hacksaw", { label: "Hot", color: "red" }),
  G("Super Chillies", "🌶️", "from-red-500 via-orange-500 to-yellow-400", "NoLimit"),
  G("Burning Coins 40", "🔥", "from-orange-500 via-red-600 to-rose-700", "Amusnet", { label: "Top", color: "gold" }),
  G("Lucky Penny 2", "🍀", "from-emerald-500 via-green-600 to-teal-700", "Pragmatic"),
  G("Tomb of Gold", "🏺", "from-amber-500 via-yellow-600 to-orange-700", "Playson", { label: "New", color: "purple" }),
  G("Crown Coins", "👑", "from-rose-500 via-pink-600 to-purple-700", "Endorphina"),
  G("Mega Joker", "🃏", "from-violet-500 via-purple-600 to-fuchsia-700", "NetEnt"),
  G("Fire Lord", "🔥", "from-red-500 via-orange-600 to-yellow-500"),
  G("Diamond Rush", "💎", "from-cyan-400 via-blue-500 to-indigo-700"),
]

export const topGames: Game[] = [
  G("Thunder Coins XXL", "⚡", "from-cyan-400 via-blue-600 to-indigo-800", "VoltEnt", { label: "Top", color: "gold" }),
  G("Fisherman's Luck", "🎣", "from-blue-500 via-cyan-600 to-teal-700", "Hacksaw"),
  G("Eros Fortune", "💘", "from-rose-500 via-pink-600 to-fuchsia-700", "VoltEnt", { label: "New", color: "pink" }),
  G("Multiply", "✖️", "from-amber-500 via-orange-600 to-red-700", "Amusnet"),
  G("Gambleman", "🎩", "from-emerald-500 via-green-700 to-teal-900", "Playson", { label: "Hot", color: "red" }),
  G("Lucky 7", "7️⃣", "from-yellow-400 via-amber-500 to-orange-600"),
  G("Big Bang Z", "💥", "from-orange-500 via-red-600 to-rose-700", "BGaming"),
  G("Olympus Gold", "⚡", "from-amber-400 via-yellow-500 to-orange-600", "Pragmatic", { label: "Top", color: "gold" }),
  G("Dragon Coin", "🐉", "from-red-600 via-rose-700 to-purple-800"),
]

export const newGames: Game[] = [
  G("Rhino Coins", "🦏", "from-blue-400 via-cyan-500 to-teal-600", "BGaming", { label: "New", color: "purple" }),
  G("Mariachi Cash", "💀", "from-orange-500 via-red-600 to-purple-700", "Peter & Sons"),
  G("Tango Chaos", "💃", "from-rose-500 via-red-600 to-orange-700", "Playson"),
  G("Aviatrix Fruits", "🍓", "from-pink-500 via-rose-600 to-purple-700", "Aviatrix", { label: "New", color: "pink" }),
  G("Hot Lion", "🦁", "from-amber-500 via-orange-600 to-red-700"),
  G("Gobstopper Grid", "🍭", "from-fuchsia-500 via-pink-600 to-rose-700", "BGaming"),
  G("Master Chef", "👨‍🍳", "from-emerald-500 via-teal-600 to-cyan-700"),
  G("Fishermen Luck", "🎣", "from-blue-500 via-indigo-600 to-purple-700", "VoltEnt"),
]

export const crashGames: Game[] = [
  G("Chicken Road 2", "🐔", "from-orange-400 via-red-500 to-rose-700", "InOut", { label: "Hot", color: "red" }),
  G("GoalX", "⚽", "from-emerald-500 via-green-600 to-teal-800", "Spribe"),
  G("Aviator", "✈️", "from-red-500 via-rose-600 to-pink-700", "Spribe", { label: "Top", color: "gold" }),
  G("Cricket Road", "🏏", "from-amber-500 via-orange-600 to-red-700"),
  G("Chicken Cross", "🐓", "from-yellow-400 via-amber-500 to-orange-600"),
  G("Lucky Jet", "🚀", "from-violet-500 via-purple-600 to-fuchsia-700"),
  G("Hyper Loader", "⚡", "from-cyan-400 via-blue-600 to-indigo-800"),
  G("Dive & Get", "🤿", "from-teal-500 via-cyan-600 to-blue-800"),
  G("Skyward", "☁️", "from-sky-400 via-blue-500 to-indigo-700"),
  G("Hook Up", "🎣", "from-rose-500 via-pink-600 to-purple-700"),
]

export const championsChoice: Game[] = [
  G("4 Pots Riches", "🍯", "from-amber-500 via-yellow-600 to-orange-700", "Playson"),
  G("Book of Faith", "📖", "from-violet-500 via-purple-700 to-indigo-900", "Spinomenal", { label: "Top", color: "gold" }),
  G("CoinUp", "🪙", "from-yellow-400 via-amber-500 to-orange-600", "VoltEnt"),
  G("Hot Slot", "🌶️", "from-red-500 via-rose-600 to-pink-700", "VoltEnt"),
  G("Nazar Wish", "🧿", "from-blue-500 via-indigo-600 to-purple-800"),
  G("Multicoin", "💰", "from-amber-400 via-yellow-500 to-orange-600"),
  G("Crown Coins Mega", "👑", "from-rose-500 via-pink-600 to-purple-700"),
  G("Dragon Luck", "🐉", "from-red-600 via-rose-700 to-fuchsia-800"),
]

export const liveGames: Game[] = [
  G("Roulette Azure", "🎡", "from-blue-500 via-indigo-600 to-purple-800", "Evolution"),
  G("Money Time", "💵", "from-emerald-500 via-green-600 to-teal-800", "Pragmatic", { label: "Live", color: "red" }),
  G("Speed Baccarat", "🃏", "from-rose-500 via-red-600 to-purple-800", "Evolution"),
  G("Speed Blackjack", "🎴", "from-violet-500 via-purple-600 to-fuchsia-800", "Evolution"),
  G("Crazy Roulette", "🎰", "from-amber-500 via-orange-600 to-red-700"),
  G("Chief Game", "🎲", "from-rose-500 via-pink-600 to-purple-700"),
  G("Speed Baccarat 2", "🂡", "from-red-500 via-rose-600 to-purple-700"),
  G("Live Show", "🎤", "from-fuchsia-500 via-purple-600 to-indigo-800"),
]

export const jackpotGames: Game[] = [
  G("Divine Fortune", "🦄", "from-amber-500 via-yellow-600 to-orange-700", "NetEnt", { label: "JP", color: "gold" }),
  G("Lucky Streak 1000", "🍀", "from-emerald-500 via-green-600 to-teal-800", "Endorphina"),
  G("Mega Moolah", "🦁", "from-amber-500 via-orange-600 to-red-700"),
  G("Burning Coins 20", "🔥", "from-orange-500 via-red-600 to-rose-800"),
  G("Diamond Action", "💎", "from-cyan-400 via-blue-600 to-indigo-800", "Pragmatic"),
  G("Fortune Chests", "📦", "from-rose-500 via-red-600 to-purple-800"),
  G("Mystic Jackpot", "🔮", "from-violet-500 via-purple-700 to-fuchsia-900"),
  G("Fortune Stars", "⭐", "from-amber-400 via-yellow-500 to-orange-600"),
]

export const dropsGames: Game[] = [
  G("Olympus 1000", "⚡", "from-amber-400 via-yellow-500 to-orange-600", "Pragmatic"),
  G("Doe or Alive", "🦌", "from-emerald-500 via-green-700 to-teal-900"),
  G("Big Burger", "🍔", "from-amber-500 via-orange-600 to-red-700"),
  G("Fire Portals", "🔥", "from-red-500 via-rose-600 to-purple-700"),
  G("Sugar Rush 1000", "🍭", "from-fuchsia-500 via-pink-600 to-rose-700", "Pragmatic", { label: "Hot", color: "pink" }),
  G("Pot of Fortune", "🍀", "from-emerald-500 via-green-600 to-teal-800"),
  G("Dive Deep", "🐟", "from-cyan-400 via-blue-600 to-indigo-800"),
  G("Big Bang", "💥", "from-orange-500 via-red-600 to-rose-800"),
]
