import LanguageSwitcher from "../molecules/LanguageSwitcher";
import { playfair } from "../../lib/fonts";
import Link from "next/link";
import {useTranslations} from 'next-intl';

function Header(){
    const t = useTranslations('NavBar');
    
    return(
        <>
            <div className="select-none px-8 sm:px-12 lg:px-52">
                <div 
                className={`${playfair.className} w-screen h-16 bg-transparent flex justify-between text-skin-primary`}>
                    <Link href="/" className="self-center hover:text-skin-hover ">
                        <p className="font-bold text-xl md:text-2xl">Portfolio</p>
                    </Link>
                    <div className="flex gap-1 text-sm md:text-base md:gap-4 self-center">
                        <Link href="about" className="hover:text-skin-hover hover:underline">
                            {t("about")}
                        </Link>
                        |
                        <Link href="contact" className="hover:text-skin-hover hover:underline">
                            {t("contact")}
                        </Link>
                    </div>
                
                    <LanguageSwitcher />
                </div>
            </div>
                
        </>
    );
}

export default Header;