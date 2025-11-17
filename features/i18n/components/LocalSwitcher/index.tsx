import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "@/features/i18n/components/LocalSwitcherSelect";

export default function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <div className="flex items-center mr-2">
      <LocaleSwitcherSelect defaultValue={locale} label="Select a locale" />
    </div>
  );
}
