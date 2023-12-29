import { NextIntlClientProvider } from 'next-intl';
import { monofonto } from './lib/fonts';
import './styles/globals.css'
import { locales } from './lib/navigation';

export const metadata = {
  title: 'Portfolio',
  description: 'Gregory Albert Portfolio',
}

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}
export default function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
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
