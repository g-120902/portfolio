'use client'

import React, { useEffect, useState } from 'react';
import { Link, locales, localeNames } from "../../lib/navigation";
import { Locale } from "../../types/enum";
import { usePathname } from 'next/navigation';

function LanguageBox({ lang, onClick }: { lang: Locale | undefined; onClick?: () => void }) {
    return (
        <div
            className='p-2 text-skin-primary h-10 rounded-lg text-center select-none hover:text-skin-hover hover:underline '
            onClick={onClick}>
            {lang !== undefined ? localeNames[lang] : 'N/A'}
        </div>
    );
}

function LanguageSwitcher() {
    const pathName = usePathname();
    const [selected, setSelected] = useState(false);
    const [redirect, setRedirect] = useState(pathName.substring(3));
    const locale: Locale = pathName.substring(1, 3) as Locale;

    useEffect(() => {
        setRedirect(pathName.substring(3));

        if (!redirect) {
            setRedirect("/");
        }

    }, [pathName]);

    const open = () => {
        setSelected(!selected);
    };

    return (
        <div className='bg-transparent w-fit flex flex-col z-10 my-auto'>
            <div className={selected ? 'hidden' : 'self-center'}>
                <LanguageBox lang={locale} onClick={open} />
            </div>
            <div className={selected ? 'flex flex-col ' : 'hidden'}>

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

