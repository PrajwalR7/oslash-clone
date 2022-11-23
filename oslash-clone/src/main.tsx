import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Collection from "./components/Collection";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import Description from "./components/Description";
import SubCollection from "./components/SubCollection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/collection",
    element: <Collection />,
  },
  {
    path: "/desc",
    element: <Description />,
  },
  {
    path: "/sub-collection",
    element: <SubCollection />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
