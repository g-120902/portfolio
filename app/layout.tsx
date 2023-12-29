import { NextIntlClientProvider, useLocale } from 'next-intl';
import { monofonto } from './lib/fonts';
import './styles/globals.css'
import { locales } from './lib/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';

export const metadata = {
  title: 'Portfolio',
  description: 'Gregory Albert Portfolio',
}

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {locale}:any = useLocale();
  unstable_setRequestLocale(locale);
  
  return (
    <NextIntlClientProvider locale={locale} messages={{}}>
      <html lang={locale}>
        <body className={`${monofonto.className} antialiased w-screen`}>
          {children}
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
