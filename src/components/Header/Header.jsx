import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LngSelect from "../LngSelect/LngSelect";
import Container from "../Container/Container";
import logo from "/max-flow-logo-v1.png";
import "./Header.scss";

const Header = () => {
	const { t } = useTranslation();

	const { pathname } = useLocation();

	const [isMenuActive, setIsMenuActive] = useState(false);

	// TODO:
	useEffect(() => {
		setIsMenuActive(false);
	}, [pathname, setIsMenuActive]);

	// TODO:
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") setIsMenuActive(false);
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, []);

	const inactiveLink = "header__nav-link";
	const activeLink = "header__nav-link header__nav-link--active";

	const inactiveMenuLink = "menu__nav-link";
	const activeMenuLink = "menu__nav-link menu__nav-link--active";

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

	useEffect(() => {
		const header = document.querySelector(".header");

		window.addEventListener("scroll", () => {
			if (document.documentElement.scrollTop > 0) {
				header.classList.add("header--active");
			} else {
				header.classList.remove("header--active");
			}
		});
	}, []);

	function toggleBurgerBtn() {
		setIsMenuActive((prev) => !prev);
	}

	return (
		<>
			<header className={isMenuActive ? "header header--active" : "header"}>
				<Container>
					<div className="header-inner">
						<NavLink
							onClick={() => setIsMenuActive(false)}
							className="header__logo"
							to="/"
						>
							<img src={logo} width={25} height={25} alt="" />
							<span>MaxFlow 360&deg;</span>
						</NavLink>
						<nav className="header__nav">
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? activeLink : inactiveLink
								}
							>
								{t("home")}
							</NavLink>
							<NavLink
								to="/product"
								className={({ isActive }) =>
									isActive ? activeLink : inactiveLink
								}
							>
								{t("product_title")}
							</NavLink>
							<NavLink
								to="/how-it-works"
								className={({ isActive }) =>
									isActive ? activeLink : inactiveLink
								}
							>
								{t("how_it_works_title")}
							</NavLink>
							<NavLink
								to="/financing"
								className={({ isActive }) =>
									isActive ? activeLink : inactiveLink
								}
							>
								{t("financing")}
							</NavLink>
							<NavLink
								to="/contact"
								className={({ isActive }) =>
									isActive ? activeLink : inactiveLink
								}
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
							<div
								onClick={toggleBurgerBtn}
								className={
									isMenuActive ? "burger-btn burger-btn--active" : "burger-btn"
								}
							></div>
						</div>
						<div className="header__progress-divider">
							<div className="header__progress-divider-inner"></div>
						</div>
					</div>
				</Container>
			</header>
			<div className={isMenuActive ? "menu menu--active" : "menu"}>
				<div
					className={
						isMenuActive ? "menu__inner menu__inner--active" : "menu__inner"
					}
				>
					<nav className="menu__nav">
						<NavLink
							onClick={() => setIsMenuActive(false)}
							className={({ isActive }) =>
								isActive ? activeMenuLink : inactiveMenuLink
							}
							to={"/"}
						>
							{t("home")}
						</NavLink>
						<NavLink
							onClick={() => setIsMenuActive(false)}
							className={({ isActive }) =>
								isActive ? activeMenuLink : inactiveMenuLink
							}
							to={"/product"}
						>
							{t("product_title")}
						</NavLink>
						<NavLink
							onClick={() => setIsMenuActive(false)}
							className={({ isActive }) =>
								isActive ? activeMenuLink : inactiveMenuLink
							}
							to={"/how-it-works"}
						>
							{t("how_it_works_title")}
						</NavLink>
						<NavLink
							onClick={() => setIsMenuActive(false)}
							className={({ isActive }) =>
								isActive ? activeMenuLink : inactiveMenuLink
							}
							to={"/financing"}
						>
							{t("financing")}
						</NavLink>
						<NavLink
							onClick={() => setIsMenuActive(false)}
							className={({ isActive }) =>
								isActive ? activeMenuLink : inactiveMenuLink
							}
							to={"/contact"}
						>
							{t("contact_title")}
						</NavLink>
					</nav>
					<NavLink
						onClick={() => setIsMenuActive(false)}
						className="menu__link"
						to="/form-calculator"
					>
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
				</div>
			</div>
		</>
	);
};

export default Header;
