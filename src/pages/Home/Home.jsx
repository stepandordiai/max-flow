import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import Partners from "../../components/Partners/Partners";
import Benefits from "../../components/Benefits/Benefits";
import AboutUs from "../../components/AboutUs/AboutUs";
import bgImg from "/bg2.png";
import "./Home.scss";

const Home = () => {
	const { t } = useTranslation();

	useEffect(() => {
		document.addEventListener("scroll", () => {
			const scrollTop = document.documentElement.scrollTop;
			if (scrollTop > 0) {
				document.querySelector(".scroll").classList.add("scroll--active");
			} else {
				document.querySelector(".scroll").classList.remove("scroll--active");
			}
		});
	}, []);

	return (
		<>
			<Helmet>
				<title>MaxFlow | {t("home_title")}</title>
				<link rel="canonical" href="https://maxflow.cz/" />
			</Helmet>
			<main className="home">
				<div className="home__top">
					<img className="home__bg" src={bgImg} alt="" />
					<h1 className="home__top-title">{t("home_title")}</h1>
					<div className="home__top-container">
						<h2>
							{t("home_sec_title")}{" "}
							<span style={{ fontWeight: 500 }}>MaxFlow 360°</span>
						</h2>
						<div className="home__btn-container">
							<NavLink className={"home__link"} to={"/how-it-works"}>
								{t("home_btn")}?
							</NavLink>
							<NavLink className={"home__link"} to={"/form-calculator"}>
								{t("home_sec_btn")}
							</NavLink>
						</div>
					</div>
					<div className="scroll" data-value={t("home_scroll")}></div>
				</div>
				<AboutUs />
				<Benefits />
				<Partners />
			</main>
		</>
	);
};

export default Home;
