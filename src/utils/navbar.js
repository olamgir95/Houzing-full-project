import React from "react";
import useId from "../hooks/useId";
import Loader from "../components/Loader/Loader.jsx";

const HomePage = React.lazy(() => import("../pages/Home"));
const Properties = React.lazy(() => import("../pages/Properties/Properties.jsx"));
const HouseItem = React.lazy(() => import("../pages/HouseItem"));
const ProfilePage = React.lazy(() => import('../pages/ProfilePage/ProfilePage.jsx'))

// import HomePage from '../pages/Home';
// import Properties from '../pages/Properties';

export const navbar = [
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment><Loader/></React.Fragment>}>
        <HomePage />
      </React.Suspense>
    ),
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment><Loader/></React.Fragment>}>
        <Properties />
      </React.Suspense>
    ),
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment><Loader/></React.Fragment>}>
        <HouseItem />
      </React.Suspense>
    ),
    title: "Single House",
    path: "/properties/:id",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: (
      <React.Suspense
        fallback={
          <React.Fragment>
            <Loader />
          </React.Fragment>
        }
      >
        <ProfilePage />
      </React.Suspense>
    ),
    title: "Profile",
    path: "/profile",
    private: false,
    hidden: true,
  },
];
