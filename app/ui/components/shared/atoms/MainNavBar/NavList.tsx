import React, { ReactNode } from 'react';

interface NavListProps {
  children: ReactNode;
}

function NavList({ children }: NavListProps) {
  return (
    <ul className="list-none m-0 p-0 flex items-center gap-4">
      {children}
    </ul>
  );
}

export default NavList;
