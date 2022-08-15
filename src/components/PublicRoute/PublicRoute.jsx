import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const isLogin = useSelector(getToken);
  return isLogin ? <Navigate to="/contacts" /> : children;
}