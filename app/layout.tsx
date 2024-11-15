import { monofonto } from './lib/fonts';
import './styles/globals.css'
import { locales } from './i18n/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gregory Albert Portfolio',
  description: 'Gregory Albert Portfolio',
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export default function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`${monofonto.className} antialiased w-screen overflow-x-hidden bg-skin-primary`}>
        {children}
      </body>
    </html>
  );
}
