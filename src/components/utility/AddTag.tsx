import React from "react";

export default function AddTag({ placeholderName }) {
  return (
    <div className='flex flex-row w-full items-center bg-white p-2 rounded-md border-[1px] border-gray-300'>
      <span className='px-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-4 h-4 text-gray-400 fill-current'
          viewBox='0 0 20 20'
          fill='currentColor'>
          <path
            fill-rule='evenodd'
            d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
            clip-rule='evenodd'></path>
        </svg>
      </span>
      <input
        className='font-medium ring-0 ring-gray-300 w-full rounded-md focus:outline-0 text-sm font-sans'
        type='text'
        placeholder={placeholderName}></input>
    </div>
  );
}
