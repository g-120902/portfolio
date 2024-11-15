import { useTranslations } from "next-intl";
import ThemeSwitcher from "./ThemeSwitcher";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/16/solid";

function About() {
    const t = useTranslations('About');

    return (
        <>

            <div className="flex flex-col w-11/12 md:w-7/12 px-4 md:px-20 gap-24 h-fit py-20">
                <ThemeSwitcher />
                <span className="flex flex-col items-start gap-5 group">
                    <ChatBubbleLeftEllipsisIcon className="h-5 md:h-7 text-skin-primary group-hover:animate-spin" />

                    <h1
                        className="text-skin-primary font-medium text-lg md:text-xl lg:text-3xl text-justify">
                        {t('welcome')}

                    </h1>
                </span>
                <div className="flex flex-col gap-12">
                    <h1
                        className={`md:hover:scale-x-75 transition-transform duration-300 text-skin-primary font-semibold text-2xl md:text-3xl lg:text-6xl`}>
                        {t('title')}
                    </h1>
                    <p
                        className="text-skin-primary text-justify font-light text-sm md:text-base lg:text-xl">
                        {t('content')}
                    </p>

                </div>

            </div >

        </>
    );
}

export default About;