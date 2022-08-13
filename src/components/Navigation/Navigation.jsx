import { NavLink } from "react-router-dom";//, useLocation

export const Navigation = () => {
	// const location = useLocation();
	return (
		<>
  		<NavLink to="/registred" className={(({isActive}) => isActive ? 'nav-link active' : 'nav-link')}>Registred</NavLink>
  		<NavLink to="/login" className={(({isActive}) => isActive ? 'nav-link active' : 'nav-link')}>Login</NavLink>
  		<NavLink to="/contacts" className={(({isActive}) => isActive ? 'nav-link active' : 'nav-link')}>Contacts</NavLink>
		</>
	)
}