import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
	const { t } = useTranslation();

	useEffect(() => {
		const footerNavBtn = document.querySelectorAll(
			`.${styles["footer__nav-btn"]}`
		);
		const footerNavBtnIcon = document.querySelectorAll(
			`.${styles["footer__nav-btn-icon"]}`
		);
		const footerNavWrapper = document.querySelectorAll(
			`.${styles["footer__nav-wrapper"]}`
		);

		footerNavBtn.forEach((btn, index) => {
			btn.addEventListener("click", () => {
				footerNavWrapper[index].classList.toggle(
					styles["footer__nav-wrapper--active"]
				);
				footerNavBtnIcon[index].classList.toggle(
					styles["footer__nav-btn-icon--active"]
				);
			});
		});
	}, []);

	return (
		<footer className={styles["footer"]}>
			<div className={styles["footer__top"]}>
				<div className={styles["footer__nav-container"]}>
					<button className={styles["footer__nav-btn"]}>
						<span className={styles["footer__nav-title"]}>Navigation</span>
						<span className={styles["footer__nav-btn-icon"]}></span>
					</button>
					<div className={styles["footer__nav-wrapper"]}>
						<nav className={styles["footer__nav"]}>
							<NavLink className={styles["footer__nav-link"]}>
								{t("home")}
							</NavLink>
							<NavLink className={styles["footer__nav-link"]}>
								{t("product")}
							</NavLink>
							<NavLink className={styles["footer__nav-link"]}>
								{t("how_it_works")}
							</NavLink>
							<NavLink className={styles["footer__nav-link"]}>
								{t("financing")}
							</NavLink>
							<NavLink className={styles["footer__nav-link"]}>
								{t("contact")}
							</NavLink>
						</nav>
					</div>
				</div>
				<div className={styles["footer__nav-container"]}>
					<button className={styles["footer__nav-btn"]}>
						<span className={styles["footer__nav-title"]}>{t("home")}</span>
						<span className={styles["footer__nav-btn-icon"]}></span>
					</button>
					<div className={styles["footer__nav-wrapper"]}>
						<nav className={styles["footer__nav"]}>
							<HashLink
								to="/#about-us"
								smooth
								className={styles["footer__nav-link"]}
							>
								About us in numbers
							</HashLink>
							<HashLink
								to="/#benefits"
								smooth
								className={styles["footer__nav-link"]}
							>
								Advantages
							</HashLink>
							<HashLink
								to={"/#process"}
								smooth
								className={styles["footer__nav-link"]}
							>
								How system works
							</HashLink>
							<HashLink
								to={"/#partners"}
								smooth
								className={styles["footer__nav-link"]}
							>
								Partners
							</HashLink>
						</nav>
					</div>
				</div>
				<div className={styles["footer__nav-container"]}>
					<button className={styles["footer__nav-btn"]}>
						<span className={styles["footer__nav-title"]}>{t("product")}</span>
						<span className={styles["footer__nav-btn-icon"]}></span>
					</button>
					<div className={styles["footer__nav-wrapper"]}>
						<nav className={styles["footer__nav"]}>
							<HashLink
								to={"/product#product-section-1"}
								smooth
								className={styles["footer__nav-link"]}
							>
								Why MaxFlow 360°
							</HashLink>
							<HashLink
								to={"/product#product-section-2"}
								smooth
								className={styles["footer__nav-link"]}
							>
								MaxFlow 360° Cloud Platform
							</HashLink>
						</nav>
					</div>
				</div>
				<div className={styles["footer__top-contact-us-container"]}>
					<div>
						<p className={styles["footer__nav-title"]}>Call us</p>
						<nav className={styles["footer__nav"]}>
							<NavLink className={styles["footer__nav-link"]}>
								+420 722 001 016
							</NavLink>
						</nav>
					</div>
					<div>
						<p className={styles["footer__nav-title"]}>Write to us</p>
						<nav className={styles["footer__nav"]}>
							<NavLink className={styles["footer__nav-link"]}>
								info@fvestavby.cz
							</NavLink>
						</nav>
					</div>
					<div>
						<p className={styles["footer__nav-title"]}>Visit our office</p>
						<nav className={styles["footer__nav"]}>
							<NavLink className={styles["footer__nav-link"]}>
								Pod Hroby 271 Kolín IV
							</NavLink>
						</nav>
					</div>
				</div>
			</div>
			<div>
				<p className={styles["footer__nav-title"]}>Follow us</p>
				<div className={styles["footer__middle-socials"]}>
					<a
						className={styles["footer__socials-link"]}
						href="https://www.facebook.com/people/Fve-stavby/61576683235805/"
						target="_blank"
					>
						<i className="fa-brands fa-facebook-f"></i>
						<span>Facebook</span>
					</a>
					<a
						className={styles["footer__socials-link"]}
						href="https://www.instagram.com/fvestavby/#"
						target="_blank"
					>
						<i className="fa-brands fa-instagram"></i>
						<span>Instagram</span>
					</a>
					<a
						className={styles["footer__socials-link"]}
						href="https://www.tiktok.com/@fvestavby"
						target="_blank"
					>
						<i className="fa-brands fa-tiktok"></i>
						<span>TikTok</span>
					</a>
				</div>
			</div>
			<div className={styles["footer__bottom"]}>
				<div>
					<p>&copy; 2025 MaxFlow</p>
					<p>All rights reserved</p>
				</div>
				<p className="footer__creator">
					Site by{" "}
					<a
						className={styles["footer__creator-link"]}
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
