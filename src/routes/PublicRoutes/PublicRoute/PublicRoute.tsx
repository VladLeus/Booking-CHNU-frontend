import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@shared/hooks';
import { AppRoutes } from '../../_data.ts';

const PublicRoute = () => {
  const { user } = useAppSelector((state) => state.user);

  return !user.isAuth ? <Outlet /> : <Navigate to={AppRoutes.HOME} />;
};

export default PublicRoute;
