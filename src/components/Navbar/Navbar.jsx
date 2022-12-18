import s from './Navbar.module.css';
// console.log(s);
import {NavLink} from "react-router-dom";

const setActive = (active) => active.isActive ? s.active : s.item;
// const setActive = ({isActive}) => isActive ? s.active : s.item;
// <NavLink to="/profile" className={active => active.isActive ? s.active : s.item}>Profile</NavLink>

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink to="/profile" className={setActive}>Profile</NavLink>
				{/*<NavLink to="/profile" className={active => active.isActive ? s.active : s.item}>Profile</NavLink>*/}
			</div>
			<div className={s.item}>
				<NavLink to="/dialogs/" className={setActive}>Messages</NavLink>
				{/*<NavLink to="/dialogs" className={active => active.isActive ? s.active : s.item}>Messages</NavLink>*/}
			</div>
			<div className={s.item}>
				<NavLink to="/news" className={setActive}>News</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/music" className={setActive}>Music</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/settings" className={setActive}>Settings</NavLink>
			</div>
		</nav>
	);
}

export default Navbar;
