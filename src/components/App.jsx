import { Route, Routes } from 'react-router-dom';
import { Api } from './Api';
import { Register } from './User/Register';
import { SignIn } from './User/SignIn';
import { Navigation } from './Navigation/Navigation';
import { ProtectedRoute } from './ProtectedRoute';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/auth.thunk';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hook/useAuth/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { ModalWindow } from './ModalWindow/ModalWindow';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const { isRefreshing } = useAuth();

  return isRefreshing ? (
    <div>Loading</div>
  ) : (
    <div>
      <nav>
        <Navigation to="*" end />
      </nav>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <ProtectedRoute component={<Api />} redirectTo={'/sign-in'} />
              <ModalWindow />
            </>
          }
        ></Route>
        <Route
          path="/sign-in"
          element={<RestrictedRoute component={<SignIn />} />}
        ></Route>
        <Route
          path="/register"
          element={<RestrictedRoute component={<Register />} />}
        ></Route>
      </Routes>
    </div>
  );
};
