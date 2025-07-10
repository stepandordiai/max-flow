import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import arrowDownIcon from "/icons/down-arrow.png";
import "./Contact.scss";

const Contact = () => {
	const { t } = useTranslation();

	const countriesData = [
		{
			name: "CZ",
			code: "+420",
			flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1280px-Flag_of_the_Czech_Republic.svg.png",
		},
		{
			name: "UA",
			code: "+380",
			flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/500px-Flag_of_Ukraine.svg.png",
		},
		{
			name: "SK",
			code: "+421",
			flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/500px-Flag_of_Slovakia.svg.png",
		},
	];

	const [countryName, setCountryName] = useState(countriesData[0].name);
	const [inputValue, setInputValue] = useState(countriesData[0].code);
	const [currentCode, setCurrentCode] = useState(countriesData[0].code);

	const handleCodeInputValue = (e) => {
		let currentValue = e.target.value;

		if (!currentValue.startsWith(currentCode)) {
			currentValue = currentCode;
			setInputValue(currentValue);
		}

		setInputValue(currentValue);
	};

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

		const newCode = countriesData.find(
			(country) => country.name === countryName
		);

		setInputValue(newCode.code);
		setCurrentCode(newCode.code);
	}, [countryName]);

	useEffect(() => {
		const customSelectDd = document.querySelector(".custom-select-dd");
		const customSelectBtn = document.querySelector(".custom-select-btn");

		customSelectBtn.addEventListener("click", (e) => {
			e.preventDefault();
			customSelectDd.classList.add("custom-select-dd--active");
		});

		document.querySelectorAll(".custom-select-option").forEach((option) => {
			option.addEventListener("click", (e) => {
				const dataValue = e.target.dataset.value;
				const dataFlag = e.target.dataset.flag;
				setCountryName(dataValue);
				document.querySelector(".custom-select-btn-txt").textContent =
					dataValue;
				document.querySelector(".custom-select-btn-flag").src = dataFlag;
				customSelectDd.classList.remove("custom-select-dd--active");
			});
		});

		document.addEventListener("click", (e) => {
			if (e.target !== customSelectDd && e.target !== customSelectBtn) {
				customSelectDd.classList.remove("custom-select-dd--active");
			}
		});
	}, []);

	return (
		<>
			<Helmet>
				<title>{t("contact_title")} | MaxFlow</title>
			</Helmet>
			<main className="contact">
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
					</div>
					<div>
						<p style={{ marginBottom: 5 }}>{t("contact.social_media")}</p>
						<div className="contact__info-socials">
							<a
								className="contact__info-socials-link"
								href="https://www.facebook.com/people/Fve-stavby/61576683235805/"
								target="_blank"
							>
								<i className="fa-brands fa-facebook-f"></i>
								<span>Facebook</span>
							</a>
							<a
								className="contact__info-socials-link"
								href="https://www.instagram.com/fvestavby/#"
								target="_blank"
							>
								<i className="fa-brands fa-instagram"></i>
								<span>Instagram</span>
							</a>
							<a
								className="contact__info-socials-link"
								href="https://www.tiktok.com/@fvestavby"
								target="_blank"
							>
								<i className="fa-brands fa-tiktok"></i>
								<span>TikTok</span>
							</a>
						</div>
					</div>
				</div>
				<form
					action="https://formsubmit.co/info@fvestavby.cz"
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
							<div className="custom-select">
								<button className="custom-select-btn">
									<img
										style={{ pointerEvents: "none" }}
										className="custom-select-btn-flag"
										width={20}
										src={countriesData[0].flag}
										alt=""
									/>
									<span
										style={{ pointerEvents: "none" }}
										className="custom-select-btn-txt"
									>
										CZ
									</span>
									<img
										style={{ pointerEvents: "none" }}
										width={20}
										src={arrowDownIcon}
										alt=""
									/>
								</button>
								<div className="custom-select-dd">
									{countriesData.map((country, index) => {
										return (
											<div
												key={index}
												style={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													gap: 5,
												}}
												className="custom-select-option"
												data-value={country.name}
												data-flag={country.flag}
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
			</main>
		</>
	);
};

export default Contact;
