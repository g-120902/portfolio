import Button from "../atoms/Button";
import {useTranslations} from 'next-intl';
import Avatar from "../atoms/Avatar";
import { playfair } from "../../lib/fonts";

function Presentation(){
    const t = useTranslations('Presentation');

    return(
        <section className={`h-lvh bg-skin-highlight md:w-5/12 w-screen py-10`}>
            <div className="bg-skin-primary w-20 h-20 rotate-45 -translate-x-10 -translate-y-10"/>
                <div className="flex flex-col text-center items-center pt-40 md:pt-64">
                <Avatar />

                        <div className="flex flex-col gap-5 pt-4 md:pt-8 md:pb-12 pb-8">
                            <h1 className={`${playfair.className} font-bold text-white lg:text-5xl text-3xl md:text-4xl`}>Gregory Albert</h1>
                            <p className="text-black text-sm md:text-base font-extralight">{t("desc")}</p>
                        </div>
                        <Button text={t("hire")} />
            </div>
        </section>
    );
}

export default Presentation