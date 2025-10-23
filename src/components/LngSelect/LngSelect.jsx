import { useEffect, useState, useRef } from "react";
import i18next from "i18next";
import downArrowIcon from "/icons/down-arrow.png";
import "./LngSelect.scss";

const lngData = [
	{ code: "cs", name: "CZ" },
	{ code: "sk", name: "SK" },
	{ code: "en", name: "EN" },
];

function getStorage() {
	return localStorage.getItem("i18nextLng") || "cs";
}

const LngSelect = () => {
	const [lngSelectActive, setLngSelectActive] = useState(false);
	const [lngOptionName, setLngOptionName] = useState("CZ");
	const [lngOption, setLngOption] = useState(getStorage());

	const lngSelect = useRef(null);

	useEffect(() => {
		const storedLngData = getStorage();
		const foundLng = lngData.find((lng) => lng.code === storedLngData);
		setLngOptionName(foundLng ? foundLng.name : lngData[0].name);

		const handleClickNotOnLngSelect = (e) => {
			if (lngSelect.current && !lngSelect.current.contains(e.target)) {
				setLngSelectActive(false);
			}
		};

		document.addEventListener("click", handleClickNotOnLngSelect);

		return () =>
			document.removeEventListener("click", handleClickNotOnLngSelect);
	}, []);

	const handleLngSelectBtn = () => {
		setLngSelectActive((prev) => !prev);
	};

	const handleLng = (lngCode, lngName) => {
		i18next.changeLanguage(lngCode);
		setLngOption(lngCode);
		setLngOptionName(lngName);
		setLngSelectActive(false);
	};

	return (
		<div ref={lngSelect} className="lng-select">
			<button
				onClick={handleLngSelectBtn}
				className={`lng-select__btn ${
					lngSelectActive ? "lng-select__btn--active" : ""
				}`}
			>
				<span className="lng-select__btn-value">{lngOptionName}</span>
				<img
					className={`lng-select__btn-icon ${
						lngSelectActive ? "lng-select__btn-icon--active" : ""
					}`}
					src={downArrowIcon}
					width={20}
					height={20}
					alt=""
				/>
			</button>
			<ul
				className={`lng-select__list ${
					lngSelectActive ? "lng-select__list--visible" : ""
				}`}
			>
				{lngData.map((lng) => {
					return (
						<li
							key={lng.code}
							onClick={() => handleLng(lng.code, lng.name)}
							className={`lng-select__option ${
								lngOption === lng.code ? "lng-select__option--active" : ""
							}`}
						>
							<span>{lng.name}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default LngSelect;
