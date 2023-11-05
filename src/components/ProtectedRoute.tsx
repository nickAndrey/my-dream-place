import { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Path from '../types/Path';

const AuthRoutes = new RegExp(
  `${Path.SignIn}|${Path.SignUp}|${Path.CreatePassword}`,
);

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation();

  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

  if (!isLoggedIn && !AuthRoutes.test(location.pathname)) {
    return <Navigate to={Path.SignIn} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
