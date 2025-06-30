import { useEffect } from "react";
import "./HowItWorksSection.scss";

const HowItWorksSection = () => {
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
		<div>
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
							Tato elektřina je primárně spotřebovávána přímo v objektu (např.
							osvětlení, výtahy, ohřev vody).
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
							Pokud je okamžitá výroba větší než spotřeba, přebytečná energie se
							uloží do bateriového úložiště.
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
									Když je málo energie → spotřebiče se omezí nebo se odebírá ze
									sítě
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
							Výnosy se obvykle rozpočítávají mezi členy SVJ nebo slouží jako
							příjem pro pokrytí nákladů.
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
		</div>
	);
};

export default HowItWorksSection;
