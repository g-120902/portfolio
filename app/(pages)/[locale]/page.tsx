import {useTranslations} from 'next-intl';

export default function Index() {
  const t = useTranslations('Index');

  return (
    <>
      <p>{t("title")}</p>
    
    </>
  );
}