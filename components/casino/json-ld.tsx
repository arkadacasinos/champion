import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site"

/**
 * Structured data for Google: Organization + WebSite (with SearchAction) + FAQPage.
 * Uses SITE_URL so a single env var update propagates everywhere.
 */
export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: ["Champion Slots", "Чемпион Казино", "Чемпион Слотс"],
    url: SITE_URL,
    logo: `${SITE_URL}/icon`,
    description: SITE_DESCRIPTION,
    sameAs: [`${SITE_URL}`],
  }

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: "Champion Slots",
    url: SITE_URL,
    inLanguage: "ru-RU",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Что такое Champion Casino?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Champion Casino — это онлайн казино с слотами, live-играми, краш-играми, турнирами и бонусами. Чемпион казино доступен с любого устройства.",
        },
      },
      {
        "@type": "Question",
        name: "Как сделать Champion Casino вход?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нажмите кнопку Вход в шапке сайта. Champion casino вход доступен по логину и паролю или через рабочее зеркало без блокировок.",
        },
      },
      {
        "@type": "Question",
        name: "Где найти Champion Casino зеркало?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Чемпион казино зеркало всегда обновляется на главной странице. Champion casino зеркало откроет Champion Slots с полным функционалом.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли Champion Casino играть онлайн?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, чемпион казино онлайн работает 24/7. Champion casino играть можно в браузере и в приложении на ПК, iOS и Android.",
        },
      },
      {
        "@type": "Question",
        name: "Чемпион слотс казино — это официальный сайт?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, чемпион слотс казино — это официальный сайт Champion Slots Casino с лицензией Curaçao eGaming.",
        },
      },
      {
        "@type": "Question",
        name: "Какие игры есть в Champion Slots?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Champion Slots предлагает 5000+ слотов, live казино, краш-игры, рулетку, blackjack, baccarat и эксклюзивные турниры.",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  )
}
