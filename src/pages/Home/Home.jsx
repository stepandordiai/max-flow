import { Helmet } from "react-helmet";
import { useEffect } from "react";
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
			const scrollRange = window.innerHeight; // how much distance the animation takes
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
					<div>
						<h1>
							Chytrá energie pro SVJ –<br />
							Ušetřete až 80% nákladů
						</h1>
					</div>
					<div
						className="home__top-container"
						style={{ alignSelf: "flex-end" }}
					>
						<h2>
							Fotovoltaika s AI řízením a cloudovou platformou{" "}
							<span style={{ fontWeight: 500 }}>SOLARIS 360°</span>
						</h2>
						<div className="home__btn-container">
							<button>Jak to funguje?</button>
							<button>Nezávazná kalkulace</button>
						</div>
					</div>
					<div className="scroll"></div>
				</div>
				<div className="home__bottom">
					<p className="benefits__title">Výhody</p>
					<div className="benefits-container">
						<div className="benefits">
							<p>Maximální úspora</p>
							<p>Vlastní spotřeba &gt;80% energie.</p>
						</div>
						<div className="benefits">
							<p>Inteligentní řízení</p>
							<p>AI optimalizace toku energie.</p>
						</div>
						<div className="benefits">
							<p>Bezstarostný provoz</p>
							<p>Vše řídí SOLARIS 360°.</p>
						</div>
					</div>
					<h2 className="process__title">Jak systém funguje</h2>
					<div className="process">
						<div className="process__inner"></div>
						<div className="process__card process__card1">
							<p>1</p>
							<p>FVE</p>
						</div>
						<div className="process__card process__card2">
							<p>2</p>
							<p>Baterie</p>
						</div>
						<div className="process__card process__card3">
							<p>3</p>
							<p>Řízená spotřeba</p>
						</div>
						<div className="process__card process__card4">
							<p>4</p>
							<p>Prodej přebytků</p>
						</div>
					</div>
					<div className="partners-container">
						<h2 className="partners__title">Partners</h2>
						<div className="partners">
							<p>Jinko Solar</p>
							<p>CanadianSolar</p>
							<p>ZJBENY</p>
							<p>Tigo</p>
							<p>AIKO</p>
							<p>SKODA</p>
							<p>VOLVO</p>
							<p>ASSA ABLOY</p>
							<p>TOWERCOM</p>
							<p>AGC</p>
							<p>Chisage ESS</p>
							{/* <img
						src="https://jinkosolarcdn.shwebspace.com/themes/basicen/skin/images/logony.png"
						alt=""
						/>
						
						<img
						src="https://www.canadiansolar.com/wp-content/uploads/2024/06/CS-LOGO-RED-RGB-NEW-2024-W-TAG-2.png"
						alt=""
						/>
						<img
						src="https://lh4.googleusercontent.com/proxy/341zOYGIOFlOW5xf7XYn1CNQqGaKaOOXc9uAKv9aqbU-PX_0ameieUdtYshiwsEjcMGtbEMWv96le1WXvbtR65quSuLbJ--cyZkI7d6I8rjZOI5qriUi8jowokGgPw"
						alt=""
						/>
						<img
						src="https://cdn.prod.website-files.com/5fa5ee97e1eb253b5efc0385/5fad42bc7dee3e2002385080_Tigo-logo.svg"
						alt=""
						/>
						<img
						src="https://www.memodo.cz/m/fileadmin/shopware_products/manufacturer_images/400x200px_Aiko-Logo.png"
						alt=""
						/>
						<img
						src="https://upload.wikimedia.org/wikipedia/commons/0/09/%C5%A0koda_nieuw.png"
						alt=""
						/> */}
						</div>
					</div>
					<h2>About us in numbers</h2>
					<div className="stats">
						<div>
							<p>instalací ročně</p>
							<p>50+</p>
						</div>
						<div>
							<p>zemí</p>
							<p>20+</p>
						</div>
						<div>
							<p>let zkušeností</p>
							<p>12</p>
						</div>
						<div>
							<p>podporovaných zařízení</p>
							<p>1000+</p>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;
