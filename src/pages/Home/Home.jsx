import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import saveMoneyIcon from "/icons/save-money.png";
import executionIcon from "/icons/execution.png";
import homeAutomationIcon from "/icons/home-automation.png";
import PartnersSection from "../../components/PartnersSection/PartnersSection";
import "./Home.scss";

const Home = () => {
	useEffect(() => {
		document.addEventListener("scroll", () => {
			const scrollTop = document.documentElement.scrollTop;
			if (scrollTop > 0) {
				document.querySelector(".scroll").classList.add("scroll--active");
			} else {
				document.querySelector(".scroll").classList.remove("scroll--active");
			}

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
	}, []);

	useEffect(() => {
		document.querySelectorAll(".process__card").forEach((card) => {
			document.addEventListener("scroll", () => {
				const cardRect = card.getBoundingClientRect();
				if (cardRect.top <= window.innerHeight / 2) {
					card.classList.add("process__card--active");
				}
			});
		});

		let delay = 300;

		document.querySelectorAll(".process-count").forEach((count) => {
			document.addEventListener("scroll", () => {
				const countRect = count.getBoundingClientRect();
				if (countRect.bottom < window.innerHeight) {
					count.querySelectorAll(".char").forEach((char, index) => {
						setTimeout(() => {
							char.classList.add("char--active");
						}, delay + 300 * index);
					});
				}
			});
		});
	}, []);

	return (
		<>
			<Helmet>
				<title>
					MaxFlow | Chytrá energie pro SVJ – Ušetřete až 80% nákladů
				</title>
				<link rel="canonical" href="https://maxflow.cz/" />
			</Helmet>
			<main className="home">
				<div className="home__top">
					<h1 className="home__top-title">
						Chytrá energie pro SVJ –<br />
						Ušetřete až 80% nákladů
					</h1>
					<div
						className="home__top-container"
						style={{ alignSelf: "flex-end" }}
					>
						<h2>
							Fotovoltaika s AI řízením a cloudovou platformou{" "}
							<span style={{ fontWeight: 500 }}>SOLARIS 360°</span>
						</h2>
						<div className="home__btn-container">
							<NavLink className={"home__link"} to={"/how-it-works"}>
								Jak to funguje?
							</NavLink>
							<button>Nezávazná kalkulace</button>
						</div>
					</div>
					<div className="scroll"></div>
				</div>
				<div className="home__bottom">
					<p className="benefits__title">Výhody</p>
					<div className="benefits-container">
						<div className="benefits">
							<div>
								<p>Maximální úspora</p>
								<p>Vlastní spotřeba &gt;80% energie.</p>
							</div>
							<img width={100} height={100} src={saveMoneyIcon} alt="" />
						</div>
						<div className="benefits">
							<div>
								<p>Inteligentní řízení</p>
								<p>AI optimalizace toku energie.</p>
							</div>
							<img width={100} height={100} src={homeAutomationIcon} alt="" />
						</div>
						<div className="benefits">
							<div>
								<p>Bezstarostný provoz</p>
								<p>Vše řídí SOLARIS 360°.</p>
							</div>
							<img width={100} height={100} src={executionIcon} alt="" />
						</div>
					</div>
					<h2 className="process__title">Jak systém funguje</h2>
					<div className="process__outer">
						<div className="process__card process__card1">
							<p>FVE</p>
							<div
								style={{
									width: "100%",
									borderBottom: "3px dashed white",
									marginBottom: 10,
									marginTop: 10,
								}}
							></div>
							<ul>
								<li>Solární panely vyrábí elektřinu ze slunce.</li>
								<li>
									Tato elektřina je primárně spotřebovávána přímo v objektu
									(např. osvětlení, výtahy, ohřev vody).
								</li>
							</ul>
						</div>
						<div className="process__card process__card2">
							<p>Baterie</p>
							<div
								style={{
									width: "100%",
									borderBottom: "3px dashed white",
									marginBottom: 10,
									marginTop: 10,
								}}
							></div>
							<ul>
								<li>
									Pokud je okamžitá výroba větší než spotřeba, přebytečná
									energie se uloží do bateriového úložiště.
								</li>
								<li>
									Energie z baterie se poté může využít večer nebo při výpadku
									dodávky ze sítě.
								</li>
								<li>
									Výhoda: Zvyšuje soběstačnost a snižuje náklady na elektřinu z
									distribuční sítě.
								</li>
							</ul>
						</div>
						<div className="process__card process__card3">
							<p>Řízená spotřeba</p>
							<div
								style={{
									width: "100%",
									borderBottom: "3px dashed white",
									marginBottom: 10,
									marginTop: 10,
								}}
							></div>
							<ul>
								<li>
									Chytrý řídicí systém rozhoduje, kam se má energie směřovat:
									<ul>
										<li>
											Když je dostatek elektřiny → aktivuje se např. ohřev vody,
											čerpadla apod.
										</li>
										<li>
											Když je málo energie → spotřebiče se omezí nebo se odebírá
											ze sítě
										</li>
									</ul>
								</li>
								<li>
									Cílem je minimalizovat nákup ze sítě a maximalizovat využití
									vlastní elektřiny.
								</li>
							</ul>
						</div>
						<div className="process__card process__card4">
							<p>Prodej přebytků</p>
							<div
								style={{
									width: "100%",
									borderBottom: "3px dashed white",
									marginBottom: 10,
									marginTop: 10,
								}}
							></div>
							<ul>
								<li>
									Když je baterie plná a spotřeba malá, přebytky se prodávají do
									distribuční sítě.
								</li>
								<li>
									Výnosy se obvykle rozpočítávají mezi členy SVJ nebo slouží
									jako příjem pro pokrytí nákladů.
								</li>
								<li>
									Nutné je mít smlouvu o výkupu s dodavatelem / distributorem.
								</li>
							</ul>
						</div>
						<div className="process">
							<div className="process__inner"></div>
						</div>
					</div>
					<PartnersSection />
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
