import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLogged } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import Style from './Navigation.module.css';

export const Navigation = () => {
  const isLogin = useSelector(getIsLogged);
  const dispatch = useDispatch();

  const handlerLogout = () => {
    dispatch(logOut());
  };

  return (
    <header className={Style.header}>
      <div className={Style.home_wrapper}>
        <NavLink
          className={({ isActive }) => (isActive ? Style.active_link : Style.link_nav)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? Style.active_link : Style.link_nav)}
          to="/contacts"
        >
          Contacts
        </NavLink>
      </div>
      {isLogin && (
        <div className={Style.logged_box}>
          <div className={Style.user_box}>
          </div>
          <Button
            sx={{ height: '30px' }}
            onClick={handlerLogout}
            variant="contained"
            endIcon={<LogoutIcon />}
          >
            Log Out
          </Button>
        </div>
      )}
      {!isLogin && (
        <div className={Style.register_box}>
          <NavLink
            className={({ isActive }) =>
              isActive ? Style.active_link : Style.link_nav
            }
            to="/register"
          >
            Sign in
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? Style.active_link : Style.link_nav
            }
            to="/login"
          >
            Log in
          </NavLink>
        </div>
      )}
    </header>
  );
};

