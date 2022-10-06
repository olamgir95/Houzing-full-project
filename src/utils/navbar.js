import useId from "../hooks/useId";
import React from "react";


const Propertiespage = React.lazy(() => import("../pages/Properties"));
const HomePage = React.lazy(() => import("../pages/Home"));

export const navbar = [
  {
    id: useId,
    element:<React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}> <HomePage /></React.Suspense>,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element:
    <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}> <Propertiespage /></React.Suspense>,
    title: "Proporties",
    path: "/proporties",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <h1>Generic Sign In</h1>,
    title: "Sign In",
    path: "/signin",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <h1>Generic Sign Up</h1>,
    title: "Sign Up",
    path: "/signup",
    private: false,
    hidden: true,
  },
];
