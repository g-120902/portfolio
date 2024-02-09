'use client'

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getLocalePath, getRedirectPath } from "../../utils/getRedirect";
import { Link } from "../../lib/navigation";
import { Locale } from "../../types/enum";

function NavLink({ link, text }: { link: string, text: string }) {

    const pathName = usePathname();
    const locale: Locale = getLocalePath(pathName) as Locale;
    const [redirect, setRedirect] = useState(getRedirectPath(pathName));

    useEffect(() => {
      setRedirect(getRedirectPath(pathName));
    }, [pathName]);

    return (
        <Link href={link} locale={locale} className={redirect.substring(1) != link ? "hover:text-skin-hover hover:underline self-center" : "hover:text-skin-hover underline self-center "}>
            {text}
        </Link>
    )
}

export default NavLink;