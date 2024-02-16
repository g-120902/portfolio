import Button from "../atoms/Button";
import { useTranslations } from 'next-intl';
import Avatar from "../atoms/Avatar";
import { playfair } from "../../lib/fonts";
import { Link } from "../../i18n/navigation";

function Presentation() {
    const t = useTranslations('Presentation');

    return (
        <section className="h-lvh bg-skin-highlight md:w-5/12 w-screen flex flex-col justify-center items-center text-center">
            <Avatar />

            <div className="flex flex-col gap-5 md:pb-12 pb-8">
                <h1 className={`${playfair.className} font-bold text-white lg:text-5xl text-3xl md:text-4xl`}>Gregory Albert</h1>
                <p className="text-black text-sm md:text-base font-extralight">{t("desc")}</p>
            </div>
            <Link href="contact">
                <Button text={t("hire")} />
            </ Link>
        </section>
    );
}

export default Presentation