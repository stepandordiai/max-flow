import { NavLink } from "react-router-dom";
import "./Menu.scss";
import { useEffect } from "react";

const Menu = () => {
	useEffect(() => {
		const menuLinks = document.querySelectorAll(".menu__link");

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

	const inactiveMenuLink = "menu__link";
	const activeMenuLink = "menu__link menu__link--active";

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
						Home
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeMenuLink : inactiveMenuLink
						}
						to={"/product"}
					>
						Product
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeMenuLink : inactiveMenuLink
						}
						to={"/reference"}
					>
						Reference
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeMenuLink : inactiveMenuLink
						}
						to={"/blog"}
					>
						Blog
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeMenuLink : inactiveMenuLink
						}
						to={"/contact"}
					>
						Contact
					</NavLink>
				</nav>
				<div className="socials">
					<a href="">Facebook</a>
					<a href="">Instagram</a>
				</div>
			</div>
		</div>
	);
};

export default Menu;
