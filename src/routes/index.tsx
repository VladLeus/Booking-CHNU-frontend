import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import { AppRoutes } from './_data.ts';
import PrivateRoute from './PrivateRoute.tsx';
import PublicRoute from './PublicRoute.tsx';
import ForgotPassword from '@pages/ForgotPassword';
import RegistrationPage from '@pages/registration';
import Home from '@pages/home';
import Cars from '@pages/cars';
import ProfileSettings from '@pages/profile';
import TripHistory from '@pages/trip-history/TripHistory.tsx';
import Wallet from '@pages/wallet';
import LoginPage from '@pages/Login';
import ResetTokenCheckPage from '@pages/ResetTokenCheckPage';
import PasswordReset from '@pages/PasswordReset';

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
    path: AppRoutes.forgotPassword,
    element: <PublicRoute />,
    children: [
      {
        path: AppRoutes.forgotPassword,
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: AppRoutes.resetTokenCheck,
    element: <PublicRoute />,
    children: [
      {
        path: AppRoutes.resetTokenCheck,
        element: <ResetTokenCheckPage />,
      },
    ],
  },
  {
    path: AppRoutes.passwordReset,
    element: <PublicRoute />,
    children: [
      {
        path: AppRoutes.passwordReset,
        element: <PasswordReset />,
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
    path: AppRoutes.profileSettings,
    element: <PrivateRoute />,
    children: [
      {
        path: AppRoutes.profileSettings,
        element: <ProfileSettings />,
      },
    ],
  },
  {
    path: AppRoutes.tripHistory,
    element: <PrivateRoute />,
    children: [
      {
        path: AppRoutes.tripHistory,
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
    path: '*',
    element: <Navigate to={AppRoutes.default} />,
  },
];

export function AppRouter() {
  return useRoutes(routes);
}
