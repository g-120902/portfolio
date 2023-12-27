import React from 'react';
import { Link } from 'react-router-dom';

function NavLogo() {
  return (
    <>
      <Link to="/" className="text-skin-inverted no-underline font-bold text-xl hover:underline">
        <img src="/assets/logos/NavLogo.png" alt="Logo" className="w-8 h-auto" />
      </Link>
    </>
  );
}

export default NavLogo;
