import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@shared/hooks';

const PrivateRoute = () => {
  const { isAuth } = useAppSelector((state) => state.user);

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
