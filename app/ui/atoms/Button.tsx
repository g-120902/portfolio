import React from 'react';

function Button({ text }: { text: string }) {
  return (
    <button
      className="bg-skin-inverted mx-auto w-fit text-white text-center rounded-md px-4 py-2 border border-1 border-skin-inverted transition-all duration-300 ease-in-out hover:bg-white hover:text-skin-hover">
      {text}
    </button>
  );
}

export default Button;
