import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import "./Footer.scss";

const Footer = () => {
	const { t } = useTranslation();

	useEffect(() => {
		const footerNavBtn = document.querySelectorAll(".footer__nav-btn");
		const footerNavBtnIcon = document.querySelectorAll(".footer__nav-btn-icon");
		const footerNavWrapper = document.querySelectorAll(".footer__nav-wrapper");

		footerNavBtn.forEach((btn, index) => {
			btn.addEventListener("click", () => {
				footerNavWrapper[index].classList.toggle("footer__nav-wrapper--active");
				footerNavBtnIcon[index].classList.toggle(
					"footer__nav-btn-icon--active"
				);
			});

			document.addEventListener("click", (e) => {
				if (e.target !== btn) {
					footerNavWrapper[index].classList.remove(
						"footer__nav-wrapper--active"
					);
					footerNavBtnIcon[index].classList.remove(
						"footer__nav-btn-icon--active"
					);
				}
			});
		});
	}, []);

	const inactiveFooterNavLink = "footer__nav-link";
	const activeFooterNavLink = "footer__nav-link footer__nav-link--active";

	return (
		<footer className="footer">
			<div className="footer__top">
				<div className="footer__nav-container">
					<button className="footer__nav-btn">
						<span className="footer__nav-title">{t("footer.navigation")}</span>
						<span className="footer__nav-btn-icon"></span>
					</button>
					<div className="footer__nav-wrapper">
						<nav className="footer__nav">
							<NavLink
								className={({ isActive }) =>
									isActive ? activeFooterNavLink : inactiveFooterNavLink
								}
								to="/"
							>
								{t("home")}
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeFooterNavLink : inactiveFooterNavLink
								}
								to="/product"
							>
								{t("product")}
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeFooterNavLink : inactiveFooterNavLink
								}
								to="/how-it-works"
							>
								{t("how_it_works_title")}
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeFooterNavLink : inactiveFooterNavLink
								}
								to="/financing"
							>
								{t("financing")}
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeFooterNavLink : inactiveFooterNavLink
								}
								to="/contact"
							>
								{t("contact_title")}
							</NavLink>
						</nav>
					</div>
				</div>
				<div className="footer__nav-container">
					<button className="footer__nav-btn">
						<span className="footer__nav-title">{t("home")}</span>
						<span className="footer__nav-btn-icon"></span>
					</button>
					<div className="footer__nav-wrapper">
						<nav className="footer__nav">
							<HashLink to="/#about-us" smooth className="footer__nav-link">
								{t("about_us.title")}
							</HashLink>
							<HashLink to="/#benefits" smooth className="footer__nav-link">
								{t("benefits.title")}
							</HashLink>
							<HashLink to="/#calculator" smooth className="footer__nav-link">
								{t("calculator.title")}
							</HashLink>
							<HashLink to={"/#partners"} smooth className="footer__nav-link">
								{t("partners.title")}
							</HashLink>
						</nav>
					</div>
				</div>
				<div className="footer__nav-container">
					<button className="footer__nav-btn">
						<span className="footer__nav-title">{t("product")}</span>
						<span className="footer__nav-btn-icon"></span>
					</button>
					<div className="footer__nav-wrapper">
						<div className="footer__nav">
							<HashLink
								to="/product#product-section-1"
								smooth
								className="footer__nav-link"
							>
								Why MaxFlow 360°
							</HashLink>
							<HashLink
								to="/product#product-section-2"
								smooth
								className="footer__nav-link"
							>
								MaxFlow 360° Cloud Platform
							</HashLink>
						</div>
					</div>
				</div>
				<div className="footer__top-contact-us-container">
					<div>
						<p style={{ marginBottom: 5 }} className="footer__nav-title">
							{t("contact.call_us")}
						</p>
						<div className="footer__nav">
							<a className="footer__nav-link" href="tel:+420728803703">
								+420 728 803 703
							</a>
						</div>
					</div>
					<div>
						<p style={{ marginBottom: 5 }} className="footer__nav-title">
							{t("contact.chat_to_us")}
						</p>
						<a className="footer__nav-link" href="mailto:info@fvestavby.cz">
							info@fvestavby.cz
						</a>
					</div>
					<div>
						<p style={{ marginBottom: 5 }} className="footer__nav-title">
							{t("contact.visit_us")}
						</p>
						<a
							className="footer__nav-link"
							href="https://maps.app.goo.gl/UBXCPbrrCNxUSXNY8"
							target="_blank"
						>
							Pod Hroby 271 Kolín IV
						</a>
					</div>
				</div>
			</div>
			<div>
				<p style={{ marginBottom: 5 }} className="footer__nav-title">
					{t("contact.social_media")}
				</p>
				<div className="footer__middle-socials">
					<a
						className="footer__socials-link"
						href="https://www.facebook.com/profile.php?id=61576683235805"
						target="_blank"
					>
						<i className="fa-brands fa-facebook-f"></i>
						<span>Facebook</span>
					</a>
					<a
						className="footer__socials-link"
						href="https://www.instagram.com/fvestavby/"
						target="_blank"
					>
						<i className="fa-brands fa-instagram"></i>
						<span>Instagram</span>
					</a>
					<a
						className="footer__socials-link"
						href="https://www.tiktok.com/@fvestavby"
						target="_blank"
					>
						<i className="fa-brands fa-tiktok"></i>
						<span>TikTok</span>
					</a>
				</div>
			</div>
			<div className="footer__bottom">
				<div>
					<p>&copy; 2025 MaxFlow 360&deg;</p>
					<p>{t("footer.all_rights_reserved")}</p>
				</div>
				<p className="footer__creator">
					Site by{" "}
					<a
						className="footer__creator-link"
						href="https://heeeyooo.studio/"
						target="_blank"
					>
						heeeyooo studio
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
