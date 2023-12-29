import {useTranslations} from 'next-intl';
 
export default function NotFoundPage() {
  const t = useTranslations('NotFound');
  return <h1>Not Found</h1>;
}