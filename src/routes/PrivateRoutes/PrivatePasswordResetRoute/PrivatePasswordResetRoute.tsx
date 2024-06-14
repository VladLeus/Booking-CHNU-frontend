import { Navigate, Outlet } from 'react-router-dom';
import { AppRoutes } from '@routes/_data.ts';

const PrivatePasswordResetRoute = () => {
  const tempJWTToken = localStorage.getItem('resetJWT');

  return tempJWTToken ? <Outlet /> : <Navigate to={AppRoutes.SIGN_UP} />;
};

export default PrivatePasswordResetRoute;
