import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import { AppRoutes } from './_data.ts';
import PublicRoute from './PublicRoutes/PublicRoute';
import PrivateRoute from './PrivateRoutes/PrivateRoute';
import PrivatePasswordResetRoute from './PrivateRoutes/PrivatePasswordResetRoute';
import RegistrationPage from '@pages/Registration';
import LoginPage from '@pages/Login';
import ForgotPassword from '@pages/ForgotPassword';
import ResetTokenCheckPage from '@pages/ResetTokenCheckPage';
import PasswordReset from '@pages/PasswordReset';
import Home from '@pages/Home';
import Cars from '@pages/Cars';
import ProfileSettings from '@pages/Profile';
import TripHistory from '@pages/TripHistory';
import Wallet from '@pages/Wallet';
import EmailConfirmation from '@pages/EmailConfirmation';
import CarBooking from '@pages/CarBooking/CarBooking.tsx';
import HotelResults from '@pages/HotelsResults';

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
    path: AppRoutes.emailConfirmation,
    element: <PublicRoute />,
    children: [
      {
        path: AppRoutes.emailConfirmation,
        element: <EmailConfirmation />,
      },
    ],
  },
  {
    path: AppRoutes.passwordReset,
    element: <PrivatePasswordResetRoute />,
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
    path: AppRoutes.carbooking,
    element: <PrivateRoute />,
    children: [
      {
        path: AppRoutes.carbooking,
        element: <CarBooking />,
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
    path: AppRoutes.hotelsResult,
    element: <PrivateRoute />,
    children: [
      {
        path: AppRoutes.hotelsResult,
        element: <HotelResults />,
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
