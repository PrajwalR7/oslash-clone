import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Tab } from "@headlessui/react";
import AddTag from "../utility/AddTag";
import SuccessPopup from "../SucessPopup/index";
import { Link } from "react-router-dom";

const MY_TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUHJhandhbCBSYW1lc2giLCJlbWFpbCI6InJhbWVzaHByYWp3YWwyMUBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUxtNXd1MXV6UVFhWHBZejJkVTFscUFsYnVCWWk5TWltR0N6Q3NZcFB3Um49czk2LWMiLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExNjQxMjkxODQ0Njg2OTI4Nzk5NSIsImlzcyI6Imh0dHBzOi8vYXV0aC5vc2xhc2gud29yayIsImF1ZCI6Imh0dHBzOi8vYXV0aC5vc2xhc2gud29yayIsImh0dHBzOi8vYXV0aC5vc2xhc2gud29yay9lbWFpbCI6InJhbWVzaHByYWp3YWwyMUBnbWFpbC5jb20iLCJpYXQiOjE2Njg0Mjk5OTIsImV4cCI6MTY3MTAyMTk5Mn0.UhrZkFLptMaJQHDv_KvkfWclriJFcmV1z5NwY29sAP0`;

let visibilty = "Workspace";
export default function Popup() {
  const [workspace, setWorkspce] = useState<Boolean>(true);
  const [pvt, setPrivate] = useState<Boolean>(false);
  const [word, setWord] = useState<String>("");
  const [showSuccess, setShowSucess] = useState<Boolean>(false);
  const [data, setData] = useState<any>();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>();

  const onSubmit = handleSubmit((data) => {
    setData(data);
    fetch("https://gateway.oslash.work/graphql", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        authorization: MY_TOKEN,
      },
      body: JSON.stringify({
        query: `
        mutation createShortcutEdge($input: EdgeCreateShortcutEdgeInput!, $pk: String!, $sk: String!, $org: String!, $uid: String!, $relevanceScore: String!, $filters: EdgeCreateShortcutEdgeFilters!, $createdAt: String!, $updatedAt: String!, $_lastChangedAt: String!) {
      createShortcutEdge(
        input: $input
        pk: $pk
        sk: $sk
        org: $org
        relevanceScore: $relevanceScore
        filters: $filters
        uid: $uid
        createdAt: $createdAt
        updatedAt: $updatedAt
        _lastChangedAt: $_lastChangedAt
      ) {
        description
        pk
        shortlink
        sk
        url
        org
        uid
        creator
        tags
        sharedWithWeb
      }
    }
        `,
        variables: {
          pk: "MEMBER#google-oauth2|116412918446869287995",
          sk: `LINK#o/${data.shortcut}`,
          org: "ORG#f6721a27-b573-4e30-b63b-f761f5e7e34b",
          input: {
            url: data.url,
            description: data.description,
            sharedWithWeb: false,
            tags: [],
            shortcutActionedFrom: "popup",
            shortcutType: "URL",
          },
          uid: "",
          relevanceScore: "",
          createdAt: "",
          updatedAt: "",
          _lastChangedAt: "",
          filters: {
            tags: [],
          },
        },
      }),
    })
      .then((res) => {
        // setShowSucess(true);
        res
          .json()
          .then((res) => {
            setShowSucess(true);
            console.log(res);
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  });

  useEffect(() => {
    if (pvt) {
      visibilty = "Private";
    } else visibilty = "Workspace";
  }, [pvt, workspace]);

  return (
    <div className='flex w-full h-screen justify-center items-center'>
      {showSuccess ? (
        <SuccessPopup data={data} isPvt={pvt} />
      ) : (
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
          <div className='flex w-full h-full flex-col px-4 py-2'>
            <p className='mb-2 text-sm font-medium text-gray-700 font-sans'>
              Shortcut
            </p>
            <div className='mb-2 flex flex-row w-full'>
              <div className='flex flex-row rounded-md border-[1px] border-gray-300 w-[90%] mr-2 focus:outline-1 focus:outline-indigo-400'>
                <span className='w-9 bg-slate-100 p-2 rounded-tl-md rounded-bl-md'>
                  <span className='text-sm font-medium font-sans text-gray-500'>
                    o/
                  </span>
                </span>
                <input
                  {...register("shortcut", {
                    required: true,
                  })}
                  type='text'
                  className={
                    errors.shortcut
                      ? "ring-1 ring-red-500 focus:outline-0 w-full p-2 font-medium text-sm font-sans placeholder:text-red-500"
                      : "focus:ring-0 focus:outline-0 bg-transparent p-2 h-full w-full font-medium text-sm font-sans"
                  }
                  placeholder={
                    errors.shortcut
                      ? "This field cannot be empty!"
                      : "shortcut-name"
                  }></input>
              </div>
              <div className='flex flex-row w-max bg-gray-100 rounded-md justify-center items-center'>
                <span
                  onClick={() => {
                    setWorkspce(true);
                    setPrivate(false);
                  }}
                  className={
                    workspace
                      ? "bg-blue-100 h-full rounded-md p-2"
                      : "bg-transparent h-full p-2"
                  }>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 fill-gray-900'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path
                      fill-rule='evenodd'
                      d='M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z'
                      clip-rule='evenodd'></path>
                  </svg>
                </span>
                <span
                  onClick={() => {
                    setWorkspce(false);
                    setPrivate(true);
                  }}
                  className={
                    pvt
                      ? "bg-blue-100 h-full rounded-md p-2"
                      : "bg-transparent h-full p-2"
                  }>
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
                </span>
              </div>
            </div>
            <p className='text-gray-500 text-sm font-medium font-sans'>
              o/ - {workspace ? "Workspace" : "Private"}
            </p>
          </div>
          <Tab.Group defaultIndex={0}>
            <Tab.List
              as='div'
              className='w-full flex flex-row items-center justify-start'>
              <Tab className='focus:outline-0'>
                {({ selected }) => (
                  <div className='flex flex-row w-max px-4 py-2'>
                    <input
                      className='mx-2 focus:outline-0'
                      type='radio'
                      checked={selected ? true : false}
                    />
                    <span className='px-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-5 h-5 fill-gray-900'
                        viewBox='0 0 20 20'
                        fill='currentColor'>
                        <path
                          fill-rule='evenodd'
                          d='M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z'
                          clip-rule='evenodd'></path>
                      </svg>
                    </span>
                    <p className='px-2 w-max font-sans font-medium text-sm text-gray-700'>
                      Link
                    </p>
                  </div>
                )}
              </Tab>
              <Tab className='focus:outline-0'>
                {({ selected }) => (
                  <div className='flex flex-row w-max px-4 focus:outline-0 focus:ring-0'>
                    <input
                      className='mx-2 focus:outline-0'
                      type='radio'
                      checked={selected ? true : false}
                    />
                    <span className='px-2'>
                      <svg
                        viewBox='0 0 16 16'
                        className='w-5 h-5 text-gray-900'
                        fill='currentColor'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M7.64982 2.40039L5.06928 7.97844H2.3999L4.97613 2.40039H7.64982Z'
                          fill='currentColor'></path>
                        <path
                          d='M7.81389 7.97852L5.23765 13.5566H2.56396L5.13971 7.97852H7.81389Z'
                          fill='currentColor'></path>
                        <path
                          d='M12.1917 3.63055L8.88805 3.6225L8.69531 2.90332L11.9991 2.91138L12.1917 3.63055Z'
                          fill='currentColor'></path>
                        <path
                          d='M13.8285 5.51921L8.00667 5.51117L7.81396 4.79199L13.6359 4.80004L13.8285 5.51921Z'
                          fill='currentColor'></path>
                        <path
                          d='M12.9472 7.4079L7.12532 7.39984L6.93262 6.68066L12.7544 6.68871L12.9472 7.4079Z'
                          fill='currentColor'></path>
                      </svg>
                    </span>
                    <p className='px-2 w-max font-sans font-medium text-sm text-gray-700'>
                      Snippet
                    </p>
                  </div>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel className='pb-4 border-b-[1px] border-gray-200'>
                <div className='flex flex-col w-full h-max'>
                  <div className='flex px-4 py-2 flex-col w-full'>
                    <p className='my-2 text-sm font-medium text-gray-700 font-sans'>
                      Destination URL
                    </p>
                    <input
                      {...register("url", {
                        required: {
                          value: true,
                          message: "URL cannot be empty",
                        },
                        pattern: {
                          value:
                            /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/,
                          message: "Inavlid URL",
                        },
                      })}
                      className={
                        errors.url
                          ? "font-medium text-sm focus:outline-1 focus:outline-red-400 ring-1 ring-red-500 p-2 rounded-md font-sans"
                          : "font-medium text-sm focus:outline-1 focus:outline-indigo-400 ring-1 ring-gray-300 p-2 rounded-md font-sans"
                      }
                      type='url'
                      placeholder='Paste the full URL of the page you want to get to'></input>
                    {errors.url && (
                      <p className='mt-1 text-sm font-sans font-medium text-red-500'>
                        {errors.url.message}
                      </p>
                    )}
                    <p className='text-gray-500 my-2 text-sm font-medium font-sans'>
                      Replace the query string in the URL to create dynamic
                      shortcut
                    </p>
                  </div>
                </div>
                <div className='flex px-4 py-2 flex-col w-full h-max'>
                  <div className='flex flex-col w-full'>
                    <p className='my-2 font-sans'>Description</p>
                    <input
                      {...register("description")}
                      value={word}
                      onChange={(e) => {
                        setWord(e.target.value);
                      }}
                      className='font-medium ring-1 ring-gray-300 p-2 rounded-md focus:outline-1 focus:outline-indigo-400 text-sm font-sans'
                      type='text'
                      placeholder='Something to describe the destination page'
                      maxLength={250}></input>
                    <p className='text-gray-500 my-2 text-sm font-medium font-sans'>
                      {250 - word.length} characters left
                    </p>
                  </div>
                </div>
                <div className='flex px-4 py-2 flex-col w-full h-max'>
                  <div className='flex flex-col w-full'>
                    <p className='my-2 font-sans'>Tags</p>
                    <AddTag placeholderName={"Add tags"} />
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel className='overflow-y-scroll w-full h-96 overflow-x-hidden pb-4 border-b-[1px] border-gray-200'>
                <p className='px-4 mt-4 text-sm font-sans font-medium text-gray-400'>
                  Content
                </p>
                <div className='flex mx-4 my-2 p-2 flex-col w-full h-max ring-1 ring-gray-300'>
                  <textarea className='text-sm h-64 w-[95%] font-medium font-sans focus:outline-0 mb-2 rounded-md ring-0'></textarea>
                  <div className='flex px-2 flex-row w-full justify-between items-center'>
                    <p className='w-max font-sans text-md font-medium text-gray-700'>
                      Variables
                    </p>
                    <div className='mb-2 flex flex-row justify-center px-5 py-2 rounded-md items-center bg-black text-white'>
                      <span className='mx-2'>+</span>
                      <span className=''>Add variables</span>
                    </div>
                  </div>
                  <AddTag placeholderName={"Search for varibales"} />
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
          <div className='flex flex-row w-full h-max justify-between px-2 py-4'>
            <div></div>
            <div className='flex flex-row w-max items-center'>
              <Link to='/'>
                <button className='mx-2 ring-1 ring-black bg-transparent px-4 py-2 rounded-md text-sm font-medium'>
                  Cancel
                </button>
              </Link>
              <button
                onClick={onSubmit}
                className='mx-2 bg-black text-white px-4 py-2 rounded-md text-sm font-medium'>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
