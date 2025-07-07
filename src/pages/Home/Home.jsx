import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Partners from "../../components/Partners/Partners";
import Benefits from "../../components/Benefits/Benefits";
import AboutUs from "../../components/AboutUs/AboutUs";
import bgImg from "/bg2.png";
import "./Home.scss";

const Home = () => {
	const { t } = useTranslation();

	const [inputs, setInputs] = useState({
		houseUnits: 35,
		purchasePrice: 8340,
		electricityPrice: 1500,
		batterySize: 35,
	});

	const handleInputsOnChange = (e) => {
		const { name, value } = e.target;

		setInputs((prev) => ({ ...prev, [name]: value }));
	};

	console.log(inputs);

	const yearConsumption = inputs.houseUnits * 1000 * 1000 * 0.43;

	const uspora = (yearConsumption * inputs.purchasePrice) / 1000;

	const usporaAll =
		(inputs.houseUnits *
			1000000 *
			0.43 *
			(inputs.purchasePrice - inputs.electricityPrice)) /
		1000000;

	const usporaBut = usporaAll / 35;

	const cena = inputs.houseUnits * 35000 + inputs.batterySize * 15000;

	const year = cena / 2 / usporaAll;

	console.log(yearConsumption);
	console.log(uspora);
	console.log(usporaAll);
	console.log(usporaBut);

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
					<img
						className="home__bg"
						src="https://www.ikomunita.cz/templates/default/img/Bytovy_dum.svg"
						alt=""
					/>
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
					<div className="scroll" data-value={t("scroll_to_explore")}></div>
				</div>
				<div className="calc">
					<p style={{ fontSize: "1.5rem" }}>Kalkulačka</p>
					<div>
						<label htmlFor="">
							Počet bytových jednotek <strong>{inputs.houseUnits}</strong>
						</label>
						<input
							onChange={handleInputsOnChange}
							value={inputs.houseUnits}
							name="houseUnits"
							className="calc__input"
							type="text"
							placeholder=""
						/>
					</div>
					<div>
						<label htmlFor="">
							Nákupní cena elektřiny (MWh){" "}
							<strong>{inputs.purchasePrice}</strong>
						</label>
						<input
							onChange={handleInputsOnChange}
							value={inputs.purchasePrice}
							name="purchasePrice"
							className="calc__input"
							type="text"
							placeholder=""
						/>
					</div>
					<div>
						<label htmlFor="">
							Výkupní cena elektřiny (MWh){" "}
							<strong>{inputs.electricityPrice}</strong>
						</label>
						<input
							onChange={handleInputsOnChange}
							value={inputs.electricityPrice}
							name="electricityPrice"
							className="calc__input"
							type="text"
							placeholder=""
						/>
					</div>
					<div className="calc__range-container">
						<label htmlFor="">
							Velikost baterií <strong>{inputs.batterySize}</strong>
						</label>
						<input
							onChange={handleInputsOnChange}
							value={inputs.batterySize}
							name="batterySize"
							type="range"
							min={0}
							max={80}
							step={5}
							id=""
						/>
						<div>
							<span>0</span>
							<span>40</span>
							<span>80</span>
						</div>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							width: "100%",
							background: "white",
							color: "black",
							padding: 15,
							borderRadius: 5,
						}}
					>
						<p style={{ fontSize: "1.5rem", fontWeight: 500 }}>
							MaxFlow 360 &deg;
						</p>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								flexWrap: "wrap",
								gap: 30,
							}}
						>
							<div>
								<p>
									Velikost fotovoltaiky: <strong>{inputs.houseUnits}</strong>{" "}
									kWp
								</p>
								<p>
									Velikost baterie: <strong>{inputs.batterySize}</strong> kWh
								</p>
								<p>Procento využití FVE: %</p>
							</div>
							<div>
								<p>
									Úspora na dům: <strong>{usporaAll}</strong> Kč
								</p>
								<p>
									Úspora na byt: <strong>{usporaBut.toFixed(0)}</strong> Kč
								</p>
							</div>
							<div>
								<p>
									Cena před dotací: <strong>{cena}</strong>
								</p>
								<p>
									Dotace: <strong>{cena / 2}</strong>
								</p>
							</div>
							<div>
								<p>
									Cena po odečtení dotace Kč: <strong>{cena / 2}</strong>
								</p>
								<p>
									Návratnost investice: let: <strong>{year.toFixed(1)}</strong>
								</p>
							</div>
						</div>
					</div>
				</div>
				<AboutUs />
				<Benefits />
				<Partners />
			</main>
		</>
	);
};

export default Home;
