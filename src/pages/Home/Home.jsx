import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import Partners from "../../components/Partners/Partners";
import BenefitsSection from "../../components/BenefitsSection/BenefitsSection";
import "./Home.scss";
import HowItWorksSection from "../../components/HowItWorksSection/HowItWorksSection";

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
					<h1 className="home__top-title">{t("home_title")}</h1>
					<div
						className="home__top-container"
						style={{ alignSelf: "flex-end" }}
					>
						<h2>
							{t("home_sec_title")}{" "}
							<span style={{ fontWeight: 500 }}>MaxFlow 360°</span>
						</h2>
						<div className="home__btn-container">
							<NavLink className={"home__link"} to={"/how-it-works"}>
								{t("home_btn")}?
							</NavLink>
							<button>{t("home_sec_btn")}</button>
						</div>
					</div>
					<div className="scroll" data-value={t("home_scroll")}></div>
				</div>
				<BenefitsSection />
				<HowItWorksSection />
				<Partners />
				<div>
					<h2>About us in numbers</h2>
					<div className="stats">
						<div>
							<p>instalací ročně</p>
							<p className="process-count">
								{"50+".split("").map((char, index) => {
									return (
										<span key={index} className="char">
											{char}
										</span>
									);
								})}
							</p>
						</div>
						<div>
							<p>zemí</p>
							<p className="process-count">
								{"20+".split("").map((char, index) => {
									return (
										<span key={index} className="char">
											{char}
										</span>
									);
								})}
							</p>
						</div>
						<div>
							<p>let zkušeností</p>
							<p className="process-count">
								{"12".split("").map((char, index) => {
									return (
										<span key={index} className="char">
											{char}
										</span>
									);
								})}
							</p>
						</div>
						<div>
							<p>podporovaných zařízení</p>
							<p className="process-count">
								{"1000+".split("").map((char, index) => {
									return (
										<span key={index} className="char">
											{char}
										</span>
									);
								})}
							</p>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;
