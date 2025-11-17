// ✔ Imports a helper from next-intl that lets us define how languages work in our app, including which languages we support and what the default language is.
import { defineRouting } from "next-intl/routing";

// ✔ Creates a routing configuration for our app.
import { createNavigation } from "next-intl/navigation";

// Defines how routing and locales work in our app.
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "ka", "ru"],

  // Used when no locale matches
  defaultLocale: "en",
  // pathnames: {
  //   "/about": {
  //     en: "/about",
  //     ka: "/ჩვენს შესახებ",
  //     ru: "/о-нас",
  //   },
  // },
});

// Lightweight wrappers around Next.js' navigation
// APIs that consider the routing configuration

//This generates a TypeScript type like: "type Locale = 'en' | 'ka' | 'ru'"
export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

//   | Function        | What it normally does   | What next-intl version does                      |
// | --------------- | ----------------------- | ------------------------------------------------ |
// | **Link**        | Navigates between pages | Navigates **with locale included** automatically |
// | **redirect**    | Redirects               | Redirects **to localized path**                  |
// | **usePathname** | Gets current URL        | Returns current localized URL                    |
// | **useRouter**   | Full router             | Router that ALWAYS respects locale               |
// | **getPathname** | Creates URL string      | Creates URLs that include the right locale       |

// <Link href="/about">About</Link>
// next init Link
// <Link href="/about">About</Link>
// /ka/about
