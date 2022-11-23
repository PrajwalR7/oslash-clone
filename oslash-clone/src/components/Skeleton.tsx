import React from "react";

export default function Skeleton() {
  return (
    <div className='p-6 w-[90%] h-32 bg-[#fff]'>
      <div className='flex w-full h-24'>
        <div className='animate-pulse w-14 h-14 rounded-full bg-gray-300'></div>
        <div className='animate-pulse w-[80%] h-full'>
          <div className='animate-pulse ml-6 w-[20%] h-6 bg-gray-300'></div>
          <div className='animate-pulse ml-6 w-full h-6 mt-4 bg-gray-300'></div>
        </div>
      </div>
    </div>
  );
}
