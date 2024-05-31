import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import { AppRoutes } from './_data.ts';
import PrivateRoute from './PrivateRoute.tsx';
import { RegistrationPage } from '@pages/registration';
import { Home } from '@pages/home';
import { Cars } from '@pages/cars';
import { ProfileSettings } from '@pages/profile';
import { TripHistory } from '@pages/trip-history';
import { Wallet } from '@pages/wallet';
import { LoginPage } from '@pages/Login';
import PublicRoute from './PublicRoute.tsx';

const routes: RouteObject[] = [
  {
    path: AppRoutes.default,
    element: <PublicRoute />,
    children: [
      {
        path: AppRoutes.default,
        element: <RegistrationPage />,
      },
    ],
  },
  {
    path: AppRoutes.home,
    element: <PrivateRoute />,
    children: [
      {
        path: AppRoutes.home,
        element: <Home />,
      },
    ],
  },
  {
    path: AppRoutes.cars,
    element: <PrivateRoute />,
    children: [
      {
        path: AppRoutes.cars,
        element: <Cars />,
      },
    ],
  },
  {
    path: AppRoutes.profile_settings,
    element: <PrivateRoute />,
    children: [
      {
        path: AppRoutes.profile_settings,
        element: <ProfileSettings />,
      },
    ],
  },
  {
    path: AppRoutes.trip_history,
    element: <PrivateRoute />,
    children: [
      {
        path: AppRoutes.trip_history,
        element: <TripHistory />,
      },
    ],
  },
  {
    path: AppRoutes.wallet,
    element: <PrivateRoute />,
    children: [
      {
        path: AppRoutes.wallet,
        element: <Wallet />,
      },
    ],
  },
  {
    path: AppRoutes.login,
    element: <PublicRoute />,
    children: [
      {
        path: AppRoutes.login,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={AppRoutes.default} />,
  },
];

export function AppRouter() {
  return useRoutes(routes);
}
