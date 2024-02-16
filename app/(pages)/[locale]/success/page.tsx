import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";

export default function SuccessPage() {
  const t = useTranslations("Success");

  return (
    <>
    <section className="h-svh flex flex-col justify-center">
    <div className="flex bg-skin-highlight h-fit flex-col justify-center items-center p-12 gap-10 select-none">
        
        <h3 className="text-skin-primary text-2xl sm:text-4xl">{t("title")}</h3>
        <p className="text-skin-primary text-base sm:text-xl">{t("subtitle")}</p>
        <div className="py-10 text-center">
          <Link href="/">
            <div className="px-12 rounded-sm bg-white hover:bg-black text-skin-hover font-semibold py-3">
                {t("back")}
            </div>
          </Link>

    </div>
  </div>
    </section>
     
    </>
  )
}
