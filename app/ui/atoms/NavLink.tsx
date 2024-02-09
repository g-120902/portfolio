'use client'

import { useEffect, useState } from "react";
import { Link, usePathname } from "../../lib/navigation";
import { Locale } from "../../types/enum";
import { useLocale } from 'next-intl';

function NavLink({ link, text }: { link: string, text: string }) {

    const pathName = usePathname();
    const locale: Locale = useLocale() as Locale;
    const [redirect, setRedirect] = useState(pathName);

    useEffect(() => {
        setRedirect(pathName);
    }, [pathName]);

    return (
        <Link href={link} className={redirect.substring(1) != link ? "hover:text-skin-hover hover:underline self-center" : "hover:text-skin-hover underline self-center "}>
            {text}
        </Link>
    )
}

export default NavLink;