import React from "react";

export default function RightBar() {
  return (
    <div className='font-sans w-[15%] h-screen p-4 fixed right-0 justify-start items-start border-gray-300 border-l-[1px] bg-[#f9fafb] flex flex-col'>
      <h1 className='text-gray-500 text-sm font-medium'>QUICK START GUIDE</h1>
      <div className='p-4 justify-self-center h-max w-full flex rounded-md drop-shadow-md mt-4 bg-[#fff]'>
        <ul>
          <li className='mb-2'>
            <span className='relative text-md mr-2 p-3 border-gray-500 border-[1px] rounded-full inline-block'>
              <span className='absolute top-[-40%] translate-y-[50%] translate-x-[-50%] text-gray-600 text-sm font-normal'>
                1
              </span>
            </span>
            <span className='relative w-fit text-md'>
              <span className='absolute w-max top-[-40%] text-gray-600 text-sm font-normal'>
                Creating shortcuts
              </span>
            </span>
          </li>
          <li className='mb-2'>
            <span className='relative text-md mr-2 p-3 border-gray-500 border-[1px] rounded-full inline-block'>
              <span className='absolute top-[-40%] translate-y-[50%] translate-x-[-50%] text-gray-600 text-sm font-normal'>
                2
              </span>
            </span>
            <span className='relative w-fit text-md'>
              <span className='absolute w-max top-[-40%] text-gray-600 text-sm font-normal'>
                Creating snippets
              </span>
            </span>
          </li>
          <li className='mb-2'>
            <span className='relative text-md mr-2 p-3 border-gray-500 border-[1px] rounded-full inline-block'>
              <span className='absolute top-[-40%] translate-y-[50%] translate-x-[-50%] text-gray-600 text-sm font-normal'>
                3
              </span>
            </span>
            <span className='relative w-fit text-md'>
              <span className='absolute w-max top-[-40%] text-gray-600 text-sm font-normal'>
                Finding shortcuts
              </span>
            </span>
          </li>
          <li className='mb-2'>
            <span className='relative text-md mr-2 p-3 border-gray-500 border-[1px] rounded-full inline-block'>
              <span className='absolute top-[-40%] translate-y-[50%] translate-x-[-50%] text-gray-600 text-sm font-normal'>
                4
              </span>
            </span>
            <span className='relative w-fit text-md'>
              <span className='absolute w-max top-[-40%] text-gray-600 text-sm font-normal'>
                Inviting members
              </span>
            </span>
          </li>
        </ul>
      </div>
      <p className='mt-4 break-words text-sm'>
        For more tips & tricks, check{" "}
        <a href='https://www.oslash.com/get-started'>outo/get-started</a>
      </p>
      <div className='text-indigo-800 my-4 w-full p-3 bg-indigo-50 border-[1px] ring-1 ring-indigo-500 rounded-md h-max flex items-center flex-row'>
        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-8 h-8 flex-shrink-0 fill-indigo-600 mr-3'
            viewBox='0 0 20 20'
            fill='currentColor'>
            <path
              fill-rule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
              clip-rule='evenodd'></path>
          </svg>
        </span>
        <div className='flex flex-col h-full w-max'>
          <p className='text-gray-900 text-sm font-medium'>Total time saved</p>
          <p className='text-gray-900 text-sm font-bold'>3m</p>
        </div>
      </div>
      <div className='flex flex-col rounded-md bg-indigo-50 ring-indigo-500 ring-1 w-full h-max'>
        <div className='p-4 flex flex-row w-full items-center'>
          <span>
            <svg
              className='w-8 h-8 flex-shrink-0 fill-indigo-600 mr-3'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path d='M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z'></path>
            </svg>
          </span>
          {/* <div className='flex flex-col'> */}
          <p className='text-gray-900 text-sm font-medium'>
            Refer Oslash, get{" "}
            <span className='text-gray-900 text-sm font-bold'>$10</span> credit
            each
          </p>
          {/* </div> */}
        </div>
        <div className='flex flex-col justify-center items-center p-3'>
          <div className='flex flex-row justify-center w-full h-max rounded-md text-white bg-indigo-700 p-2'>
            <p className='text-sm mx-2 font-semibold'>Copy link</p>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-4 h-4 fill-white ml-2'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path d='M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z'></path>
                <path d='M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z'></path>{" "}
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
