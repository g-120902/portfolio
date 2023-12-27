import React from 'react';
import { Outlet } from 'react-router-dom';
import NavItem from '../atoms/MainNavBar/NavItem';
import NavLogo from '../atoms/MainNavBar/NavLogo';
import LanguageSelector from './LanguageSelector';
import NavList from '../atoms/MainNavBar/NavList';

function MainHeader() {
  return (
    <>
      <nav className="flex justify-between items-center h-16 xs:px-16 sm:px-24 md:px-32 xl:px-48 2xl:px-64 3xl:px-128 bg-skin-base">
        <NavLogo />
        <NavList>
          <NavItem to="/blogs" translationKey="navbar.blogs"></NavItem>
          <NavItem to="/contact" translationKey="navbar.contact"></NavItem>
          <LanguageSelector />
        </NavList>
      </nav>
      <Outlet />
    </>
  );
}

export default MainHeader;
