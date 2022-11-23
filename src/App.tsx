import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Content from "./components/Content";
import Start from "./components/Start";
import FirstSideBar from "./components/FirstSideBar";

const MY_TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUHJhandhbCBSYW1lc2giLCJlbWFpbCI6InJhbWVzaHByYWp3YWwyMUBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUxtNXd1MXV6UVFhWHBZejJkVTFscUFsYnVCWWk5TWltR0N6Q3NZcFB3Um49czk2LWMiLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExNjQxMjkxODQ0Njg2OTI4Nzk5NSIsImlzcyI6Imh0dHBzOi8vYXV0aC5vc2xhc2gud29yayIsImF1ZCI6Imh0dHBzOi8vYXV0aC5vc2xhc2gud29yayIsImh0dHBzOi8vYXV0aC5vc2xhc2gud29yay9lbWFpbCI6InJhbWVzaHByYWp3YWwyMUBnbWFpbC5jb20iLCJpYXQiOjE2Njg0Mjk5OTIsImV4cCI6MTY3MTAyMTk5Mn0.UhrZkFLptMaJQHDv_KvkfWclriJFcmV1z5NwY29sAP0`;

function App() {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [isSuccess, setIsSucess] = useState<Boolean>(false);
  const [isError, setIsError] = useState<Boolean>(false);
  const [data, setData] = useState<any>();

  useEffect(() => {
    setIsLoading(true);
    fetch("https://gateway.oslash.work/graphql", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        authorization: MY_TOKEN,
      },
      body: JSON.stringify({
        query: `
        query queryShortcuts($query: String!, $workspacePK: String!, $collectionId: String, $offset: Int, $limit: Int, $isPrefix: Boolean, $sort: EdgeQueryShortcutsSort, $facetFilters: EdgeQueryShortcutsFilter, $experimental: Boolean) {
      queryShortcuts(
        query: $query
        workspacePK: $workspacePK
        collectionId: $collectionId
        offset: $offset
        limit: $limit
        isPrefix: $isPrefix
        sort: $sort
        facetFilters: $facetFilters
        experimental: $experimental
      ) {
        shortlinks {
          ... on EdgeCollectionShortcut {
            _version
            collection {
              countSharedGroups
              countSharedMembers
              countShortlinks
              countShortlinks
              accessType
              createdAt
              creator
              description
              isDeleted
              persistent
              pk
              sharedWith
              shortlink
              sk
              uid
              updatedAt
              tags
            }
            totalHits
            collectionId
            createdAt
            creator
            creatorDetails {
              fName
              lName
              pk
              profileImageUrl
              sk
              uid
              email
            }
            description
            pk
            shortlink
            sk
            uid
            url
            tags
            position
            type
            shortcutDetails {
              ... on EdgeSnippetShortcutDetails {
                content
              }
            }
            __typename
          }
          ... on EdgeShortcut {
            pk
            sk
            default
            uid
            creator
            creatorDetails {
              pk
              sk
              profileImageUrl
              fName
              lName
              email
            }
            totalHits
            description
            shortlink
            url
            createdAt
            sharedWithWeb
            tags
            position
            type
            shortcutDetails {
              ... on EdgeSnippetShortcutDetails {
                content
              }
            }
            _version
            __typename
          }
          ... on EdgeCollection {
            sk
            pk
            accessType
            sharedWithWeb
            managers
            countSharedGroups
            countSharedMembers
            shortlink
            description
            pk
            sk
            uid
            countShortlinks
            createdAt
            persistent
            isPublic
            _version
            creator
            creatorDetails {
              fName
              lName
              pk
              profileImageUrl
              sk
              uid
              email
            }
            tags
            position
            __typename
          }
        }
        domainFilter {
          name
          count
        }
        creatorFilter {
          name
          count
        }
        tagFilter {
          name
          count
        }
        tabCounts {
          name
          count
        }
        spellCorrection
        correctedSpelling
        isPrefix
        nextOffset
      }
    }
        `,
        variables: {
          facetFilters: {
            creator: [],
            domain: [],
            tags: [],
            shortcutType: ["URL"],
          },
          query: "",
          limit: 50,
          sort: {},
          workspacePK: "ORG#f6721a27-b573-4e30-b63b-f761f5e7e34b",
          experimental: true,
        },
      }),
    })
      .then((res) => {
        res.json().then((res) => {
          console.log(res.data);
          setData(res.data);
          setIsSucess(true);
        });
      })
      .catch((e) => {
        setIsError(true);
        console.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='font-sans h-screen overflow-y-hidden flex flex-row'>
      <FirstSideBar />
      <Sidebar />
      <div className='h-screen w-full flex flex-col'>
        <TopBar />
        <Start />
        <Content
          isCollection={false}
          isLoading={isLoading}
          isError={isError}
          isSuccess={isSuccess}
          data={data}
        />
      </div>
    </div>
  );
}

export default App;
