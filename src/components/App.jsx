import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from 'redux/auth/auth-selectors';
import { getCurrentUser } from 'redux/auth/auth-operations';
import { ContactForm } from './ContactForm/ContactForm';
import Container from './Container/Container';
import Home from './Home/Home';
import { ToastContainer } from 'react-toastify';
import { Header } from '../pages/Header/Header'
import { Navigation } from './Navigation/Navigation';
import  { NotFound }  from '../pages/NotFound/NotFound';
import { LoginForm } from 'pages/Login/Login';
import { RegisterForm } from 'pages/Registred/Registred';
import {PrivateRoute} from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
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
			<Header>
            <Navigation />
      </Header>
					<Routes>
            <Route path="/registred" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
						<Route path="/login" element={<ContactForm />} />
          </Routes>
      <Container title="Phone book">
        <ContactForm />
      </Container>
    </>
  );
};
<Routes>
<Route path="/" element={<Home />} />
<Route
	path="register"
	element={
		<PublicRoute>
			<RegisterForm />
		</PublicRoute>
	}
/>
<Route
	path="login"
	element={
		<PublicRoute>
			<LoginForm />
		</PublicRoute>
	}
/>
<Route
	path="contacts"
	element={
		<PrivateRoute>
			 <ContactForm />
		</PrivateRoute>
	}
/>
<Route 
	path="*" 
	element={<NotFound />} 
/>
</Routes>