'use client'

import React, { useState } from 'react';
import { Link, locales } from "../../lib/navigation";
import { Locale } from "../../lib/types";
import { usePathname } from 'next/navigation';

function LanguageBox({ lang, onClick }: { lang: Locale | undefined; onClick?: () => void }) {
    return (
      <div className='p-2 text-white bg-black w-10 h-10 rounded-lg text-center select-none' onClick={onClick}>
        {lang}
      </div>
    );
}

function LanguageSwitcher() {
    const pathName = usePathname();
    const [selected, setSelected] = useState(false);
    const locale: Locale = pathName.substring(1, 3) as Locale;

    const handleTopDivClick = () => {
        setSelected(!selected);
    };

    return (
        <div className='w-fit flex flex-col space-y-2'>
            <div>
                <LanguageBox lang={locale} onClick={handleTopDivClick} />
            </div>
            <div className={selected ? 'flex flex-col space-y-2' : 'hidden'}>

                {locales.map((locale) => (
                <Link href="/" locale={locale}>
                    <LanguageBox lang={locale} onClick={() => {}} />
                </Link>

            ))}
            </div>
        </div>
    );
}

export default LanguageSwitcher;

