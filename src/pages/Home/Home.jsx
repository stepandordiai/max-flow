import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import Partners from "../../components/Partners/Partners";
import Benefits from "../../components/Benefits/Benefits";
import AboutUs from "../../components/AboutUs/AboutUs";
import Calculator from "../../components/Calculator/Calculator";
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
			<Helmet>{/* <title>{t("home_title")} | MaxFlow</title> */}</Helmet>
			<main className="home">
				<div className="home__top">
					<h1 className="home__top-title">
						{t("home_title")} MaxFlow 360 &deg;
					</h1>
					<div className="home__top-container">
						<h2 className="home__top-container-title">{t("home_sec_title")}</h2>
						<div className="home__top-btn-container">
							<NavLink className="home__link" to={"/how-it-works"}>
								{t("how_it_works_title")}?
							</NavLink>
							<NavLink className="home__link" to={"/form-calculator"}>
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
					<img
						className="home__bg"
						src="https://www.ikomunita.cz/templates/default/img/Bytovy_dum.svg"
						alt=""
					/>
					<div
						className="home__top-scroll"
						data-value={t("scroll_to_explore")}
					></div>
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
