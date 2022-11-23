import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import errorImg from "../assets/images/error 1.png";

export default function Error() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full p-0'>
      <img className='w-32 h-32' src={errorImg} alt='error image'></img>
      <p className='text-md font-medium m-10'>Sorry, something went wrong</p>
    </div>
  );
}
