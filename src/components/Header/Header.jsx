import BurgerBtn from "../BurgerBtn/BurgerBtn";
import { NavLink } from "react-router-dom";
import logoIcon2 from "/Group 214.png";
import "./Header.scss";

const Header = () => {
	const inactiveLink = "header__nav-link";
	const activeLink = "header__nav-link header__nav-link--active";
	return (
		<>
			<header className="header">
				<NavLink className="header__logo" to={"/"}>
					<img width={40} src={logoIcon2} alt="" />
					<span>MaxFlow</span>
				</NavLink>
				<nav className="header__nav">
					<NavLink
						to={"/"}
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					>
						Home
					</NavLink>
					<NavLink
						to={"/product"}
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					>
						Product
					</NavLink>
					<NavLink
						to={"/reference"}
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					>
						Reference
					</NavLink>
					<NavLink
						to={"/blog"}
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					>
						Blog
					</NavLink>
					<NavLink
						to={"/contact"}
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					>
						Contact
					</NavLink>
				</nav>
				<a className="header__btn" href="">
					<span>Try Flowbox</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="20px"
						viewBox="0 -960 960 960"
						width="20px"
						fill="#ffffff"
					>
						<path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
					</svg>
				</a>
				<BurgerBtn />
				<div className="header__divider"></div>
			</header>
		</>
	);
};

export default Header;
