import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"
export const dynamic = "force-static"

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 60%, #c084fc 100%)",
        color: "#ffe78a",
        fontSize: 110,
        fontWeight: 900,
        letterSpacing: -4,
      }}
    >
      ♛
    </div>,
    { ...size },
  )
}
