import React from 'react';
import Image from 'next/image';

function Avatar() {
  return (
    <div className="relative w-40 h-40 group">
      <div className="rounded-full border-4 border-skin-base group-hover:bg-skin-primary group-hover:scale-x-[-1] transition-transform duration-500">
      <Image
          src="/images/document.jpg"
          width={160}
          height={160}
          className="scale-x-[-1] rounded-full transform origin-center-right group-hover:block hidden opacity-85"
          alt="Avatar"
        />
        <Image
          src="/images/avatar.jpg"
          width={160}
          height={160}
          className="rounded-full transform origin-center-right group-hover:hidden"
          alt="Avatar"
        />
      </div>
    </div>
  );
}

export default Avatar;
