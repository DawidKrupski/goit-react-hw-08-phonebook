import { useAuth } from 'hook/useAuth/useAuth';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component, redirectTo = '/phonebook' }) => {
  const { isAuthorized, isRefreshing } = useAuth();
  const shouldRedirect = !isAuthorized && !isRefreshing;

  return shouldRedirect ? component : <Navigate to={redirectTo} />;
};
