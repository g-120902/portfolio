import LanguageSwitcher from "../molecules/LanguageSwitcher";
import { playfair } from "../../lib/fonts";
import Link from "next/link";
import {useTranslations} from 'next-intl';

function NavBar(){
    const t = useTranslations('NavBar');
    
    return(
        <>
            <div className="">
                <div 
                className={`${playfair.className} w-screen h-16 bg-transparent flex justify-between text-skin-primary sm:px-12 md:px-52`}>
                    <Link href="/" className="self-center hover:text-skin-hover ">
                        <p className="font-bold text-xl md:text-2xl">Portfolio</p>
                    </Link>
                    <div className="flex gap-1 text-base md:text-lg md:gap-4 self-center">
                        <Link href="about" className="hover:text-skin-hover hover:underline">
                            {t("about")}
                        </Link>
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

export default NavBar;