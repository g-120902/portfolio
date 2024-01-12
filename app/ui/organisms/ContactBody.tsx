import ContactForm from "../molecules/ContactForm";
import ThemeSwitcher from "../molecules/ThemeSwitcher";
import ContactTitle from "../molecules/ContactTitle";
import { useTranslations } from "next-intl";

function ContactBody() {
    const t = useTranslations("Contact");

    const labelData = {
        firstName: t("first-name"),
        lastName: t("last-name"),
        company: t("company"),
        email: t("email"),
        message: t("message"),
        submit: t("title")
    } as const;

    return (
        <>
            <div className="bg-skin-primary px-12 py-24 sm:py-32 lg:px-24 gap-5 h-svh">
                <ThemeSwitcher />
                <ContactTitle />
                <ContactForm labelData={labelData}/>
            </div>
        </>
    );
}

export default ContactBody;