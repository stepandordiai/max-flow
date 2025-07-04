import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import ContactUs from "../../components/ContactUs/ContactUs";
import "./HowItWorks.scss";

const HowItWorks = () => {
	const { t } = useTranslation();

	useEffect(() => {
		document.addEventListener("scroll", () => {
			const conic = document.querySelector(".process");

			const conicInner = document.querySelector(".process__inner");

			const rect = conic.getBoundingClientRect();
			const scrollRange = window.innerHeight * 2; // how much distance the animation takes
			const triggerPoint = window.innerHeight / 2; // when to start

			if (rect.top <= triggerPoint + scrollRange && rect.bottom >= 0) {
				const distanceScrolled = triggerPoint - rect.top;
				const progress = Math.min(
					Math.max(distanceScrolled / scrollRange, 0),
					1
				);
				const percent = progress * 100;
				conicInner.style.height = `${percent}%`;
			}
		});

		document.querySelectorAll(".process__card").forEach((card) => {
			document.addEventListener("scroll", () => {
				const cardRect = card.getBoundingClientRect();
				if (cardRect.top < window.innerHeight / 2) {
					card.classList.add("process__card--active");
				} else {
					card.classList.remove("process__card--active");
				}
			});
		});
	}, []);

	useEffect(() => {
		document.addEventListener("scroll", () => {
			const scrollTop = document.documentElement.scrollTop;
			if (scrollTop > 0) {
				document
					.querySelector(".how-it-works__scroll")
					.classList.add("how-it-works__scroll--active");
			} else {
				document
					.querySelector(".how-it-works__scroll")
					.classList.remove("how-it-works__scroll--active");
			}
		});
	}, []);
	return (
		<>
			<Helmet>
				<title>MaxFlow | {t("how_it_works_title")}</title>
				<link rel="canonical" href="https://maxflow.cz/how-it-works" />
			</Helmet>
			<div className="how-it-works">
				<div>
					<div className="how-it-works__top">
						<h2 className="process__title">{t("how_it_works_title")}</h2>
					</div>
					<div className="process__outer" id="process">
						<div className="process__outer-bottom">
							<a href="#process" className="how-it-works__scroll">
								{t("scroll_to_explore")}
							</a>
						</div>

						<div className="process__card process__card1">
							<p>{t("how_it_works.card1_title")}</p>
							{/* <div
							style={{
								width: "100%",
								borderBottom: "3px dashed white",
								marginBottom: 10,
								marginTop: 10,
							}}
						></div> */}
							<p>{t("how_it_works.card1_sec_title")}.</p>
						</div>
						<div className="process__card process__card2">
							<p>{t("how_it_works.card2_title")}</p>
							{/* <div
							style={{
								width: "100%",
								borderBottom: "3px dashed white",
								marginBottom: 10,
								marginTop: 10,
							}}
						></div> */}
							<p>{t("how_it_works.card2_sec_title")}.</p>
						</div>
						<div className="process__card process__card3">
							<p>{t("how_it_works.card3_title")}</p>
							{/* <div
							style={{
								width: "100%",
								borderBottom: "3px dashed white",
								marginBottom: 10,
								marginTop: 10,
							}}
						></div> */}
							<p>{t("how_it_works.card3_sec_title")}.</p>
						</div>
						<div className="process__card process__card4">
							<p>{t("how_it_works.card4_title")}</p>
							{/* <div
							style={{
								width: "100%",
								borderBottom: "3px dashed white",
								marginBottom: 10,
								marginTop: 10,
							}}
						></div> */}
							<p>{t("how_it_works.card4_sec_title")}.</p>
						</div>
						<div className="process">
							<div className="process__inner"></div>
						</div>
					</div>
				</div>
				<ContactUs>
					<p className="contact-us__title">
						Want to know how much you’ll save?
					</p>
					<div>
						<NavLink className="contact-us__link" to={"/form-calculator"}>
							<span>Use our quick savings calculator</span>
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
				</ContactUs>
			</div>
		</>
	);
};

export default HowItWorks;
