import {NextIntlClientProvider} from 'next-intl';
import { monofonto } from './lib/fonts';
import './styles/globals.css'

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
