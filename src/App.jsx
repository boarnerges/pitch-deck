import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import SlideTwo from "./pages/SlideTwo";
import SlideThree from "./pages/SlideThree";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "slide-two", element: <SlideTwo /> },
      { path: "slide-three", element: <SlideThree /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
