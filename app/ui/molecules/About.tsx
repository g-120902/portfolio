import { useTranslations } from "next-intl";
import ThemeSwitcher from "./ThemeSwitcher";

function About() {
    const t = useTranslations('About');

    return (
        <>

            <div className="flex flex-col w-11/12 md:w-7/12 px-4 md:px-20 gap-16 h-5/6 py-40">
                <ThemeSwitcher />

                <h1 className="text-skin-primary font-semibold text-2xl md:text-3xl lg:text-6xl">{t('title')}</h1>
                <p className="text-skin-primary text-justify font-light text-sm md:text-base lg:text-xl">{t('content')}</p>

            </div>

        </>
    );
}

export default About;