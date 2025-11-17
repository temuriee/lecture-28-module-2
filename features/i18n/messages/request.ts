// “Hey next-intl, every time someone opens my site, ask me what language to use.”
import { getRequestConfig } from "next-intl/server";

// “Does this language exist in our list of supported languages?”
import { hasLocale } from "next-intl";

// “What languages do we support, again?”
import { routing } from "./routing";

// requestLocale = Promise<string | undefined> that resolves to the locale from the URL path segment (e.g., "en", "ka", "ru")
export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment

  // We wait for Next.js to give us the requested language.
  // If user opens /fr/home, then requested = "fr"
  // If user opens /ka/home, then requested = "ka"
  const requested = await requestLocale;

  // “Is the requested language one we support?”
  const locale = hasLocale(routing.locales, requested)
    ? // “If so, use the requested language.”
      requested
    : // “If not, fall back to our default language.”
      routing.defaultLocale;

  // “Load the translation messages for the chosen language.”
  //   If locale = "en" → load /messages/en.json
  //   If locale = "ka" → load /messages/ka.json
  return {
    // The language we will use for this request
    locale,
    // The translation messages for that language
    messages: (await import(`@/features/i18n/messages/${locale}.json`)).default,
  };
});
