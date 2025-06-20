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
						to={"/about"}
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					>
						Product
					</NavLink>
					{/* <NavLink
						to={"/pricing"}
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					>
						Dotace a financovani
					</NavLink> */}
					{/* <NavLink
						to={"/contact"}
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					>
						Reference
					</NavLink> */}
					<NavLink
						to={"/contact"}
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					>
						Reference
					</NavLink>
					<NavLink
						to={"/contact"}
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
				{/* <div className="header__right-container"> */}
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
				{/* <a className="lng-select">CZ</a> */}
				{/* </div> */}
				<BurgerBtn />
				<div className="menu">
					<div>
						<p>Home</p>
						<p>About</p>
						<p>Product</p>
						<p>Contact</p>
					</div>
					<div className="socials">
						<a href="">Facebook</a>
						<a href="">Instagram</a>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
