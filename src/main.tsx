import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/error/Error";
import Home from "./components/portfolio/Home";
import BackgroundShifter from "./components/projects/Background-Shifter/BackgroundShifter";
import InteractiveRating from "./components/projects/CSSC/challenges/FEM/interactive-rating/InteractiveRating";
import "./main.css";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error /> },
  {
    path: "/interactive-rating",
    element: <InteractiveRating />,
    errorElement: <Error />,
  },
  {
    path: "/background-shifter",
    element: <BackgroundShifter />,
    errorElement: <Error />,
  },
  {
    path: "/background-shifter",
    element: <BackgroundShifter />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
