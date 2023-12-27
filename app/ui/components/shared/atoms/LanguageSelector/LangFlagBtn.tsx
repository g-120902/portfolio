import React from 'react';

interface LanguageFlagBtnProps {
  lang: string;
  langLabel?: string;
  onClick: () => void;
}

function LangFlagBtn({ lang, onClick, langLabel }: LanguageFlagBtnProps) {
  return (
    <button className="flex items-center no-underline cursor-pointer text-sm hover:underline" onClick={onClick}>
      <img className="w-10 h-auto" src={`/assets/language-flags/${lang}.png`} alt="Lang" />
      {langLabel && <span className="ml-1">{langLabel}</span>}
    </button>
  );
}

export default LangFlagBtn;
