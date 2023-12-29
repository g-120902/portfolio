import Image from "next/image"
import { monofonto } from "../../lib/fonts";
import Button from "../atoms/Button";
import {useTranslations} from 'next-intl';
import Avatar from "../atoms/Avatar";

function Presentation(){
    const t = useTranslations('Presentation');

    return(
        <section className={`${monofonto.className} pt-40 md:pt-64 h-lvh`}>
                <div className="flex justify-center">
                    <div className="flex flex-col text-center items-center">
                        <Avatar />
                        <div className="flex flex-col gap-5 pt-4 md:pt-8 md:pb-12 pb-8">
                            <h1 className="font-bold text-skin-primary lg:text-6xl text-3xl md:text-4xl">Gregory Albert</h1>
                            <p className="text-skin-primary text-sm font-extralight">{t("desc")}</p>
                        </div>
                        <Button text={t("hire")} />
                    </div>
            </div>
        </section>
    );
}

export default Presentation