import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "./AboutUs.scss";

const AboutUs = () => {
	const { t } = useTranslation();

	useEffect(() => {
		let delay = 150;

		document.querySelectorAll(".about-us__card-counter").forEach((count) => {
			document.addEventListener("scroll", () => {
				const countRect = count.getBoundingClientRect();
				if (countRect.top < window.innerHeight) {
					count
						.querySelectorAll(".about-us__card-counter-char")
						.forEach((char, index) => {
							setTimeout(() => {
								char.classList.add("about-us__card-counter-char--active");
							}, delay + 150 * index);
						});
				}
			});
		});
	}, []);

	return (
		<div className="about-us" id="about-us">
			<h2 className="about-us__title">{t("about_us.title")}</h2>
			<div className="about-us__cards">
				<div className="about-us__card">
					<p className="about-us__card-title">{t("about_us.card1_title")}</p>
					<p className="about-us__card-counter">
						{"50+".split("").map((char, index) => {
							return (
								<span key={index} className="about-us__card-counter-char">
									{char}
								</span>
							);
						})}
					</p>
				</div>
				<div className="about-us__card">
					<p className="about-us__card-title">
						{t("about_us.card2_title")} 12,500,000 CZK
					</p>
					<p className="about-us__card-counter">
						{"72".split("").map((char, index) => {
							return (
								<span key={index} className="about-us__card-counter-char">
									{char}
								</span>
							);
						})}
					</p>
				</div>
				<div className="about-us__card">
					<p className="about-us__card-title">{t("about_us.card3_title")}</p>
					<p className="about-us__card-counter">
						{"12".split("").map((char, index) => {
							return (
								<span key={index} className="about-us__card-counter-char">
									{char}
								</span>
							);
						})}
					</p>
				</div>
				<div className="about-us__card">
					<p className="about-us__card-title">{t("about_us.card4_title")}</p>
					<p className="about-us__card-counter">
						{"1000+".split("").map((char, index) => {
							return (
								<span key={index} className="about-us__card-counter-char">
									{char}
								</span>
							);
						})}
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
