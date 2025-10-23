import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import countriesData from "./../../data/countries-data.json";
import socialsData from "./../../data/socials-data.json";
import Container from "../../components/Container/Container";
import arrowDownIcon from "/icons/down-arrow.png";
import "./Contact.scss";

const getStorage = () => {
	return localStorage.getItem("country_code") || "CZ";
};

const Contact = () => {
	const { t } = useTranslation();

	const [countrySelect, setCountrySelect] = useState(false);
	const [countryName, setCountryName] = useState(getStorage());
	const [countryFlag, setCountryrFlag] = useState(countriesData[0].flag);
	const [inputValue, setInputValue] = useState(countriesData[0].code);

	const countrySelectRef = useRef(null);

	const handleCodeInputValue = (e) => {
		const value = e.target.value;

		if (value.length >= 4) {
			setInputValue(value);
		}
	};

	// FIXME:
	useEffect(() => {
		const inputs = document.querySelectorAll(".js-input");
		const customContainer = document.querySelector(".custom-input-container");
		const customInput = document.querySelector(".custom-input");

		// Toggle active classList depending on wether input is empty or not
		inputs.forEach((input) => {
			input.addEventListener("input", () => {
				if (input.value !== "") {
					input.classList.add("input--active");
				} else {
					input.classList.remove("input--active");
				}
			});
		});

		// Toggle active classList depending on wether input is empty or not (for tel)
		customInput.addEventListener("input", () => {
			if (customInput.value.length > 4) {
				customContainer.classList.add("input--active");
			} else {
				customContainer.classList.remove("input--active");
			}
		});
	}, []);

	useEffect(() => {
		const foundCountry = countriesData.find(
			(country) => country.name === countryName
		);

		setCountryrFlag(foundCountry.flag);
		setInputValue(foundCountry.code);

		const handleClickNotOnCountrySelect = (e) => {
			if (
				countrySelectRef.current &&
				!countrySelectRef.current.contains(e.target)
			) {
				setCountrySelect(false);
			}
		};

		document.addEventListener("click", handleClickNotOnCountrySelect);

		return () =>
			document.removeEventListener("click", handleClickNotOnCountrySelect);
	}, []);

	const handleCountrySelect = (e) => {
		e.preventDefault();
		setCountrySelect((prev) => !prev);
	};

	const handleCountryName = (countryName, countryFlag, countryCode) => {
		setCountryName(countryName);
		localStorage.setItem("country_code", countryName);
		setCountrySelect(false);
		setInputValue(countryCode);
		setCountryrFlag(countryFlag);
	};

	return (
		<>
			<Helmet>
				<title>{t("contact_title")} | MaxFlow 360&deg;</title>
			</Helmet>
			<main className="contact">
				<Container>
					<div className="contact-inner">
						<div className="contact__info">
							<div>
								<h1 className="contact__info-title">{t("contact.info")}</h1>
								<p style={{ fontWeight: 300 }}>{t("contact.sec_info")}</p>
							</div>
							<div className="contact__info-details">
								<div>
									<p style={{ marginBottom: 5 }}>{t("contact.call_us")}</p>
									<a
										className="contact__info-details-link"
										href="tel:+420728803703"
									>
										<i className="fa-solid fa-phone"></i>
										<span>+420 728 803 703</span>
									</a>
								</div>
								<div>
									<p style={{ marginBottom: 5 }}>{t("contact.chat_to_us")}</p>
									<a
										className="contact__info-details-link"
										href="mailto:info@fvestavby.cz"
									>
										<i className="fa-solid fa-envelope"></i>
										<span>info@fvestavby.cz</span>
									</a>
								</div>
								<div>
									<p style={{ marginBottom: 5 }}>{t("contact.visit_us")}</p>
									<a
										className="contact__info-details-link"
										href="https://maps.app.goo.gl/UBXCPbrrCNxUSXNY8"
										target="_blank"
									>
										<i className="fa-solid fa-map-location-dot"></i>
										<span>Pod Hroby 271 Kolín IV</span>
									</a>
								</div>
								<div>
									<p style={{ marginBottom: 5 }}>
										{t("contact.opening_hours")}
									</p>
									<p style={{ fontWeight: 300 }}>
										{t("contact.monday")} - {t("contact.saturday")}: 8:00 -
										17:00
									</p>
								</div>
							</div>
							<div>
								<p style={{ marginBottom: 5 }}>{t("contact.social_media")}</p>
								<div className="contact__info-socials">
									{socialsData.map((social, index) => {
										return (
											<a
												key={index}
												className="contact__info-socials-link"
												href={social.url}
												target="_blank"
											>
												<i className={social.logoImg}></i>
												<span>{social.name}</span>
											</a>
										);
									})}
								</div>
							</div>
						</div>
						<div className="contact__form-wrapper">
							<p className="contact__form-wrapper-title">Kontaktní formulář</p>
							<form
								action="https://formspree.io/f/mqalzwov"
								method="post"
								className="contact__form"
							>
								<div className="contact__form-container">
									<div className="contact__form-input-container">
										<label htmlFor="firstName">{t("contact.first_name")}</label>
										<input
											className="input js-input"
											id="firstName"
											name="firstName"
											type="text"
										/>
									</div>
									<div className="contact__form-input-container">
										<label htmlFor="lastName">{t("contact.last_name")}</label>
										<input
											className="input js-input"
											id="lastName"
											name="lastName"
											type="text"
										/>
									</div>
								</div>
								<div className="contact__form-input-container">
									<label htmlFor="email">Email</label>
									<input
										className="input js-input"
										id="email"
										name="email"
										type="email"
									/>
								</div>
								<div className="contact__form-input-container">
									<label htmlFor="tel">{t("contact.tel")}</label>
									<div className="custom-input-container">
										<div ref={countrySelectRef} className="custom-select">
											<button
												onClick={handleCountrySelect}
												className="custom-select-btn"
											>
												<img
													style={{ pointerEvents: "none" }}
													className="custom-select-btn-flag"
													width={20}
													src={countryFlag}
													alt=""
												/>
												<span
													style={{ pointerEvents: "none" }}
													className="custom-select-btn-txt"
												>
													{countryName}
												</span>
												<img
													className={`custom-select__btn-icon ${
														countrySelect
															? "custom-select__btn-icon--active"
															: ""
													}`}
													width={20}
													src={arrowDownIcon}
													alt=""
												/>
											</button>
											<div
												className={`custom-select-dd ${
													countrySelect ? "custom-select-dd--active" : ""
												}`}
											>
												{countriesData.map((country, index) => {
													return (
														<div
															key={index}
															onClick={() =>
																handleCountryName(
																	country.name,
																	country.flag,
																	country.code
																)
															}
															style={{
																display: "flex",
																justifyContent: "center",
																alignItems: "center",
																gap: 5,
															}}
															className="custom-select-option"
														>
															<img
																style={{ pointerEvents: "none" }}
																width={20}
																src={country.flag}
																alt=""
															/>
															<span style={{ pointerEvents: "none" }}>
																{country.name}
															</span>
														</div>
													);
												})}
											</div>
										</div>
										<input
											className="js-code-input custom-input"
											id="tel"
											value={inputValue}
											onChange={(e) => handleCodeInputValue(e)}
											type="tel"
											name="tel"
										/>
									</div>
								</div>
								<div className="contact__form-input-container area-container">
									<label htmlFor="message">{t("contact.message")}</label>
									<textarea
										className="input js-input"
										name="message"
										id="message"
									></textarea>
								</div>
								<button className="contact__form-btn" type="submit">
									{t("contact.send")}
								</button>
							</form>
						</div>
					</div>
				</Container>
			</main>
		</>
	);
};

export default Contact;
