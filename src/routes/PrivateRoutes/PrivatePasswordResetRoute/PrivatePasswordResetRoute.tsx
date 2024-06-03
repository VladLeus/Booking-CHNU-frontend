import { Navigate, Outlet } from 'react-router-dom';

const PrivatePasswordResetRoute = () => {
  const tempJWTToken = localStorage.getItem('resetJWT');

  return tempJWTToken ? <Outlet /> : <Navigate to="/" />;
};

export default PrivatePasswordResetRoute;
