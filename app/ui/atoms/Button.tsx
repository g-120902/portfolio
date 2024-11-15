import React from 'react';

function Button({ text }: { text: string }) {
  return (
    <button
      className="hover:bg-skin-inverted mx-auto w-fit hover:text-skin-hover text-center rounded-md px-4 py-2 border border-1 border-skin-inverted transition-all duration-300 ease-in-out bg-skin-primary text-skin-primary">
      {text}
    </button>
  );
}

export default Button;
