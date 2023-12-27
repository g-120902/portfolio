import Header from '../ui/components/shared/atoms/Header';
import Link from 'next/link';

export default function Index() {

  return (
    <>
      <Link href="en" >English</Link>
      <Header text='title'/>
    </>
  );
}