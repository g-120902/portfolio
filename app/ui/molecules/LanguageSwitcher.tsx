'use client'

import React, { useEffect, useState } from 'react';
import { Link, locales, localeNames } from "../../lib/navigation";
import { Locale } from "../../types/enum";
import { usePathname } from 'next/navigation';
import { getLocalePath, getRedirectPath } from '../../utils/getRedirect';

function LanguageBox({ lang, onClick }: { lang: Locale | undefined; onClick?: () => void }) {
    return (
        <div
            className='p-2 text-white h-10 text-center select-none hover:underline bg-skin-highlight rounded-xl px-2'
            onClick={onClick}>
            {lang !== undefined ? localeNames[lang] : 'N/A'}
        </div>
    );
}

function LanguageSwitcher() {
    const pathName = usePathname();
    const [selected, setSelected] = useState(false);
    const locale: Locale = getLocalePath(pathName) as Locale;
    const [redirect, setRedirect] = useState(getRedirectPath(pathName));

    useEffect(() => {
      setRedirect(getRedirectPath(pathName));
    }, [pathName]);
    
    const open = () => {
        setSelected(!selected);
    };

    return (
        <div className='bg-transparent w-fit flex flex-col z-10 my-auto'>
            <div className={selected ? 'hidden' : 'self-center'}>
                <LanguageBox lang={locale} onClick={open} />
            </div>
            <div className={selected ? 'py-5 rounded-md bg-skin-primary flex flex-col gap-5' : 'hidden'}>

                {locales.map((locale) => (
                    <Link key={locale} href={redirect} locale={locale}>
                        <LanguageBox lang={locale} onClick={open} />
                    </Link>

                ))}
            </div>
        </div>
    );
}

export default LanguageSwitcher;

