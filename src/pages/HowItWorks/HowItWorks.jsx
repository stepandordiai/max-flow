import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import ContactUs from "../../components/ContactUs/ContactUs";
import { HashLink } from "react-router-hash-link";
import animation from "/audit.png";
import animation2 from "/accord.png";
import animation3 from "/maintenance.png";
import animation4 from "/piggy-bank.png";
import img from "/img.png";
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

	return (
		<>
			<Helmet>
				<title>{t("how_it_works_title")} | MaxFlow 360&deg;</title>
			</Helmet>
			<main>
				<div className="how-it-works__top">
					<div>
						<h1 className="how-it-works__title">{t("how_it_works_title")}</h1>
						<h2 className="how-it-works__top-title">
							{t("how_it_works.title")} MaxFlow 360°
						</h2>
					</div>
					<div
						style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
					>
						<div style={{ height: "100%", position: "relative" }}>
							<img className="how-it-works__img" src={img} alt="" />
						</div>
						<div className="how-it-works__top-container">
							<p className="how-it-works__top-container-title">
								{t("how_it_works.desc")}
							</p>
							<div className="how-it-works__top-btn-container">
								<HashLink to="#process" smooth className="how-it-works__link">
									{t("how_it_works.read_more")}
								</HashLink>
								<NavLink className="how-it-works__link" to="/form-calculator">
									<span>{t("form_calculator.title")}</span>
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
					</div>
				</div>
				<div className="process-container">
					<div className="process__top">
						<h2 className="process__title" id="process">
							{t("process.title")}
						</h2>
					</div>
					<div className="process__outer">
						<div className="process__card process__card1">
							<p>{t("process.card1_title")}</p>
							<div style={{ alignSelf: "flex-end", textAlign: "end" }}>
								<img
									width={100}
									height={100}
									src={animation}
									alt=""
									loading="lazy"
								/>
								<div style={{ marginTop: 10 }}>{t("process.card1_desc")}.</div>
							</div>
						</div>
						<div className="process__card process__card2">
							<p>{t("process.card2_title")}</p>
							<div style={{ alignSelf: "flex-end", textAlign: "end" }}>
								<img
									width={100}
									height={100}
									src={animation2}
									alt=""
									loading="lazy"
								/>
								<div style={{ marginTop: 10 }}>{t("process.card2_desc")}.</div>
							</div>
						</div>
						<div className="process__card process__card3">
							<p>{t("process.card3_title")}</p>
							<div style={{ alignSelf: "flex-end", textAlign: "end" }}>
								<img
									width={100}
									height={100}
									src={animation3}
									alt=""
									loading="lazy"
								/>
								<div style={{ marginTop: 10 }}>{t("process.card3_desc")}.</div>
							</div>
						</div>
						<div className="process__card process__card4">
							<p>{t("process.card4_title")}</p>
							<div style={{ alignSelf: "flex-end", textAlign: "end" }}>
								<img
									width={100}
									height={100}
									src={animation4}
									alt=""
									loading="lazy"
								/>
								<div style={{ marginTop: 10 }}>{t("process.card4_desc")}.</div>
							</div>
						</div>
						<div className="process">
							<div className="process__inner"></div>
						</div>
					</div>
				</div>
				<ContactUs>
					<p className="contact-us__title">Chcete vědět, kolik ušetřite?</p>
					<div>
						<HashLink className="contact-us__link" to="/#calculator">
							<span>Spočítejte si to v naší kalkulačce</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="20px"
								viewBox="0 -960 960 960"
								width="20px"
								fill="#ffffff"
							>
								<path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
							</svg>
						</HashLink>
					</div>
				</ContactUs>
			</main>
		</>
	);
};

export default HowItWorks;
