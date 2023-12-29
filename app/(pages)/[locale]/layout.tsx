import '../../styles/globals.css'
import { inter } from '../../lib/fonts'
import Header from '../../ui/organisms/Header';
import Footer from '../../ui/organisms/Footer';

export const metadata = {
  title: 'Portfolio',
  description: 'Gregory Albert Portfolio',
}

export default function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang = {locale}>
      <body className={`${inter.className} antialiased w-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}