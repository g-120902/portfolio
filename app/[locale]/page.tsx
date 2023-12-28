import Link from 'next/link';
import Header from '../ui/components/shared/atoms/Header';

export default function Index() {

  return (
    <>
      <Header text='title'></Header>
      <Link href="/" locale="fr" >English</Link>
    </>
  );
}