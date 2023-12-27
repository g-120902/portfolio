import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface NavItemProps {
  to: string;
  translationKey: string;
}

function NavItem({ to, translationKey }: NavItemProps) {
  const { t } = useTranslation();

  return (
    <li className="m-0">
      <Link
        to={to}
        className="text-skin-inverted no-underline font-light hover:underline hover:text-skin-hover"
      >
        {t(translationKey)}
      </Link>
    </li>
  );
}

export default NavItem;
