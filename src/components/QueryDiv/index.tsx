import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import oslashImg from "../../assets/images/oslash.png";

const MY_TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUHJhandhbCBSYW1lc2giLCJlbWFpbCI6InJhbWVzaHByYWp3YWwyMUBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUxtNXd1MXV6UVFhWHBZejJkVTFscUFsYnVCWWk5TWltR0N6Q3NZcFB3Um49czk2LWMiLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExNjQxMjkxODQ0Njg2OTI4Nzk5NSIsImlzcyI6Imh0dHBzOi8vYXV0aC5vc2xhc2gud29yayIsImF1ZCI6Imh0dHBzOi8vYXV0aC5vc2xhc2gud29yayIsImh0dHBzOi8vYXV0aC5vc2xhc2gud29yay9lbWFpbCI6InJhbWVzaHByYWp3YWwyMUBnbWFpbC5jb20iLCJpYXQiOjE2Njg0Mjk5OTIsImV4cCI6MTY3MTAyMTk5Mn0.UhrZkFLptMaJQHDv_KvkfWclriJFcmV1z5NwY29sAP0`;

export default function QueryDiv(props: any) {
  useEffect(() => {
    console.log(props.isCollection);
  }, []);

  const [isHovered, setIsHovered] = useState<Boolean>(false);

  return (
    <>
      {props.isCollection ? (
        <Link to='/sub-collection' state={{ uid: props.uid }}>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='font-sans flex w-[90%] my-3 bg-[#fff] h-[85px] flex-row justify-between rounded-md drop-shadow-md hover:bg-gray-100'>
            <div className='flex flex-row h-full'>
              <div className='flex flex-col items-start py-4 mx-6'>
                <img className='w-10 h-10' src={oslashImg} alt='image'></img>
              </div>
              <div className='flex flex-col h-full py-2'>
                <p className='text-md font-medium'>{props.shortlink}</p>
                <p className='text-sm'>{props.desc}</p>
                <div className='flex flex-row'></div>
              </div>
            </div>
            {isHovered ? (
              <div className='py-2 flex w-max h-full justify-start'>
                <span className='mx-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 fill-gray-900'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path d='M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z'></path>
                    <path d='M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z'></path>{" "}
                  </svg>
                </span>
                <span className='mx-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 fill-gray-900'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z'></path>
                    <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z'></path>
                  </svg>
                </span>
                <span className='mx-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 fill-gray-900'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
                  </svg>
                </span>
                <span className='mx-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 text-gray-900 transition-all  opacity-100'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'></path>
                  </svg>
                </span>
              </div>
            ) : null}
          </div>
        </Link>
      ) : (
        <Link
          to='/desc'
          state={{
            shortlink: props.shortlink,
            url: props.url,
            desc: props.desc,
          }}>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='font-sans flex w-[90%] my-5 bg-[#fff] h-[85px] flex-row justify-between rounded-md drop-shadow-md hover:bg-gray-100'>
            <div className='flex flex-row h-full'>
              <div className='flex flex-col items-start py-4 mx-6'>
                <img
                  className='w-10 h-10'
                  src={oslashImg}
                  alt={props.url}></img>
              </div>
              <div className='flex flex-col h-full py-2'>
                <p className='text-sm font-medium'>{props.shortlink}</p>
                <p className='text-gray-500 text-sm font-normal'>
                  {props.desc}
                </p>
                <div className='flex flex-row'></div>
              </div>
            </div>
            {isHovered ? (
              <div className='py-2 flex w-max h-full justify-start'>
                <span className='mx-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='w-5 h-5 fill-gray-900'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path d='M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z'></path>
                    <path d='M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z'></path>{" "}
                  </svg>
                </span>
                <span className='mx-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='w-5 h-5 fill-gray-900'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z'></path>
                    <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z'></path>
                  </svg>
                </span>
                <span className='mx-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='w-5 h-5 fill-gray-900'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
                  </svg>
                </span>
                <span className='mx-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='w-5 h-5 text-gray-900 transition-all  opacity-100'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'></path>
                  </svg>
                </span>
              </div>
            ) : null}
          </div>
        </Link>
      )}
    </>
  );
}
