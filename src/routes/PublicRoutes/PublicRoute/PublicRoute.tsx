import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@shared/hooks';

const PublicRoute = () => {
  const { user } = useAppSelector((state) => state.user);

  return !user.isAuth ? <Outlet /> : <Navigate to="/home" />;
};

export default PublicRoute;
