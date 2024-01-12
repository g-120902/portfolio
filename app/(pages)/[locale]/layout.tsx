import '../../styles/globals.css'
import Header from '../../ui/organisms/Header';
import Footer from '../../ui/organisms/Footer';


export default function RootLayout({
  children,
  locale
}: {
  children: React.ReactNode;
  locale: string
}) {
  return (
    <>

      <Header />
      {children}
      <Footer />
    </>

  );
}