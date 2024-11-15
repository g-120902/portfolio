import { useTranslations } from "next-intl";

function ContactTitle() {
    const t = useTranslations("Contact");

    return (
        <div className="">
            <h2 className="text-3xl font-bold tracking-tight text-skin-primary sm:text-4xl">{t("title")} </h2>
            <p className="mt-2 text-lg leading-8 text-skin-primary">{t("subtitle")}</p>
        </div>
    );
}

export default ContactTitle;