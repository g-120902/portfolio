'use client'

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getRedirectPath } from "../../utils/getRedirect";
import { Link } from "../../lib/navigation";

function NavLink({ link, text }: { link: string, text: string }) {

    const pathName = usePathname();
    const [redirect, setRedirect] = useState(getRedirectPath(pathName));

    useEffect(() => {
      setRedirect(getRedirectPath(pathName));
    }, [pathName]);

    return (
        <Link href={link} className={redirect.substring(1) != link ? "hover:text-skin-hover hover:underline self-center" : "hover:text-skin-hover underline self-center "}>
            {text}
        </Link>
    )
}

export default NavLink;