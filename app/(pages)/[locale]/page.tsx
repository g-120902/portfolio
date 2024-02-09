import Separator from '../../ui/atoms/Separator';
import Banner from '../../ui/organisms/Banner';
import HomeBody from '../../ui/organisms/HomeBody';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gregory Albert Portfolio Home Page',
  description: 'This is Gregory Albert portfolio. The home page of my portfolio used for referencing',
}

export default function Index() {

  return (
    <>

      <Banner />
      <Separator />
      <HomeBody />
    </>
  );
}