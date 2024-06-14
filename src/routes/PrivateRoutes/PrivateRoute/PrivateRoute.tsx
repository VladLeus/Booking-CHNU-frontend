import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@shared/hooks';
import { AppRoutes } from '../../_data.ts';

const PrivateRoute = () => {
  const { user } = useAppSelector((state) => state.user);

  return user.isAuth ? <Outlet /> : <Navigate to={AppRoutes.SIGN_UP} />;
};

export default PrivateRoute;
