import { useEffect } from "react";
import i18next from "i18next";
import downArrowIcon from "/icons/down-arrow.png";
import "./LngSelect.scss";

const LngSelect = () => {
	function getStorage() {
		return localStorage.getItem("i18nextLng") || "cs";
	}

	const handleChangeLanguage = (lng) => {
		i18next.changeLanguage(lng);
		getStorage();
	};
	useEffect(() => {
		const selectBtn = document.querySelector(".lng-select__btn");
		const selectList = document.querySelector(".lng-select__list");
		const selectOptions = selectList.querySelectorAll(".lng-select__option");
		const selectBtnIcon = document.querySelector(".lng-select__btn-icon");
		const selectBtnTxt = document.querySelector(".lng-select__btn-value");

		selectBtn.addEventListener("click", () => {
			selectList.classList.toggle("lng-select__list--visible");
			selectBtn.classList.toggle("lng-select__btn--active");
			selectBtnIcon.classList.toggle("lng-select__btn-icon--active");
		});

		selectOptions.forEach((option) => {
			option.addEventListener("click", (e) => {
				e.stopPropagation();
				selectBtnTxt.textContent = option.textContent;
				handleChangeLanguage(option.dataset.value || "cs");
				selectBtn.classList.remove("lng-select__btn--active");
				selectList.classList.remove("lng-select__list--visible");
				selectBtnIcon.classList.remove("lng-select__btn-icon--active");
				for (let i = 0; i < selectOptions.length; i++) {
					selectOptions[i].classList.remove("lng-select__option--active");
				}
				if (option.dataset.value === getStorage()) {
					option.classList.add("lng-select__option--active");
				}
			});
		});

		document.addEventListener("click", (e) => {
			if (e.target !== selectBtn) {
				selectBtn.classList.remove("lng-select__btn--active");
				selectList.classList.remove("lng-select__list--visible");
				selectBtnIcon.classList.remove("lng-select__btn-icon--active");
			}
		});

		const handleLngSelectBtn = (code = "CZ") => {
			return code;
		};

		switch (getStorage()) {
			case "cs":
				selectBtnTxt.innerText = handleLngSelectBtn("CZ");
				break;
			case "sk":
				selectBtnTxt.innerText = handleLngSelectBtn("SK");
				break;
			case "en":
				selectBtnTxt.innerText = handleLngSelectBtn("EN");
				break;
		}
	}, []);

	const inactiveLngOption = "lng-select__option";
	const activeLngOption = "lng-select__option lng-select__option--active";

	return (
		<div className="lng-select">
			<button className="lng-select__btn">
				<span className="lng-select__btn-value">CZ</span>
				<img
					className="lng-select__btn-icon"
					src={downArrowIcon}
					width={20}
					height={20}
					alt=""
				/>
			</button>
			<ul className="lng-select__list">
				<li
					className={
						getStorage() === "cs" ? activeLngOption : inactiveLngOption
					}
					data-value="cs"
				>
					<span>CZ</span>
				</li>
				<li
					className={
						getStorage() === "sk" ? activeLngOption : inactiveLngOption
					}
					data-value="sk"
				>
					<span>SK</span>
				</li>
				<li
					className={
						getStorage() === "en" ? activeLngOption : inactiveLngOption
					}
					data-value="en"
				>
					<span>EN</span>
				</li>
			</ul>
		</div>
	);
};

export default LngSelect;
