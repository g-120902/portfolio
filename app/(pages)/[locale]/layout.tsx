import '../../styles/globals.css'
import Header from '../../ui/organisms/Header';
import Footer from '../../ui/organisms/Footer';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gregory Albert Portfolio',
  description: 'Gregory Albert Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>

  );
}