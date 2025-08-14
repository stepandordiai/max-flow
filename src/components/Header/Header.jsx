import { useTranslation } from "react-i18next";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LngSelect from "../LngSelect/LngSelect";
import logo from "/max-flow-logo-v1.png";
import "./Header.scss";

const Header = () => {
	const { t } = useTranslation();

	const { pathname } = useLocation();

	const inactiveLink = "header__nav-link";
	const activeLink = "header__nav-link header__nav-link--active";

	useEffect(() => {
		let positionHeight = 0;
		const handleHeaderProgress = () => {
			const scrollHeight = document.documentElement.scrollHeight;
			const windowHeight = document.documentElement.clientHeight;
			const calcHeight = scrollHeight - windowHeight;
			const scrollTop = document.documentElement.scrollTop;
			positionHeight = Math.min((scrollTop * 100) / calcHeight, 100);
			const progressBar = document.querySelector(
				".header__progress-divider-inner"
			);
			progressBar.style.width = `${positionHeight}%`;
		};

		document.addEventListener("scroll", handleHeaderProgress);

		return () => {
			document.removeEventListener("scroll", handleHeaderProgress);
		};
	}, [pathname]);
	return (
		<>
			<header className="header">
				<NavLink className="header__logo" to="/">
					<img src={logo} width={25} height={25} alt="" />
					<span>MaxFlow 360&deg;</span>
				</NavLink>
				<nav className="header__nav">
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					>
						{t("home")}
					</NavLink>
					<NavLink
						to="/product"
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					>
						{t("product")}
					</NavLink>
					<NavLink
						to="/how-it-works"
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					>
						{t("how_it_works_title")}
					</NavLink>
					<NavLink
						to="/financing"
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					>
						{t("financing")}
					</NavLink>
					<NavLink
						to="/contact"
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					>
						{t("contact_title")}
					</NavLink>
				</nav>
				<div className="header__right-container">
					<LngSelect />
					<NavLink className="header__btn" to="/form-calculator">
						<span>{t("want_a_quote")}</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="20px"
							viewBox="0 -960 960 960"
							width="20px"
							fill="#ffffff"
						>
							<path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
						</svg>
					</NavLink>
					<BurgerBtn />
				</div>
				<div className="header__progress-divider">
					<div className="header__progress-divider-inner"></div>
				</div>
			</header>
		</>
	);
};

export default Header;
