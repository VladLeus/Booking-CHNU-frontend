import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import { AppRoutes } from './_data.ts';
import PublicRoute from './PublicRoutes/PublicRoute';
import PrivateRoute from './PrivateRoutes/PrivateRoute';
import PrivatePasswordResetRoute from './PrivateRoutes/PrivatePasswordResetRoute';
import RegistrationPage from '@pages/Registration';
import SignIn from 'pages/SignIn';
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
import HotelRooms from '@pages/HotelRooms';
import RoomInfo from '@pages/RoomInfo';

const routes: RouteObject[] = [
  {
    path: AppRoutes.SIGN_UP,
    element: <PublicRoute />,
    children: [
      {
        path: AppRoutes.SIGN_UP,
        element: <RegistrationPage />,
      },
    ],
  },
  {
    path: AppRoutes.SIGN_IN,
    element: <PublicRoute />,
    children: [
      {
        path: AppRoutes.SIGN_IN,
        element: <SignIn />,
      },
    ],
  },
  {
    path: AppRoutes.FORGOT_PASSWORD,
    element: <PublicRoute />,
    children: [
      {
        path: AppRoutes.FORGOT_PASSWORD,
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: AppRoutes.RESET_TOKEN_CHECK,
    element: <PublicRoute />,
    children: [
      {
        path: AppRoutes.RESET_TOKEN_CHECK,
        element: <ResetTokenCheckPage />,
      },
    ],
  },
  {
    path: AppRoutes.EMAIL_CONFIRMATION,
    element: <PublicRoute />,
    children: [
      {
        path: AppRoutes.EMAIL_CONFIRMATION,
        element: <EmailConfirmation />,
      },
    ],
  },
  {
    path: AppRoutes.PASSWORD_RESET,
    element: <PrivatePasswordResetRoute />,
    children: [
      {
        path: AppRoutes.PASSWORD_RESET,
        element: <PasswordReset />,
      },
    ],
  },
  {
    path: AppRoutes.HOME,
    element: <PrivateRoute />,
    children: [
      {
        path: AppRoutes.HOME,
        element: <Home />,
      },
    ],
  },
  {
    path: AppRoutes.CARS,
    element: <PrivateRoute />,
    children: [
      {
        path: AppRoutes.CARS,
        element: <Cars />,
      },
    ],
  },
  {
    path: AppRoutes.CAR_BOOKING,
    element: <PrivateRoute />,
    children: [
      {
        path: AppRoutes.CAR_BOOKING,
        element: <CarBooking />,
      },
    ],
  },
  {
    path: AppRoutes.PROFILE_SETTINGS,
    element: <PrivateRoute />,
    children: [
      {
        path: AppRoutes.PROFILE_SETTINGS,
        element: <ProfileSettings />,
      },
    ],
  },
  {
    path: AppRoutes.TRIP_HISTORY,
    element: <PrivateRoute />,
    children: [
      {
        path: AppRoutes.TRIP_HISTORY,
        element: <TripHistory />,
      },
    ],
  },
  {
    path: AppRoutes.WALLET,
    element: <PrivateRoute />,
    children: [
      {
        path: AppRoutes.WALLET,
        element: <Wallet />,
      },
    ],
  },
  {
    path: AppRoutes.HOTELS,
    element: <PrivateRoute />,
    children: [
      {
        path: AppRoutes.HOTELS,
        element: <HotelResults />,
      },
    ],
  },
  {
    path: AppRoutes.HOTEL_ROOMS,
    element: <PrivateRoute />,
    children: [
      {
        path: AppRoutes.HOTEL_ROOMS,
        element: <HotelRooms />,
      },
    ],
  },
  {
    path: AppRoutes.ROOM_INFO,
    element: <PrivateRoute />,
    children: [
      {
        path: AppRoutes.ROOM_INFO,
        element: <RoomInfo />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={AppRoutes.SIGN_UP} />,
  },
];

export function AppRouter() {
  return useRoutes(routes);
}
