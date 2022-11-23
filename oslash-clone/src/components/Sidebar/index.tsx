import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isClicked, setIsClicked] = useState<Boolean>(false);
  const [isHovered, setIsHovered] = useState<Boolean>(false);

  const linkRef = useRef(null);
  const collectionRef = useRef(null);

  return (
    <>
      {isClicked || isHovered ? (
        <div
          onMouseLeave={() => setIsHovered(false)}
          className='flex font-sans flex-col justify-between items-center fixed left-12 top-0 w-[15%] h-screen bg-white border-r-[1px] transition-all duration-100 z-50'>
          <ul className='list-none w-full'>
            <li className='flex justify-between p-4 h-14 w-full border-b-[1px] border-gray-400'>
              <p className='text-md font-medium'>OSlash</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 fill-gray-900 transform -scale-x-100'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path
                  fill-rule='evenodd'
                  d='M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z'
                  clip-rule='evenodd'></path>
              </svg>
            </li>
            <Link to='/'>
              <li
                className='flex text-right p-3'
                // ref={linkRef}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5 text-gray-900 fill-current'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path
                    fill-rule='evenodd'
                    d='M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z'
                    clip-rule='evenodd'></path>
                </svg>
                <p className='p-0 ml-4 w-fit font-medium text-md'>Shortcuts</p>
              </li>
            </Link>
            <Link to='/collection'>
              <li className='flex p-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5 fill-gray-900'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path d='M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'></path>
                </svg>
                <p className='p-0 ml-4 w-fit text-md font-medium'>Collection</p>
              </li>
            </Link>
          </ul>
          <div className='font-sans flex flex-col w-full h-max p-2'>
            <div className='p-4 flex flex-col justify-start w-full h-max bg-[#f3f4f6] my-2'>
              <p className='pb-2 text-sm font-bold text-gray-500'>
                Add to chrome
              </p>
              <p className='text-sm font-normal'>
                Create, reference, and gain instant access to your team's
                shortcuts on Oslash
              </p>
              <div className='my-2 flex flex-row bg-[#111827] w-max p-2 rounded-md'>
                <span className='px-2'>
                  <svg
                    className='m-0.5'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z'
                      fill='white'></path>
                    <path
                      d='M8.04747 5.06214H14.296C14.7134 5.95448 14.9463 6.95008 14.9463 8.00036C14.9463 11.8367 11.8364 14.9467 8 14.9467C7.8464 14.9467 7.69384 14.9416 7.54278 14.9318L6.88556 10.9987'
                      fill='#FCBD00'></path>
                    <path
                      d='M10.1098 9.17521C10.2037 9.06252 10.4377 9.64777 10.5127 9.52383C10.5232 9.50643 10.5337 9.48871 10.5442 9.47093L7.54259 14.9318C3.91928 14.6964 1.05353 11.6832 1.05353 8.00043C1.05353 6.51646 1.51872 5.14121 2.31178 4.01264L5.42462 9.4163'
                      fill='#16A663'></path>
                    <path
                      d='M14.2959 5.0617L8.46637 6.61448L8.11731 4.22332L14.2959 5.0617Z'
                      fill='#FD9F37'></path>
                    <path
                      d='M14.296 5.06165H8.04489C7.99817 5.06093 7.95105 5.06127 7.90395 5.06271L5.24505 9.02262C5.29539 9.15883 5.35555 9.29002 5.42473 9.41574L5.22295 9.0654L2.31189 4.01205C3.56836 2.22268 5.64755 1.05356 7.99995 1.05356C10.786 1.05356 13.1891 2.69402 14.296 5.06165Z'
                      fill='#ED402D'></path>
                    <path
                      d='M8.00008 10.7539C9.52087 10.7539 10.7537 9.52107 10.7537 8.00028C10.7537 6.4795 9.52087 5.24666 8.00008 5.24666C6.4793 5.24666 5.24646 6.4795 5.24646 8.00028C5.24646 9.52107 6.4793 10.7539 8.00008 10.7539Z'
                      fill='#4192CF'></path>
                    <path
                      d='M7.54291 14.9314L8.47982 10.3703L10.513 9.52341L7.54291 14.9314Z'
                      fill='#12945A'></path>
                    <path
                      d='M5.79864 7.08533L5.24505 9.02252L5.22295 9.06527L2.31189 4.01195L5.79864 7.08533Z'
                      fill='#E1382A'></path>
                    <path
                      d='M8.00001 10.9565C6.36989 10.9565 5.0437 9.63036 5.0437 8.00024C5.0437 6.37011 6.36992 5.04389 8.00001 5.04389C9.6301 5.04389 10.9564 6.37011 10.9564 8.00024C10.9564 9.63036 9.6301 10.9565 8.00001 10.9565ZM8.00001 5.67283C6.71667 5.67283 5.67264 6.71689 5.67264 8.00024C5.67264 9.28358 6.7167 10.3276 8.00001 10.3276C9.28332 10.3276 10.3274 9.28355 10.3274 8.00024C10.3274 6.71689 9.28335 5.67283 8.00001 5.67283Z'
                      fill='white'></path>
                  </svg>
                </span>
                <p className='px-2 text-white text-sm font-medium'>
                  Install extension
                </p>
              </div>
            </div>
            <div className='bg-[#eef2ff] flex flex-col w-full h-max justify-center items-center font-sans p-2'>
              <div className='flex flex-row w-full h-max'>
                <img
                  className='w-10 h-10'
                  src='https://i.oslash.com/images/cat_with_gift_2x.png'
                  alt='gift'
                />
                <div className='flex flex-col w-full h-max justify-center px-2'>
                  <p className='text-indigo-500 text-sm font-bold'>
                    Get $10 in free credits
                  </p>
                  <p className='py-1 text-xs font-normal'>
                    Invite members to get $10 in credits for every sign up
                  </p>
                </div>
              </div>
              <div className='w-[100%] rounded-sm h-max bg-indigo-500 flex flex-row p-2'>
                <span>
                  <svg
                    className='w-5 h-5 text-white fill-current'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M7.22222 7.33333C7.22222 7.95217 6.97639 8.54566 6.53881 8.98325C6.10122 9.42083 5.50773 9.66667 4.88889 9.66667C4.27005 9.66667 3.67656 9.42083 3.23897 8.98325C2.80139 8.54566 2.55556 7.95217 2.55556 7.33333C2.55556 6.71449 2.80139 6.121 3.23897 5.68342C3.67656 5.24583 4.27005 5 4.88889 5C5.50773 5 6.10122 5.24583 6.53881 5.68342C6.97639 6.121 7.22222 6.71449 7.22222 7.33333ZM13.4444 7.33333C13.4444 7.63975 13.3841 7.94317 13.2668 8.22626C13.1496 8.50935 12.9777 8.76658 12.761 8.98325C12.5444 9.19992 12.2871 9.37179 12.004 9.48905C11.7209 9.60631 11.4175 9.66667 11.1111 9.66667C10.8047 9.66667 10.5013 9.60631 10.2182 9.48905C9.93509 9.37179 9.67787 9.19992 9.46119 8.98325C9.24452 8.76658 9.07265 8.50935 8.95539 8.22626C8.83813 7.94317 8.77778 7.63975 8.77778 7.33333C8.77778 6.71449 9.02361 6.121 9.46119 5.68342C9.89878 5.24583 10.4923 5 11.1111 5C11.7299 5 12.3234 5.24583 12.761 5.68342C13.1986 6.121 13.4444 6.71449 13.4444 7.33333ZM10.2789 15.8889C10.3147 15.6346 10.3333 15.3756 10.3333 15.1111C10.3351 13.8891 9.92402 12.7023 9.16667 11.7433C9.75784 11.402 10.4285 11.2223 11.1111 11.2223C11.7937 11.2223 12.4643 11.402 13.0555 11.7433C13.6467 12.0846 14.1376 12.5755 14.479 13.1667C14.8203 13.7579 15 14.4285 15 15.1111V15.8889H10.2789ZM4.88889 11.2222C5.92029 11.2222 6.90944 11.6319 7.63875 12.3613C8.36806 13.0906 8.77778 14.0797 8.77778 15.1111V15.8889H1V15.1111C1 14.0797 1.40972 13.0906 2.13903 12.3613C2.86834 11.6319 3.85749 11.2222 4.88889 11.2222Z'
                      fill='currentColor'></path>
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M16 1C16.1591 1 16.3117 1.06321 16.4243 1.17574C16.5368 1.28826 16.6 1.44087 16.6 1.6V3.4H18.4C18.5591 3.4 18.7117 3.46321 18.8243 3.57574C18.9368 3.68826 19 3.84087 19 4C19 4.15913 18.9368 4.31174 18.8243 4.42426C18.7117 4.53679 18.5591 4.6 18.4 4.6H16.6V6.4C16.6 6.55913 16.5368 6.71174 16.4243 6.82426C16.3117 6.93679 16.1591 7 16 7C15.8409 7 15.6883 6.93679 15.5757 6.82426C15.4632 6.71174 15.4 6.55913 15.4 6.4V4.6H13.6C13.4409 4.6 13.2883 4.53679 13.1757 4.42426C13.0632 4.31174 13 4.15913 13 4C13 3.84087 13.0632 3.68826 13.1757 3.57574C13.2883 3.46321 13.4409 3.4 13.6 3.4H15.4V1.6C15.4 1.44087 15.4632 1.28826 15.5757 1.17574C15.6883 1.06321 15.8409 1 16 1Z'
                      fill='currentColor'></path>
                  </svg>
                </span>
                <span className='px-2 font-sans text-white text-sm font-medium'>
                  Invite members
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='border-r-[1px] border-gray-300 w-max h-screen flex flex-col justify-between items-center'>
          <ul className='list-none'>
            <li
              onClick={() => setIsClicked(true)}
              className='p-0 px-3 py-4 border-b-[1px] border-gray-300'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='w-5 h-5 fill-gray-900 transform -scale-x-100'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path
                  fill-rule='evenodd'
                  d='M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z'
                  clip-rule='evenodd'></path>
              </svg>
            </li>
            <div className='h-full' onMouseEnter={() => setIsHovered(true)}>
              <li className='p-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='w-5 h-5 text-gray-900 fill-current'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path
                    fill-rule='evenodd'
                    d='M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z'
                    clip-rule='evenodd'></path>
                </svg>
              </li>
              <li className='p-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='w-5 h-5 fill-gray-900'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path d='M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'></path>
                </svg>
              </li>
            </div>
          </ul>
          <div className='flex flex-col'>
            <span className='bg-black rounded-md flex justify-center p-2 my-2'>
              <svg
                className='p-1'
                width='24'
                height='24'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z'
                  fill='white'></path>
                <path
                  d='M8.04747 5.06214H14.296C14.7134 5.95448 14.9463 6.95008 14.9463 8.00036C14.9463 11.8367 11.8364 14.9467 8 14.9467C7.8464 14.9467 7.69384 14.9416 7.54278 14.9318L6.88556 10.9987'
                  fill='#FCBD00'></path>
                <path
                  d='M10.1098 9.17521C10.2037 9.06252 10.4377 9.64777 10.5127 9.52383C10.5232 9.50643 10.5337 9.48871 10.5442 9.47093L7.54259 14.9318C3.91928 14.6964 1.05353 11.6832 1.05353 8.00043C1.05353 6.51646 1.51872 5.14121 2.31178 4.01264L5.42462 9.4163'
                  fill='#16A663'></path>
                <path
                  d='M14.2959 5.0617L8.46637 6.61448L8.11731 4.22332L14.2959 5.0617Z'
                  fill='#FD9F37'></path>
                <path
                  d='M14.296 5.06165H8.04489C7.99817 5.06093 7.95105 5.06127 7.90395 5.06271L5.24505 9.02262C5.29539 9.15883 5.35555 9.29002 5.42473 9.41574L5.22295 9.0654L2.31189 4.01205C3.56836 2.22268 5.64755 1.05356 7.99995 1.05356C10.786 1.05356 13.1891 2.69402 14.296 5.06165Z'
                  fill='#ED402D'></path>
                <path
                  d='M8.00008 10.7539C9.52087 10.7539 10.7537 9.52107 10.7537 8.00028C10.7537 6.4795 9.52087 5.24666 8.00008 5.24666C6.4793 5.24666 5.24646 6.4795 5.24646 8.00028C5.24646 9.52107 6.4793 10.7539 8.00008 10.7539Z'
                  fill='#4192CF'></path>
                <path
                  d='M7.54291 14.9314L8.47982 10.3703L10.513 9.52341L7.54291 14.9314Z'
                  fill='#12945A'></path>
                <path
                  d='M5.79864 7.08533L5.24505 9.02252L5.22295 9.06527L2.31189 4.01195L5.79864 7.08533Z'
                  fill='#E1382A'></path>
                <path
                  d='M8.00001 10.9565C6.36989 10.9565 5.0437 9.63036 5.0437 8.00024C5.0437 6.37011 6.36992 5.04389 8.00001 5.04389C9.6301 5.04389 10.9564 6.37011 10.9564 8.00024C10.9564 9.63036 9.6301 10.9565 8.00001 10.9565ZM8.00001 5.67283C6.71667 5.67283 5.67264 6.71689 5.67264 8.00024C5.67264 9.28358 6.7167 10.3276 8.00001 10.3276C9.28332 10.3276 10.3274 9.28355 10.3274 8.00024C10.3274 6.71689 9.28335 5.67283 8.00001 5.67283Z'
                  fill='white'></path>
              </svg>
            </span>
            <div className='flex flex-col items-center h-max bg-[#eef2ff]'>
              <img
                className='w-10 h-10'
                src='https://i.oslash.com/images/cat_with_gift_2x.png'
                alt='gift'
              />
              <span className='my-2 bg-indigo-600 rounded-md'>
                <svg
                  className='w-8 h-8 text-white p-2 fill-current'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M7.22222 7.33333C7.22222 7.95217 6.97639 8.54566 6.53881 8.98325C6.10122 9.42083 5.50773 9.66667 4.88889 9.66667C4.27005 9.66667 3.67656 9.42083 3.23897 8.98325C2.80139 8.54566 2.55556 7.95217 2.55556 7.33333C2.55556 6.71449 2.80139 6.121 3.23897 5.68342C3.67656 5.24583 4.27005 5 4.88889 5C5.50773 5 6.10122 5.24583 6.53881 5.68342C6.97639 6.121 7.22222 6.71449 7.22222 7.33333ZM13.4444 7.33333C13.4444 7.63975 13.3841 7.94317 13.2668 8.22626C13.1496 8.50935 12.9777 8.76658 12.761 8.98325C12.5444 9.19992 12.2871 9.37179 12.004 9.48905C11.7209 9.60631 11.4175 9.66667 11.1111 9.66667C10.8047 9.66667 10.5013 9.60631 10.2182 9.48905C9.93509 9.37179 9.67787 9.19992 9.46119 8.98325C9.24452 8.76658 9.07265 8.50935 8.95539 8.22626C8.83813 7.94317 8.77778 7.63975 8.77778 7.33333C8.77778 6.71449 9.02361 6.121 9.46119 5.68342C9.89878 5.24583 10.4923 5 11.1111 5C11.7299 5 12.3234 5.24583 12.761 5.68342C13.1986 6.121 13.4444 6.71449 13.4444 7.33333ZM10.2789 15.8889C10.3147 15.6346 10.3333 15.3756 10.3333 15.1111C10.3351 13.8891 9.92402 12.7023 9.16667 11.7433C9.75784 11.402 10.4285 11.2223 11.1111 11.2223C11.7937 11.2223 12.4643 11.402 13.0555 11.7433C13.6467 12.0846 14.1376 12.5755 14.479 13.1667C14.8203 13.7579 15 14.4285 15 15.1111V15.8889H10.2789ZM4.88889 11.2222C5.92029 11.2222 6.90944 11.6319 7.63875 12.3613C8.36806 13.0906 8.77778 14.0797 8.77778 15.1111V15.8889H1V15.1111C1 14.0797 1.40972 13.0906 2.13903 12.3613C2.86834 11.6319 3.85749 11.2222 4.88889 11.2222Z'
                    fill='currentColor'></path>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M16 1C16.1591 1 16.3117 1.06321 16.4243 1.17574C16.5368 1.28826 16.6 1.44087 16.6 1.6V3.4H18.4C18.5591 3.4 18.7117 3.46321 18.8243 3.57574C18.9368 3.68826 19 3.84087 19 4C19 4.15913 18.9368 4.31174 18.8243 4.42426C18.7117 4.53679 18.5591 4.6 18.4 4.6H16.6V6.4C16.6 6.55913 16.5368 6.71174 16.4243 6.82426C16.3117 6.93679 16.1591 7 16 7C15.8409 7 15.6883 6.93679 15.5757 6.82426C15.4632 6.71174 15.4 6.55913 15.4 6.4V4.6H13.6C13.4409 4.6 13.2883 4.53679 13.1757 4.42426C13.0632 4.31174 13 4.15913 13 4C13 3.84087 13.0632 3.68826 13.1757 3.57574C13.2883 3.46321 13.4409 3.4 13.6 3.4H15.4V1.6C15.4 1.44087 15.4632 1.28826 15.5757 1.17574C15.6883 1.06321 15.8409 1 16 1Z'
                    fill='currentColor'></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
