import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home/Home";
import NavBar from "./component/NavBar/NavBar";
import About from "./component/About/About";
import Skills from "./component/Skills/Skills";
import Project from "./component/Project/Project";
import Contact from "./component/Contact/Contact";
import DetailProject from "./component/DetailProject/DetailProject";
import Main from "./components/Layout/Mani";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/skills",
        element: <Skills></Skills>,
      },
      {
        path: "/project",
        element: <Project></Project>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/detailProject/:id",
        element: <DetailProject></DetailProject>,
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/api/single-project/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="main">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
