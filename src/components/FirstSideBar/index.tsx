import React from "react";

export default function FirstSideBar() {
  return (
    <div className='font-sans flex flex-col w-max h-screen bg-gradient-to-b from-indigo-200 via-red-200 to-yellow-100'>
      <div className='bg-gray-500 w-12 h-max flex justify-center'>
        <div className='bg-black w-max h-fit m-2 px-3 py-1 rounded-md'>
          <span className='text-white text-xs text-center'>T</span>
        </div>
      </div>
      <div className='bg-transparent w-12 h-max flex justify-center'>
        <div className='bg-transparent w-max h-fit m-2 px-2 py-1 border-black border-dashed border-[1px] rounded-md'>
          <span className='text-black font-bold text-md text-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='w-5 h-5 fill-gray-900'
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path
                fill-rule='evenodd'
                d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                clip-rule='evenodd'></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
