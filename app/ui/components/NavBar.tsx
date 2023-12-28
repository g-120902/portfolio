import LanguageSwitcher from "./LanguageSwitcher";
import { lusitana } from "../fonts/fonts";
import Link from "next/link";
import {useTranslations} from 'next-intl';

function NavBar(){
    const t = useTranslations('NavBar');
    
    return(
        <>
            <div className="border-b-4 border-skin-inverted">
                <div 
                className={`${lusitana.className} w-screen h-16 bg-skin-primary flex justify-evenly text-skin-primary`}>
                    <div className="flex gap-4 self-center">
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