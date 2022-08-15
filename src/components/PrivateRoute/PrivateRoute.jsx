import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) =>  {
  const isLogin = useSelector(getToken);
  return isLogin ? children : <Navigate to="/login" />;
}