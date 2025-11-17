import { LocalSwitcher } from "@/features/i18n/components";
import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations("HomePage");
  const t2 = useTranslations("Sidebar");

  return (
    <div>
      <LocalSwitcher />
      <h1>{t("about")}</h1>
      <h1>{t2("support")}</h1>
    </div>
  );
};

export default Home;
