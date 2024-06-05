import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@shared/hooks';

const PrivateRoute = () => {
  const { user } = useAppSelector((state) => state.user);

  return user.isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
