import { useAuth } from 'hook/useAuth/useAuth';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ component, redirectTo = '/' }) => {
  const { isAuthorized, isRefreshing } = useAuth();
  const shouldRedirect = isAuthorized && !isRefreshing;

  return shouldRedirect ? component : <Navigate to={redirectTo} />;
};
