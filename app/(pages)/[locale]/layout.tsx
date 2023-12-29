import '../../styles/globals.css'
import { inter } from '../../lib/fonts'
import NavBar from '../../ui/organisms/NavBar';

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
      <body className={`${inter.className} antialiased`}>
        <NavBar />

        {children}
      </body>
    </html>
  );
}