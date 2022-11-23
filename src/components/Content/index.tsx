import React from "react";
import Skeleton from "../Skeleton";
import Error from "../Error";
import QueryDiv from "../QueryDiv";
import { useEffect, useState } from "react";
import RightBar from "../RightBar";
import ReactPaginate from "react-paginate";
import FirstSideBar from "../FirstSideBar";
import "./style.css";
import { Link } from "react-router-dom";

const PER_PAGE = 5;

export default function Content(props: {
  isCollection: Boolean;
  isLoading: Boolean;
  isSuccess: Boolean;
  data: { queryShortcuts: any };
  isError: Boolean;
}) {
  let pageCount = 0;
  let currentPageData = 0;
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (props.isSuccess) console.log(props.data.queryShortcuts);
  }, []);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  if (props.isSuccess) {
    currentPageData = props.data.queryShortcuts.shortlinks
      .slice(offset, offset + PER_PAGE)
      .map(
        (ele: {
          shortlink: any;
          url: any;
          description: any;
          uid: any;
          totalHits: any;
        }) => {
          return (
            <QueryDiv
              uid={ele.uid}
              isCollection={props.isCollection}
              shortlink={ele.shortlink}
              url={ele.url}
              desc={ele.description}
              totalhits={ele.totalHits}
            />
          );
        }
      );

    pageCount = Math.ceil(
      props.data.queryShortcuts.shortlinks.length / PER_PAGE
    );
  }

  return (
    <div className='w-[85%] flex flex-row h-screen bg-[#f2f4f5]'>
      <div className='flex flex-col w-full'>
        <div className='flex items-center flex-row p-4 justify-between'>
          <div>
            <div className='bg-indigo-600 w-max h-max py-1 rounded-md text-white flex flex-row items-center'>
              <Link to='/popup'>
                <div className='btn relative w-max h-full flex py-1 flex-row'>
                  <span className='px-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5 text-white'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path
                        fill-rule='evenodd'
                        d='M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z'
                        clip-rule='evenodd'></path>
                    </svg>
                  </span>
                  <span className='pl-1 pr-2 text-sm font-medium'>
                    New Shortcut
                  </span>
                </div>
              </Link>
              <span className='px-2 py-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-3 h-3 text-white fill-current'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path
                    fill-rule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clip-rule='evenodd'></path>
                </svg>
              </span>
            </div>
          </div>
          <div className='flex flex-row w-max items-center'>
            <span className='mx-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 text-gray-900 fill-current'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path
                  fill-rule='evenodd'
                  d='M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z'
                  clip-rule='evenodd'></path>
              </svg>
            </span>
            <span className='mx-4'>
              <svg
                className='w-5 h-5 text-gray-900 fill-current'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M5 5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44772 7 5 7H16C16.5523 7 17 6.55228 17 6C17 5.44772 16.5523 5 16 5H5Z'
                  fill='#111827'></path>
                <path
                  d='M7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H14C14.5523 11 15 10.5523 15 10C15 9.44772 14.5523 9 14 9H7Z'
                  fill='#111827'></path>
                <path
                  d='M9 13C8.44772 13 8 13.4477 8 14C8 14.5523 8.44772 15 9 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H9Z'
                  fill='#111827'></path>
              </svg>
            </span>
            <span className='border-[1px] mx-4 rounded-md flex flex-row border-black p-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 text-gray-900 fill-current mx-1'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path
                  fill-rule='evenodd'
                  d='M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z'
                  clip-rule='evenodd'></path>
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 fill-gray-900 mx-1'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path d='M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'></path>
              </svg>
            </span>
          </div>
        </div>
        <div className='flex flex-col w-full h-screen px-4 py-2 bg-[#f9fafb]'>
          {props.isLoading ? (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          ) : (
            ""
          )}
          {props.isSuccess ? (
            <div className='flex flex-col h-max justify-between bg-gray-50'>
              <div className='w-full h-max'>{currentPageData}</div>
              <ReactPaginate
                previousLabel={"←"}
                nextLabel={"→"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName='mb-2 mt-2 w-[100%] flex flex-row bg-[#f9fafb] justify-center'
                pageClassName='transition-all font-sans font-medium mx-0 px-2 py-1 duration-400 ease-in text-center text-sm flex flex-row border-gray-300 border-[1px] justify-center items-center'
                previousClassName='flex flex-row justify-center items-center'
                previousLinkClassName='px-4 font-sans font-medium py-2 text-sm bg-indigo-600 text-white mr-20 rounded-md text-sm'
                nextClassName='flex text-sm flex-row justify-center items-center'
                nextLinkClassName='px-4 font-sans font-medium py-2 bg-indigo-600 text-white ml-20 rounded-md text-sm'
                activeClassName='bg-gray-200'
                disabledClassName=''></ReactPaginate>
            </div>
          ) : null}
          {props.isError ? <Error /> : null}
        </div>
      </div>
      <RightBar />
    </div>
  );
}
