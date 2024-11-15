import LanguageSwitcher from "../molecules/LanguageSwitcher";
import { playfair } from "../../lib/fonts";
import { useTranslations } from 'next-intl';
import NavLink from "../atoms/NavLink";
import { Link } from "../../i18n/navigation";

function Header() {
    const t = useTranslations('NavBar');

    return (
        <>
            <div className="select-none px-4 sm:px-8 lg:px-24 w-screen absolute bg-skin-primary z-20">
                <div
                    className={`${playfair.className} h-16 flex justify-between text-skin-primary`}>
                    <Link href="/" className="self-center hover:text-skin-hover ">
                        <p className="font-bold text-xl md:text-2xl">Gregory Albert</p>
                    </Link>
                    <div className="flex md:text-base gap-4 sm:gap-12 md:gap-20">
                        <NavLink link="contact" text={t("contact")} />
                        <LanguageSwitcher />
                    </div>

                </div>
            </div>

        </>
    );
}

export default Header;