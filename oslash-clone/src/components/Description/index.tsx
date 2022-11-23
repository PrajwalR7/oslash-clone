import React from "react";
import { useEffect } from "react";
import Sidebar from "../Sidebar";
import Start from "../Start";
import TopBar from "../TopBar";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import RightBar from "../RightBar";
import FirstSideBar from "../FirstSideBar/index";
import oslashImg from "../../assets/images/oslash.png";

export default function Description(props: any) {
  const location = useLocation();

  useEffect(() => {
    console.log(console.log(location.state));
  }, []);
  return (
    <div className='h-screen flex flex-row'>
      <FirstSideBar />
      <Sidebar />
      <div className='h-screen w-full flex flex-col'>
        <TopBar />
        <Start />
        <div className='flex flex-row w-full h-screen'>
          <div className='p-2 flex flex-col w-[80%]'>
            <div className='w-full flex flex-row h-max justify-between py-4'>
              <div className='flex flex-row w-max items-center'>
                <span className='text-center m-2'>
                  <Link to='/'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5 fill-gray-900 transform -scale-100'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path
                        fill-rule='evenodd'
                        d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                        clip-rule='evenodd'></path>
                    </svg>
                  </Link>
                </span>
                <h1 className='m-1 font-bold text-2xl'>View Shortcuts</h1>
                <span className='m-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 fill-gray-900'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z'></path>
                  </svg>
                </span>
              </div>
              <div className='flex items-center'>
                <span className=''>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 fill-gray-900'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path
                      fill-rule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clip-rule='evenodd'></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className='mx-2 flex flex-row justify-between h-full w-[100%] rounded-md border-indigo-500 border-[1px]'>
              <div className='w-max h-full flex flex-row'>
                <div className='h-full w-14 bg-slate-100 rounded-tl-md rounded-bl-md flex flex-col items-center'>
                  <div className='w-full h-max flex justify-center'>
                    <img
                      className='p-2 rounded-sm'
                      src={oslashImg}
                      alt={location.state.url}></img>
                  </div>
                  <div className='my-5 w-full h-max flex justify-center'>
                    <span className='bg-slate-300 p-2 rounded-md flex justify-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        className='w-5 h-5 fill-gray-900'
                        fill='currentColor'>
                        <path d='M0 0h24v24H0z' fill='none'></path>
                        <path d='M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z'></path>
                      </svg>
                    </span>
                  </div>
                  <div>
                    <div className='my-3'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-5 h-5 fill-gray-900'
                        viewBox='0 0 20 20'
                        fill='currentColor'>
                        <path
                          fill-rule='evenodd'
                          d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z'
                          clip-rule='evenodd'></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col h-full items-start ml-5'>
                  <p className='my-4 text-sm font-medium'>
                    {location.state.shortlink}
                  </p>
                  <p className='my-4 flex font-medium text-sm flex-col'>
                    <span className='text-xs font-normal'>Destination URL</span>
                    {location.state.url}
                  </p>
                  <p className='my-4 text-sm font-medium flex flex-col'>
                    <span className='font-normal text-xs'>Description</span>
                    {location.state.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <RightBar />
        </div>
      </div>
    </div>
  );
}
