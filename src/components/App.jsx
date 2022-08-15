import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from 'redux/auth/auth-selectors';
import { getCurrentUser } from 'redux/auth/auth-operations';
import { ContactForm } from './ContactForm/ContactForm';
import { Home } from './Home/Home';
import { ToastContainer } from 'react-toastify';
import { Navigation } from './Navigation/Navigation';
import { NotFound } from '../pages/NotFound/NotFound';
import { Login } from 'pages/Login/Login';
import { Registered } from 'pages/Registred/Registred';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import 'react-toastify/dist/ReactToastify.css';
export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch, token]);
  return (
    <>
      <ToastContainer />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
				<Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Registered />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
      
				<Route path="*" element={
					<PublicRoute>
						<NotFound />
					</PublicRoute>
				} />
      </Routes>
    </>
  );
};
