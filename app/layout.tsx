import { monofonto } from './lib/fonts';
import './styles/globals.css'
import { getLocale} from 'next-intl/server';
import { NextIntlClientProviders } from './lib/providers'
export const metadata = {
  title: 'Portfolio',
  description: 'Gregory Albert Portfolio',
}


export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  
  return (
      <html lang={locale}>
        <body className={`${monofonto.className} antialiased w-screen`}>
          {children}
        </body>
      </html>
  );
}
