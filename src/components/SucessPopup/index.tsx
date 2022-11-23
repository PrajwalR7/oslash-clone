import React from "react";
import { Link } from "react-router-dom";

export default function SuccessPopup({ data, isPvt }: any) {
  return (
    <>
      <div className='fixed bottom-0 border-t-[1px] border-gray-200 p-2 w-full flex justify-end'>
        <Link to='/'>
          <button className='text-sm font-sans font-medium bg-black text-white px-5 py-2 rounded-md'>
            Done
          </button>
        </Link>
      </div>
      <div className='w-[35%] bg-white flex flex-col'>
        <div className='px-4 py-2 flex flex-row w-full justify-between items-center border-b-[1px] border-gray-200'>
          <div className='flex flex-row w-max h-max items-center'>
            <span className='bg-gray-800 w-10 h-10 rounded-full text-white flex justify-center items-center'>
              <span className=''>T</span>
            </span>
            <span className='px-2 text-gray-900 font-medium text-sm font-sans'>
              Test Org
            </span>
          </div>
          <span className='px-2'>
            <svg
              className='w-5 h-5 text-gray-900 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z'></path>
            </svg>
          </span>
        </div>
        <div className='flex my-4 flex-col w-full h-max justify-center items-center'>
          <p className='w-max my-6 text-md font-thin text-gray-400 font-sans'>
            <s>{data.url}</s>
          </p>
          <span className='animate-bounce'>
            <svg
              className='w-5 h-5 fill-gray-500 transform rotate-90 -scale-100'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path
                fill-rule='evenodd'
                d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z'
                clip-rule='evenodd'></path>
            </svg>
          </span>
          <div className='my-6 flex flex-row justify-between items-center p-4 rounded-md w-[70%] bg-gray-50'>
            <div className='w-max flex flex-row items-center'>
              <img
                className='w-8 h-8 rounded-md'
                src='/src/assets/images/oslash.png'
                alt='oslash'
              />
              <p className='mx-2 text-sm font-medium font-sans text-gray-700'>
                o/{data.shortcut}
              </p>
            </div>
            <span>
              {isPvt ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5 fill-gray-900'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path
                    fill-rule='evenodd'
                    d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                    clip-rule='evenodd'></path>
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5 text-gray-900 fill-current'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path
                    fill-rule='evenodd'
                    d='M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z'
                    clip-rule='evenodd'></path>
                </svg>
              )}
            </span>
          </div>
          <div className='flex flex-row my-6 items-center'>
            <span className='mx-2'>
              <svg
                className='w-5 h-5 text-gray-500 flex-shrink-0'
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
            <p className='text-sm font-medium font-sans text-gray-700'>
              Share it with others
            </p>
          </div>
          <div className='flex flex-row justify-center items-center'>
            <div className='mx-2 flex flex-col h-max items-center justify-center px-10 py-2 border-[1px] border-gray-200'>
              <span>
                <svg
                  className='w-8 h-8'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M4.11426 10.3251C4.11426 9.41682 4.82786 8.68567 5.71426 8.68567C6.60066 8.68567 7.31426 9.41682 7.31426 10.3251V14.3605C7.31426 15.2688 6.60066 16 5.71426 16C4.82786 16 4.11426 15.2688 4.11426 14.3605V10.3251Z'
                    fill='#E01E5A'></path>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M10.3249 11.8857C9.41669 11.8857 8.68555 11.1721 8.68555 10.2857C8.68555 9.39927 9.41669 8.68567 10.3249 8.68567H14.3604C15.2687 8.68567 15.9998 9.39927 15.9998 10.2857C15.9998 11.1721 15.2687 11.8857 14.3604 11.8857H10.3249Z'
                    fill='#ECB22D'></path>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M8.68555 1.63938C8.68555 0.731147 9.39915 0 10.2856 0C11.172 0 11.8856 0.731147 11.8856 1.63938V5.6749C11.8856 6.58314 11.172 7.31429 10.2856 7.31429C9.39915 7.31429 8.68555 6.58314 8.68555 5.67487V1.63938Z'
                    fill='#2FB67C'></path>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M1.63938 7.31426C0.731147 7.31426 0 6.60066 0 5.71426C0 4.82786 0.731147 4.11426 1.63938 4.11426H5.6749C6.58314 4.11426 7.31429 4.82786 7.31429 5.71426C7.31429 6.60066 6.58314 7.31426 5.67487 7.31426H1.63938Z'
                    fill='#36C5F1'></path>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M8.68555 14.3999C8.68555 15.2863 9.39915 15.9999 10.2856 15.9999C11.172 15.9999 11.8856 15.2863 11.8856 14.3999C11.8856 13.5135 11.172 12.7999 10.2856 12.7999H8.68555V14.3999Z'
                    fill='#ECB22D'></path>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M14.3998 7.31426H12.7998V5.71426C12.7998 4.82786 13.5134 4.11426 14.3998 4.11426C15.2862 4.11426 15.9998 4.82786 15.9998 5.71426C15.9998 6.60066 15.2862 7.31426 14.3998 7.31426Z'
                    fill='#2FB67C'></path>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M1.6 8.68567H3.2V10.2857C3.2 11.1721 2.4864 11.8857 1.6 11.8857C0.7136 11.8857 0 11.1721 0 10.2857C0 9.39927 0.7136 8.68567 1.6 8.68567Z'
                    fill='#E01E5A'></path>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M7.31426 1.6V3.2H5.71426C4.82786 3.2 4.11426 2.4864 4.11426 1.6C4.11426 0.7136 4.82786 0 5.71426 0C6.60066 0 7.31426 0.7136 7.31426 1.6Z'
                    fill='#36C5F1'></path>
                </svg>
              </span>
              <p className='text-gray-500 mt-2'>Slack</p>
            </div>
            <div className='mx-2 flex flex-col h-max items-center justify-center px-10 py-3 border-[1px] border-gray-200'>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 fill-gray-900'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path d='M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z'></path>
                  <path d='M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z'></path>{" "}
                </svg>
              </span>
              <p className='text-gray-500 mt-2'>Copy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
