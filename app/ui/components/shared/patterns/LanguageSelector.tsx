import React, { useState } from 'react';
import i18n from '../../Translations.js';
import LangFlagBtn from '../atoms/LanguageSelector/LangFlagBtn.js';
import LanguageFlagList from '../atoms/LanguageSelector/LanguageFlagList.js';

function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const currentLanguage = i18n.language;

  const handleLangBtnClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = () => {
    setIsOpen(false);
  };

  return (
    <div className={`py-3 h-auto ${isOpen ? 'bg-skin-menu' : 'bg-skin-base'}`}>
      <LangFlagBtn lang={currentLanguage} onClick={handleLangBtnClick} />

      <div className={`absolute ${isOpen ? 'block' : 'hidden'} bg-skin-menu shadow-md z-10 py-3 pr-4 w-max`}>
        <LanguageFlagList onLanguageChange={handleLanguageChange} />
      </div>
    </div>
  );
}

export default LanguageSelector;
