import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import "./HowItWorks.scss";
import { useEffect } from "react";
import ContactUs from "../../components/ContactUs/ContactUs";

const HowItWorks = () => {
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
				<title>MaxFlow | How it works</title>
				<link rel="canonical" href="https://maxflow.cz/how-it-works" />
			</Helmet>
			<div className="how-it-works">
				<div className="how-it-works__top">
					<h2 className="process__title" id="process">
						How It Works
					</h2>
				</div>
				<div className="process__outer">
					<div className="process__card process__card1">
						<p>Free Energy Audit</p>
						<div
							style={{
								width: "100%",
								borderBottom: "3px dashed white",
								marginBottom: 10,
								marginTop: 10,
							}}
						></div>
						<p>We analyze your bills and design a solution.</p>
					</div>
					<div className="process__card process__card2">
						<p>Tailored Proposal</p>
						<div
							style={{
								width: "100%",
								borderBottom: "3px dashed white",
								marginBottom: 10,
								marginTop: 10,
							}}
						></div>
						<p>Prepare subsidy documentation.</p>
					</div>
					<div className="process__card process__card3">
						<p>Hassle-Free Installation</p>
						<div
							style={{
								width: "100%",
								borderBottom: "3px dashed white",
								marginBottom: 10,
								marginTop: 10,
							}}
						></div>
						<p>Certified technicians handle everything.</p>
					</div>
					<div className="process__card process__card4">
						<p>Maximize Savings</p>
						<div
							style={{
								width: "100%",
								borderBottom: "3px dashed white",
								marginBottom: 10,
								marginTop: 10,
							}}
						></div>
						<p>AI starts cutting your costs immediately.</p>
					</div>
					<div className="process">
						<div className="process__inner"></div>
					</div>
				</div>
				<ContactUs>
					<p className="contact-us__title">
						Want to know how much you’ll save?
					</p>
					<div>
						<NavLink className="contact-us__link" to={"/form-calculator"}>
							<span>Use our quick savings calculator</span>
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
				</ContactUs>
			</div>
		</>
	);
};

export default HowItWorks;
