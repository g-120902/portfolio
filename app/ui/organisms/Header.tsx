import LanguageSwitcher from "../molecules/LanguageSwitcher";
import { playfair } from "../../lib/fonts";
import Link from "next/link";
import {useTranslations} from 'next-intl';
import NavLink from "../atoms/NavLink";

function Header(){
    const t = useTranslations('NavBar');
    
    return(
        <>
            <div className="select-none px-4 sm:px-8 lg:px-52 w-screen">
                <div 
                className={`${playfair.className} h-16 bg-transparent flex justify-between text-skin-primary`}>
                    <Link href="/" className="self-center hover:text-skin-hover ">
                        <p className="font-bold text-xl md:text-2xl">Gregory Albert</p>
                    </Link>
                    <div className="flex md:text-base sm:gap-8 md:gap-12">
                        <NavLink link="contact" text={t("contact")}/>
                    <LanguageSwitcher />
                    </div>

                </div>
            </div>
                
        </>
    );
}

export default Header;