import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import arrowDownIcon from "/icons/down-arrow.png";
import "./Contact.scss";

const Contact = () => {
	const countries = [
		{
			country: "CZ",
			number: "+420",
			flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1280px-Flag_of_the_Czech_Republic.svg.png",
		},
		{
			country: "UA",
			number: "+380",
			flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/500px-Flag_of_Ukraine.svg.png",
		},
	];

	const [country, setCountry] = useState(countries[0].country);
	const [inputValue, setInputValue] = useState(countries[0].number);
	const [currentCode, setCurrentCode] = useState(countries[0].number);

	useEffect(() => {
		const inputs = document.querySelectorAll(".js-input");

		inputs.forEach((input) => {
			input.addEventListener("input", () => {
				if (input.value !== "") {
					input.classList.add("input--active");
				} else {
					input.classList.remove("input--active");
				}
			});
		});

		const customContainer = document.querySelector(".custom-input-container");

		const customInput = document.querySelector(".custom-input");
		customInput.addEventListener("input", () => {
			if (customInput.value.length > 4) {
				customContainer.classList.add("input--active");
			} else {
				customContainer.classList.remove("input--active");
			}
		});

		const newCode = countries.find((el) => el.country === country);
		setInputValue(newCode.number);
		setCurrentCode(newCode.number);
	}, [country]);

	useEffect(() => {
		document
			.querySelector(".custom-select-btn")
			.addEventListener("click", (e) => {
				e.preventDefault();
				document
					.querySelector(".custom-select-dd")
					.classList.toggle("custom-select-dd--active");
			});

		document.querySelectorAll(".custom-select-option").forEach((option) => {
			option.addEventListener("click", (e) => {
				const dataValue = e.target.dataset.value;
				const dataFlag = e.target.dataset.flag;
				setCountry(dataValue);
				document.querySelector(".custom-select-btn-txt").textContent =
					dataValue;
				document.querySelector(".custom-select-btn-flag").src = dataFlag;
				document
					.querySelector(".custom-select-dd")
					.classList.remove("custom-select-dd--active");
			});
		});
	}, []);

	const handleInputValue = (e) => {
		setInputValue(e.target.value);

		let currentValue = e.target.value;

		if (!currentValue.startsWith(currentCode)) {
			currentValue = currentCode;
			setInputValue(currentValue);
		}
	};

	return (
		<>
			<Helmet>
				<title>MaxFlow | Contact</title>
				<link rel="canonical" href="https://maxflow.cz/contact" />
			</Helmet>
			<main className="contact">
				<div className="contact__info">
					<div>
						<h2 className="contact__info-title">Contact information</h2>
						<p style={{ fontWeight: 300 }}>
							Fill up the form and our Team will get back to you within 24 hours
						</p>
					</div>
					<div className="contact__info-details">
						<div>
							<p style={{ marginBottom: 5 }}>Call us</p>
							<a
								className="contact__info-details-link"
								href="tel:+420777957290"
							>
								<i className="fa-solid fa-phone"></i>
								<span>+420 777 957 290</span>
							</a>
						</div>
						<div>
							<p style={{ marginBottom: 5 }}>Chat to us</p>
							<a
								className="contact__info-details-link"
								href="mailto:info@fvestavby.cz"
							>
								<i className="fa-solid fa-envelope"></i>
								<span>info@fvestavby.cz</span>
							</a>
						</div>
						<div>
							<p style={{ marginBottom: 5 }}>Visit us</p>
							<a className="contact__info-details-link" href="">
								<i className="fa-solid fa-map-location-dot"></i>
								<span>Pod Hroby 271 Kolín IV</span>
							</a>
						</div>
					</div>
					<div>
						<p style={{ marginBottom: 5 }}>Social media</p>
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
					action={"mailto:stepandordiai@gmail.com"}
					method="post"
					datatype="text/plain"
					className="contact__form"
				>
					<div className="contact__form-container">
						<div className="contact__form-input-container">
							<label htmlFor="firstName">First Name</label>
							<input
								className="input js-input"
								id="firstName"
								name="firstName"
								type="text"
							/>
						</div>
						<div className="contact__form-input-container">
							<label htmlFor="lastName">Last Name</label>
							<input className="input js-input" id="lastName" type="text" />
						</div>
					</div>
					<div className="contact__form-input-container">
						<label htmlFor="email">Email</label>
						<input className="input js-input" id="email" type="email" />
					</div>
					<div className="contact__form-input-container">
						<label htmlFor="tel">Phone Number</label>

						<div className="custom-input-container">
							<div className="custom-select">
								<button className="custom-select-btn">
									<img
										style={{ pointerEvents: "none" }}
										className="custom-select-btn-flag"
										width={20}
										src={countries[0].flag}
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
									{countries.map((country, index) => {
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
												data-value={country.country}
												data-flag={country.flag}
											>
												<img
													style={{ pointerEvents: "none" }}
													width={20}
													src={country.flag}
													alt=""
												/>
												<span style={{ pointerEvents: "none" }}>
													{country.country}
												</span>
											</div>
										);
									})}
								</div>
								{/* <input style={{ display: "none" }} type="text" readOnly /> */}
							</div>
							<input
								className="js-code-input custom-input"
								id="tel"
								value={inputValue}
								onChange={(e) => handleInputValue(e)}
								type="tel"
								name="tel"
							/>
						</div>
					</div>
					<div className="contact__form-input-container area-container">
						<label htmlFor="message">Message</label>
						<textarea
							className="input js-input"
							name=""
							id="message"
						></textarea>
					</div>
					<button className="contact__form-btn" type="submit">
						Send message
					</button>
				</form>
			</main>
		</>
	);
};

export default Contact;
