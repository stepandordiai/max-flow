import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import navLinksData from "./../../data/nav-links-data.json";
import LngSelect from "../LngSelect/LngSelect";
import Container from "../Container/Container";
import logo from "/max-flow-logo-v1.png";
import "./Header.scss";

const Header = () => {
	const { t } = useTranslation();

	const { pathname } = useLocation();

	const [isMenuActive, setIsMenuActive] = useState(false);
	const [headerBlur, setHeaderBlur] = useState(false);
	const [calcScrollHeight, setCalcScrollHeight] = useState(0);

	// FIXME:
	useEffect(() => {
		setIsMenuActive(false);
	}, [pathname, setIsMenuActive]);

	useEffect(() => {
		const handleProgressBar = () => {
			const pageHeight = document.documentElement.scrollHeight;
			const windowHeight = document.documentElement.clientHeight;
			const calcHeight = pageHeight - windowHeight;
			const scrollTop = document.documentElement.scrollTop;
			setCalcScrollHeight(Math.min((scrollTop * 100) / calcHeight, 100));
		};

		document.addEventListener("scroll", handleProgressBar);

		return () => document.removeEventListener("scroll", handleProgressBar);
	}, [pathname]);

	useEffect(() => {
		const handleHeaderOnScroll = () => {
			if (document.documentElement.scrollTop > 0) {
				setHeaderBlur(true);
			} else {
				setHeaderBlur(false);
			}
		};

		const closeMenuOnEsc = (e) => {
			if (e.key === "Escape") setIsMenuActive(false);
		};

		window.addEventListener("scroll", handleHeaderOnScroll);
		document.addEventListener("keydown", closeMenuOnEsc);

		return () => {
			window.removeEventListener("scroll", handleHeaderOnScroll);
			document.removeEventListener("keydown", closeMenuOnEsc);
		};
	}, []);

	function toggleBurgerBtn() {
		setIsMenuActive((prev) => !prev);
	}

	return (
		<>
			<header
				className={`header ${
					isMenuActive || headerBlur ? "header--active" : ""
				}`}
			>
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
							{navLinksData.map((link, index) => {
								return (
									<NavLink
										key={index}
										className={({ isActive }) =>
											`header__nav-link ${
												isActive ? "header__nav-link--active" : ""
											}`
										}
										to={link.path}
									>
										{t(link.name)}
									</NavLink>
								);
							})}
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
							<div
								style={{ width: `${calcScrollHeight}%` }}
								className="header__progress-divider-inner"
							></div>
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
						{navLinksData.map((link, index) => {
							return (
								<NavLink
									key={index}
									onClick={() => setIsMenuActive(false)}
									className={({ isActive }) =>
										`menu__nav-link ${isActive ? "menu__nav-link--active" : ""}`
									}
									to={link.path}
								>
									{t(link.name)}
								</NavLink>
							);
						})}
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
