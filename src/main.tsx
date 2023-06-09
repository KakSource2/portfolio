import "./main.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Bushkraft,
  Bushkraft_Error,
  FreeCodeCamp,
  FreeCodeCamp_Error,
  FreeCodeCamp__SurveyForm,
  FreeCodeCamp__TributePage,
  FrontEndMentor,
  FrontEndMentor_Error,
  FrontEndMentor__ColumnPreviewCard,
  FrontEndMentor__InteractiveRating,
  FrontEndMentor__ProductPreview,
  FrontEndMentor__ResultsSummary,
  Kak,
  Kak_Error,
  Kak__Projects,
  Kak__BackgroundShifter,
  Kak__BestFramework,
  Kak__CookieClicker,
  Kak__Dice,
  Kak__Login,
  Kak__MemeGenerator,
  Kak__Random,
  Kak__RandomQuotes,
  Kak__RandomReflections,
  Kak__Tarot,
  Kak__Tetris,
  Kak__ToDoList,
  Kak__Weather,
  Kak__BoxClicker,
  RickandMorty,
  RickandMorty_Error,
  RickAndMorty__Character,
  RickAndMorty__Characters,
  RickAndMorty__Episodes,
  RickAndMorty__Locations,
  Tests,
  Tests_Error,
  ThemPaint,
  ThemPaint_Error,
  ThemPaint_Home,
  TMDB,
  TMDB_Error,
  TMDB__Contact,
  TMDB__Listing,
  TMDB__Login,
  TMDB__Movie,
  FrontEndMentor_Home,
} from "./pages/index";
import Sass from "./pages/Tests/subpages/Sass/Sass";
import ReactQuery from "./pages/Tests/subpages/react-query/ReactQuery";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "./pages/Bushkraft/subpages/Home";
import Main from "./pages/FreeCodeCamp/subpages/Main/Main";
import Kak_Home from "./pages/Kak/subpages/Projects/Home/Home";
import Collections from "./pages/Bushkraft/subpages/collections/Collections";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  // ? ---> / Main Page / <---------------------- // ----------- // ----------- // ------------ // ----------- // ----------- //
  {
    path: "/",
    element: <Kak />,
    errorElement: <Kak_Error />,
  },
  {
    path: "/kak/projects",
    element: <Kak__Projects />,
    errorElement: <Kak_Error />,
    children: [
      {
        path: "/kak/projects",
        element: <Kak_Home />,
        errorElement: <Kak_Error />,
      },
      {
        path: "/kak/projects/background-shifter",
        element: <Kak__BackgroundShifter />,
        errorElement: <Kak_Error />,
      },
      {
        path: "/kak/projects/cookie-clicker",
        element: <Kak__CookieClicker />,
        errorElement: <Kak_Error />,
      },
      {
        path: "/kak/projects/dice",
        element: <Kak__Dice />,
        errorElement: <Kak_Error />,
      },
      {
        path: "/kak/projects/login",
        element: <Kak__Login />,
        errorElement: <Kak_Error />,
      },
      {
        path: "/kak/projects/meme-generator",
        element: <Kak__MemeGenerator />,
        errorElement: <Kak_Error />,
      },
      {
        path: "/kak/projects/random",
        element: <Kak__Random />,
        errorElement: <Kak_Error />,
      },
      {
        path: "/kak/projects/random-quotes",
        element: <Kak__RandomQuotes />,
        errorElement: <Kak_Error />,
      },
      {
        path: "/kak/projects/random-reflections",
        element: <Kak__RandomReflections />,
        errorElement: <Kak_Error />,
      },
      {
        path: "/kak/projects/tarot",
        element: <Kak__Tarot />,
        errorElement: <Kak_Error />,
      },
      {
        path: "/kak/projects/tetris",
        element: <Kak__Tetris />,
        errorElement: <Kak_Error />,
      },
      {
        path: "/kak/projects/to-do-list",
        element: <Kak__ToDoList />,
        errorElement: <Kak_Error />,
      },
      {
        path: "/kak/projects/weather",
        element: <Kak__Weather />,
        errorElement: <Kak_Error />,
      },
      {
        path: "/kak/projects/best-framework",
        element: <Kak__BestFramework />,
        errorElement: <Kak_Error />,
      },
      {
        path: "/kak/projects/box-clicker",
        element: <Kak__BoxClicker />,
        errorElement: <Kak_Error />,
      },
    ],
  },
  // ? ---> / Bushkraft / <---------------------- // ----------- // ----------- // ------------ // ----------- // ----------- //
  {
    path: "/bushkraft",
    element: <Bushkraft />,
    errorElement: <Bushkraft_Error />,
    children: [
      {
        path: "/bushkraft/",
        element: <Home />,
        errorElement: <Bushkraft_Error />,
      },
      {
        path: "/bushkraft/collections/:name",
        element: <Collections />,
        errorElement: <Bushkraft_Error />,
      },
    ],
  },
  // ? ---> / Free Code Camp Challenges / <---- // ----------- // ----------- // ------------ // ----------- // ----------  //
  {
    path: "/free-code-camp",
    element: <FreeCodeCamp />,
    errorElement: <FreeCodeCamp_Error />,
    children: [
      {
        path: "/free-code-camp/",
        element: <Main />,
        errorElement: <FreeCodeCamp_Error />,
      },
      {
        path: "/free-code-camp/survey-form",
        element: <FreeCodeCamp__SurveyForm />,
        errorElement: <FreeCodeCamp_Error />,
      },
      {
        path: "/free-code-camp/tribute-page",
        element: <FreeCodeCamp__TributePage />,
        errorElement: <FreeCodeCamp_Error />,
      },
    ],
  },
  // ? ---> / ThemPaint / <---------------------- // ----------- // ------------ // ----------- // ----------- // ----------- //
  {
    path: "/them-paint",
    element: <ThemPaint />,
    errorElement: <ThemPaint_Error />,
    children: [
      {
        path: "/them-paint/",
        element: <ThemPaint_Home />,
        errorElement: <ThemPaint_Error />,
      },
    ],
  },
  // ? ---> / Rick and Morty / <----------------- // ----------- // ----------- // ------------ // ----------- // ----------- //
  {
    path: "/rick-and-morty",
    element: <RickandMorty />,
    errorElement: <RickandMorty_Error />,
    children: [
      {
        path: "/rick-and-morty/character/:id",
        element: <RickAndMorty__Character />,
        errorElement: <RickandMorty_Error />,
      },
      {
        path: "/rick-and-morty/characters/:id",
        element: <RickAndMorty__Characters />,
        errorElement: <RickandMorty_Error />,
      },
      {
        path: "/rick-and-morty/episodes/:id",
        element: <RickAndMorty__Episodes />,
        errorElement: <RickandMorty_Error />,
      },
      {
        path: "/rick-and-morty/location/:id",
        element: <RickAndMorty__Locations />,
        errorElement: <RickandMorty_Error />,
      },
    ],
  },

  // ? ---> / The Movies DataBase / <------------ // ----------- // ------------ // ----------- // ----------- // ----------- //
  {
    path: "/tmdb",
    element: <TMDB />,
    errorElement: <TMDB_Error />,
    children: [
      {
        path: "/tmdb/contact",
        element: <TMDB__Contact />,
        errorElement: <TMDB_Error />,
      },
      {
        path: "/tmdb/listings",
        element: <TMDB__Listing />,
        errorElement: <TMDB_Error />,
      },
      {
        path: "/tmdb/login",
        element: <TMDB__Login />,
        errorElement: <TMDB_Error />,
      },
      {
        path: "/tmdb/movie",
        element: <TMDB__Movie />,
        errorElement: <TMDB_Error />,
      },
    ],
  },
  // ? ---> / Front End Mentor / <-------------- // ----------- // ------------ // ----------- // ----------- // ----------- //
  {
    path: "/front-end-mentor",
    element: <FrontEndMentor />,
    errorElement: <FrontEndMentor_Error />,
    children: [
      {
        path: "/front-end-mentor",
        element: <FrontEndMentor_Home />,
        errorElement: <FrontEndMentor_Error />,
      },
      {
        path: "/front-end-mentor/column-preview-card",
        element: <FrontEndMentor__ColumnPreviewCard />,
        errorElement: <FrontEndMentor_Error />,
      },
      {
        path: "/front-end-mentor/interactive-rating",
        element: <FrontEndMentor__InteractiveRating />,
        errorElement: <FrontEndMentor_Error />,
      },
      {
        path: "/front-end-mentor/product-preview",
        element: <FrontEndMentor__ProductPreview />,
        errorElement: <FrontEndMentor_Error />,
      },
      {
        path: "/front-end-mentor/results-summary",
        element: <FrontEndMentor__ResultsSummary />,
        errorElement: <FrontEndMentor_Error />,
      },
    ],
  },
  // ? ---> / Test / <--------------------------- // ----------- // ------------ // ----------- // ----------- // ----------- //
  {
    path: "/tests",
    element: <Tests />,
    errorElement: <Tests_Error />,
    children: [
      {
        path: "/tests/sass",
        element: <Sass />,
        errorElement: <Tests_Error />,
      },
      {
        path: "/tests/react-query",
        element: <ReactQuery />,
        errorElement: <Tests_Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
