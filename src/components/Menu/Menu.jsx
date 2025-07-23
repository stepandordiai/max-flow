import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./Menu.scss";

const Menu = () => {
	const { t } = useTranslation();

	useEffect(() => {
		const menuLinks = document.querySelectorAll(".menu__nav-link");

		menuLinks.forEach((link) => {
			link.addEventListener("click", () => {
				document
					.querySelector(".burger-2")
					.classList.remove("burger-2--active");

				document.querySelector(".menu").classList.remove("menu--active");
				document
					.querySelector(".menu__inner")
					.classList.remove("menu__inner--active");
			});
		});
	}, []);

	const inactiveMenuLink = "menu__nav-link";
	const activeMenuLink = "menu__nav-link menu__nav-link--active";

	return (
		<div className="menu">
			<div className="menu__inner">
				<nav className="menu__nav">
					<NavLink
						className={({ isActive }) =>
							isActive ? activeMenuLink : inactiveMenuLink
						}
						to={"/"}
					>
						{t("home")}
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeMenuLink : inactiveMenuLink
						}
						to={"/product"}
					>
						{t("product")}
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeMenuLink : inactiveMenuLink
						}
						to={"/how-it-works"}
					>
						{t("how_it_works_title")}
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeMenuLink : inactiveMenuLink
						}
						to={"/financing"}
					>
						{t("financing")}
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeMenuLink : inactiveMenuLink
						}
						to={"/contact"}
					>
						{t("contact_title")}
					</NavLink>
				</nav>
				<NavLink className="menu__link" to="/contact">
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
	);
};

export default Menu;
