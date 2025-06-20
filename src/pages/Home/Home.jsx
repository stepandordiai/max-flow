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
		});
	}, []);

	return (
		<main className="home">
			<div className="home__top">
				<div>
					<h1>
						Chytrá energie pro SVJ –<br />
						Ušetřete až 80% nákladů
					</h1>
				</div>
				<div className="home__top-container" style={{ alignSelf: "flex-end" }}>
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
			</div>
		</main>
	);
};

export default Home;
