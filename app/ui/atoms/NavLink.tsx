'use client'

import { useEffect, useState } from "react";
import { Link, usePathname } from "../../i18n/navigation";

function NavLink({ link, text }: { link: string, text: string }) {

    const pathName = usePathname();
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