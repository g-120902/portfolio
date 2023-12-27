import React from 'react';
import i18n from '../../../Translations.js';
import LangFlagBtn from './LangFlagBtn.js';

interface LanguageFlagListProps {
  onLanguageChange: (newLanguage: string) => void;
}

const availableLanguages = ['en', 'fr']; // Add more languages as needed

const LanguageFlagList: React.FC<LanguageFlagListProps> = ({ onLanguageChange }) => {
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    onLanguageChange(lang);
  };

  return (
    <>
      {availableLanguages.map((lang) => (
        <LangFlagBtn key={lang} lang={lang} onClick={() => changeLanguage(lang)} langLabel={lang.toUpperCase()}/>
      ))}
    </>
  );
}

export default LanguageFlagList;
