import React from "react";

export default function TopBar() {
  return (
    <div className='w-full h-14 flex flex-row border-b-[1px] border-gray-300'>
      <div
        // className='ml-14 fixed top-0 w-full flex items-center justify-between border-b-[1px] border-gray-400 h-14'
        className='relative h-full w-[50%]'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='absolute top-[50%] translate-y-[-60%] left-4 w-5 h-5'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
          <input
            className='font-sans transition-all duration-300 w-[50%] p-1 m-2 border-indigo-600 border-[1px] outline-indigo-600 outline-[1px] rounded-md placeholder:p-10 focus:w-[70%]'
            type='text'
            placeholder='Search'
          />
        </div>
      </div>
      <div className='flex flex-row w-[50%] h-14 justify-end items-center'>
        <div className='flex flex-row items-center bg-transparent rounded-md border-indigo-600 border-[2px] h-0 w-max p-4'>
          <span>
            <svg
              viewBox='0 0 34 46'
              class='w-4 h-4 flex-shrink-0 mr-2  text-indigo-600 '
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M5 44L5 35C5 28.3726 10.3726 23 17 23V23C23.6274 23 29 28.3726 29 35L29 44'
                stroke='currentColor'
                stroke-width='3'></path>
              <path
                d='M5 1L5 10C5 16.6274 10.3726 22 17 22V22C23.6274 22 29 16.6274 29 10L29 1'
                stroke='currentColor'
                stroke-width='3'></path>
              <path
                d='M11 35L11 39L23 39L23 35C23 31.6863 20.3137 29 17 29C13.6863 29 11 31.6863 11 35Z'
                fill='currentColor'
                stroke='currentColor'
                stroke-width='2'></path>
              <path
                d='M2 2H32'
                stroke='currentColor'
                stroke-width='3'
                stroke-linecap='round'></path>
              <path
                d='M2 44H32'
                stroke='currentColor'
                stroke-width='3'
                stroke-linecap='round'></path>
            </svg>
          </span>
          <p className='font-sans text-sm text-indigo-600 w-max mx-2'>
            Trial - 13 days left
          </p>
        </div>
        <span className='ml-2 mr-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='w-5 h-5 fill-gray-900'
            viewBox='0 0 20 20'
            fill='currentColor'>
            <path
              fill-rule='evenodd'
              d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
              clip-rule='evenodd'></path>
          </svg>
        </span>
        <span className='mx-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='w-5 h-5 fill-gray-900'
            viewBox='0 0 20 20'
            fill='currentColor'>
            <path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z'></path>
          </svg>
        </span>
        <span className='ml-1 mr-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='#dedede'
            viewBox='0 0 24 24'
            strokeWidth={1.2}
            stroke='currentColor'
            className='w-8 h-8'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
