import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "",
    children: [
      { index, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function Router(props) {
  return <RouterProvider router={router} />;
}

export default Router;
