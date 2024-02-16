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
            <section className="bg-skin-primary flex justify-evenly">
                <div className="flex flex-col gap-20  my-40 sm:px-24 px-10">
                    <ThemeSwitcher />
                    <ContactTitle />
                    <ContactForm labelData={labelData} />
                </div>
            </section>
        </>
    );
}

export default ContactBody;