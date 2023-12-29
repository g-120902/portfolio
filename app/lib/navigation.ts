import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { Locale } from '../types/enum';

export const defaultLocale: Locale = 'en';

export const locales = ['en', 'fr'] as const;

export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Francais',
};

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
});
