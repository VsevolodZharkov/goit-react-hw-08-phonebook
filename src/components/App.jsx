import { Route, Routes } from 'react-router-dom';

import { ContactForm } from './ContactForm/ContactForm';
import Container from './Container/Container';
import { ToastContainer } from 'react-toastify';
import { Header } from '../pages/Header/Header'
import { Navigation } from './Navigation/Navigation';
import { NotFound } from '../pages/NotFound/NotFound';
import { Login } from '../pages/Login/Login'
import { Registred } from '../pages/Registred/Registred'
import 'react-toastify/dist/ReactToastify.css';
export const App = () => {
  return (
    <>
			<Header>
          <nav>
            <Navigation />
          </nav>
      </Header>
					<Routes>
            <Route path="/registred" element={<Registred />} />
            <Route path="/login" element={<Login />} />
						<Route path="/login" element={<ContactForm />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
      <Container title="Phone book">
        <ToastContainer />
        <ContactForm />
      </Container>
    </>
  );
};
