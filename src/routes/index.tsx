import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
// import React from "react";
import { Home } from '../pages/home/Home.tsx';
import { Cars } from '../pages/cars/Cars.tsx';
import { ProfileSettings } from '../pages/profile/ProfileSettings.tsx';
import { TripHistory } from '../pages/trip-history/TripHistory.tsx';
import { Wallet } from '../pages/wallet/Wallet.tsx';
import { AppRoutes } from './_data.ts';

const routes: RouteObject[] = [
  {
    path: AppRoutes.default,
    element: <Home />,
  },
  {
    path: AppRoutes.cars,
    element: <Cars />,
  },
  {
    path: AppRoutes.profile_settings,
    element: <ProfileSettings />,
  },
  {
    path: AppRoutes.trip_history,
    element: <TripHistory />,
  },
  {
    path: AppRoutes.wallet,
    element: <Wallet />,
  },
  {
    path: '*',
    element: <Navigate to={AppRoutes.default} />,
  },
];

export function AppRouter() {
  return useRoutes(routes);
}
