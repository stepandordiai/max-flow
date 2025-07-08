import { useTranslation } from "react-i18next";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import { NavLink } from "react-router-dom";
// import logoIcon2 from "/Group 214.png";
import { useEffect } from "react";
import LangSelect from "../LngSelect/LngSelect";
import "./Header.scss";

const Header = () => {
	const { t } = useTranslation();

	const inactiveLink = "header__nav-link";
	const activeLink = "header__nav-link header__nav-link--active";

	useEffect(() => {
		const windowHeight = document.documentElement.clientHeight;

		document.addEventListener("scroll", () => {
			const scrollTop = document.documentElement.scrollTop;
			const scrollHeight = document.documentElement.scrollHeight;
			const calcHeight = scrollHeight - windowHeight;

			const positionHeight = Math.min((scrollTop * 100) / calcHeight, 100);

			document.querySelector(
				".header__divider-inner"
			).style.width = `${positionHeight}%`;
		});
	}, []);
	return (
		<>
			<header className="header">
				<NavLink className="header__logo" to={"/"}>
					{/* <img width={40} src={logoIcon2} alt="MaxFlow Logo" /> */}
					<span>MaxFlow 360&deg;</span>
				</NavLink>
				<nav className="header__nav">
					<NavLink
						to={"/"}
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					>
						{t("home")}
					</NavLink>
					<NavLink
						to={"/product"}
						className={({ isActive }) =>
							isActive
								? activeLink + " header__nav-link-with-dd"
								: inactiveLink + " header__nav-link-with-dd"
						}
					>
						{t("product")}
						<div className="header__nav-link-dd">
							<p>SVJ</p>
							<p>Solaris</p>
							<p>Info</p>
						</div>
					</NavLink>
					<NavLink
						to={"/how-it-works"}
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					>
						{t("how_it_works_title")}
					</NavLink>
					<NavLink
						to={"/financing"}
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					>
						{t("financing")}
					</NavLink>
					<NavLink
						to={"/contact"}
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					>
						{t("contact_title")}
					</NavLink>
				</nav>
				<div className="header__right-container">
					<LangSelect />
					<NavLink className="header__btn" to="/contact">
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
				<div className="header__divider">
					<div className="header__divider-inner"></div>
				</div>
			</header>
		</>
	);
};

export default Header;
