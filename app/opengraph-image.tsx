import { ImageResponse } from "next/og"

export const alt = "Champion Casino · Champion Slots — официальный сайт"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 80,
        background:
          "radial-gradient(circle at 80% 20%, #a855f7 0%, transparent 50%), radial-gradient(circle at 10% 80%, #f59e0b 0%, transparent 45%), linear-gradient(135deg, #0f0a1f 0%, #1a1430 60%, #2a1454 100%)",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "10px 22px",
          borderRadius: 999,
          background: "rgba(168, 85, 247, 0.18)",
          border: "1px solid rgba(168, 85, 247, 0.45)",
          color: "#e9d5ff",
          fontSize: 26,
          fontWeight: 700,
          marginBottom: 28,
        }}
      >
        <span style={{ fontSize: 34, color: "#ffe78a" }}>♛</span>
        Champion Slots
      </div>
      <div
        style={{
          fontSize: 92,
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: -2,
          maxWidth: 1000,
        }}
      >
        Champion Casino — чемпион казино онлайн
      </div>
      <div
        style={{
          marginTop: 28,
          fontSize: 32,
          color: "#cbd5e1",
          maxWidth: 980,
          lineHeight: 1.3,
        }}
      >
        Официальный сайт, рабочее зеркало, champion casino вход, слоты, бонусы и турниры каждый день.
      </div>
      <div
        style={{
          marginTop: 48,
          display: "flex",
          gap: 14,
          fontSize: 22,
          color: "#fef3c7",
        }}
      >
        <span style={{ padding: "10px 20px", borderRadius: 12, background: "rgba(245, 158, 11, 0.18)", border: "1px solid rgba(245, 158, 11, 0.5)" }}>
          Слоты
        </span>
        <span style={{ padding: "10px 20px", borderRadius: 12, background: "rgba(168, 85, 247, 0.18)", border: "1px solid rgba(168, 85, 247, 0.5)" }}>
          Live Казино
        </span>
        <span style={{ padding: "10px 20px", borderRadius: 12, background: "rgba(34, 211, 238, 0.18)", border: "1px solid rgba(34, 211, 238, 0.5)" }}>
          Crash Игры
        </span>
        <span style={{ padding: "10px 20px", borderRadius: 12, background: "rgba(244, 114, 182, 0.18)", border: "1px solid rgba(244, 114, 182, 0.5)" }}>
          Турниры
        </span>
      </div>
    </div>,
    { ...size },
  )
}
