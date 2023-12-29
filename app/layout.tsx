import { IntlProvider } from 'next/intl';
import { monofonto } from './lib/fonts';
import Header from './ui/organisms/Header';
import Footer from './ui/organisms/Footer';

export default function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <IntlProvider locale={locale} messages={{}}>
      <html lang={locale}>
        <body className={`${monofonto.className} antialiased w-screen`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </IntlProvider>
  );
}
