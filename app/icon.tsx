import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"
export const dynamic = "force-static"

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #6d28d9 0%, #a855f7 100%)",
        borderRadius: 8,
        color: "#fff5d6",
        fontSize: 22,
        fontWeight: 900,
        lineHeight: 1,
      }}
    >
      {/* Crown glyph */}
      ♛
    </div>,
    { ...size },
  )
}
