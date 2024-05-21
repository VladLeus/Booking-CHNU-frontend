import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
// import React from "react";
import { Home } from '../pages/Home.tsx';
import { Cars } from '../pages/Cars.tsx';
import { ProfileSettings } from '../pages/ProfileSettings.tsx';
import { TripHistory } from '../pages/TripHistory.tsx';
import { Wallet } from '../pages/Wallet.tsx';

export const AppRoutes = {
  default: '/',
  cars: '/cars',
  profile_settings: '/profile_settings',
  trip_history: '/trip_history',
  wallet: '/wallet',
};

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
