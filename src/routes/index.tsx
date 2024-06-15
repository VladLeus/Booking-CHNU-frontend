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
    path: AppRoutes.roomInfo,
    element: <PrivateRoute />,
    children: [
      {
        path: AppRoutes.roomInfo,
        element: <RoomInfo />,
      },
    ],
  },
  {
    path: AppRoutes.hotelRooms,
    element: <PrivateRoute />,
    children: [
      {
        path: AppRoutes.hotelRooms,
        element: <HotelRooms />,
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
