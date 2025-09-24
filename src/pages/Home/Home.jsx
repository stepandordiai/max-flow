import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import Partners from "../../components/Partners/Partners";
import Benefits from "../../components/Benefits/Benefits";
import AboutUs from "../../components/AboutUs/AboutUs";
import Calculator from "../../components/Calculator/Calculator";
import video from "/video.mp4";
import macbookImg from "/macbook.png";
import "./Home.scss";

const Home = () => {
	const { t } = useTranslation();

	useEffect(() => {
		document.addEventListener("scroll", () => {
			const scrollTop = document.documentElement.scrollTop;
			const homeTopScroll = document.querySelector(".home__top-scroll");
			if (scrollTop > 0) {
				homeTopScroll.classList.add("home__top-scroll--active");
			} else {
				homeTopScroll.classList.remove("home__top-scroll--active");
			}
		});
	}, []);

	return (
		<>
			<Helmet>
				<title>Maximize your solar flow now | MaxFlow 360&deg;</title>
			</Helmet>
			<main className="home">
				<div className="home__top">
					<h1 className="home__top-title">
						{t("home_title")} MaxFlow 360&deg;
					</h1>
					<div className="home__top-container">
						<h2 className="home__top-container-title">{t("home_sec_title")}</h2>
						<div className="home__top-btn-container">
							<NavLink className="home__link" to="/how-it-works">
								{t("how_it_works_title")}?
							</NavLink>
							<NavLink className="home__link" to="/form-calculator">
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
					<div
						className="home__top-scroll"
						data-value={t("scroll_to_explore")}
					></div>
					<video
						className="home-top__video"
						loop
						playsInline
						autoPlay
						muted
						src={video}
					></video>
				</div>
				<div className="technology">
					<h2 className="technology__title">Technologie</h2>
					<p className="technology__desc">
						Komplexní technologické centrum s MaxFlow Intelligence Systemem
					</p>
					<img src={macbookImg} alt="" loading="lazy" />
					<div className="technology__demo">
						<p className="contact-us__title">Vyzkoušejte si demo dashboardu</p>
						<div>
							<form
								className="product__demo-form"
								action="mailto:info@fvestavby.cz"
							>
								<input
									className="product__demo-input"
									type="email"
									placeholder="example@company.com"
								/>
								<button type="submit">Send</button>
							</form>
							<p>Zadejte e-mail a pošleme vám přístup na 24 hodin.</p>
						</div>
					</div>
				</div>
				<AboutUs />
				<Benefits />
				<Calculator />
				<Partners />
			</main>
		</>
	);
};

export default Home;
