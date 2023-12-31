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
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  unstable_setRequestLocale(locale);
  
  return (
      <html lang={locale}>
        <body className={`${monofonto.className} antialiased w-screen overflow-x-hidden bg-skin-primary flex flex-col gap-10`}>
          {children}
        </body>
      </html>
  );
}
