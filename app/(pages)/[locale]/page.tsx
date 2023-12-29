import {useTranslations} from 'next-intl';
import Banner from '../../ui/organisms/Banner';

export default function Index() {
  const t = useTranslations('Index');

  return (
    <>
      <Banner />
    
    </>
  );
}