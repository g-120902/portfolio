import '../ui/globals.css'
import '../lib/utils'
import { inter } from '../ui/fonts/fonts'

export const metadata = {
  title: 'Portfolio',
  description: 'Gregory Albert Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang = "en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
