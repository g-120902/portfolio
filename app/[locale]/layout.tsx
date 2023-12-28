import '../ui/globals.css'
import '../lib/utils'
import { inter } from '../ui/fonts/fonts'
import LocaleSwitcher from '../ui/components/LocaleSwitcher';

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
        <LocaleSwitcher />

        {children}
      </body>
    </html>
  );
}