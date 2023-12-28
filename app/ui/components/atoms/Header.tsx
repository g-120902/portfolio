import React from 'react';
import {useTranslations} from 'next-intl';

interface HeaderProps {
  text: string;
}

function Header({text}: HeaderProps) {

  const t = useTranslations('Index');
  return(
    <>
      <h1 className='text-2xl font-bold text-skin-base'>{t(text)}</h1>
    </>
  )
};

export default Header;
