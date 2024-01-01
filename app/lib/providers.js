'use client'

import { ThemeProvider } from 'next-themes';
import { NextIntlClientProvider } from 'next-intl';
import { getLocalePath } from '../utils/getRedirect';
import { usePathname } from 'next/navigation';

export function ThemeProviders ({children}) {
    return <ThemeProvider> {children} </ThemeProvider>
}

export function NextIntlClientProviders ({children, locale}) {
 
    return <NextIntlClientProvider locale={locale}> {children} </NextIntlClientProvider>
}
