import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Range from "../../components/Range/Range";
import Checkbox from "../../components/Checkbox/Checkbox";
import "./FormCalculator.scss";

const FormCalculator = () => {
	const { t } = useTranslation();

	const [inputs, setInputs] = useState({
		housingUnits: 10,
		entrances: 5,
		roofType: "",
		roofOrientation: "",
		electricityConsumption: "",
		electricityPrice: "",
		shielding: "",
		roofCondition: "",
		batteryStorage: "",
		subsidies: "",
		name: "",
		email: "",
		tel: "",
	});

	const handleChange = (e) => {
		const { name, type, value, checked } = e.target;

		setInputs((prev) => ({
			...prev,
			[name]: type === "checkbox" ? (checked ? value : "") : value,
		}));
	};

	return (
		<>
			<Helmet>
				<title>{t("form_calculator.title")} | MaxFlow</title>
			</Helmet>
			<main className="form-calculator">
				<h1 className="form-calculator__title">{t("form_calculator.title")}</h1>
				<form
					className="form"
					action="https://formspree.io/f/xovddpld"
					method="POST"
				>
					<p>{t("form_calculator.sec_title_1")}</p>
					<div className="form-calculator__range-container">
						<Range
							handleInputsOnChange={handleChange}
							value={inputs.housingUnits}
							name={"housingUnits"}
							maxValue={100}
							label={t("form_calculator.label_1")}
						/>
						<Range
							handleInputsOnChange={handleChange}
							value={inputs.entrances}
							name={"entrances"}
							maxValue={10}
							label={t("form_calculator.label_2")}
						/>
					</div>
					<div className="form-calculator__form-container">
						<p style={{ marginBottom: 10 }}>{t("form_calculator.label_3")}</p>
						<div
							style={{ display: "flex", flexDirection: "column", rowGap: 5 }}
						>
							<Checkbox
								label={t("form_calculator.label_3_check_1")}
								id={"roof-type-check-1"}
								name={"roofType"}
								handleChange={handleChange}
							/>
							<Checkbox
								label={t("form_calculator.label_3_check_2")}
								id={"roof-type-check-2"}
								name={"roofType"}
								handleChange={handleChange}
							/>
							<Checkbox
								label={t("form_calculator.label_3_check_3")}
								id={"roof-type-check-3"}
								name={"roofType"}
								handleChange={handleChange}
							/>
						</div>
					</div>
					<div className="form-calculator__form-container">
						<p style={{ marginBottom: 10 }}>{t("form_calculator.label_4")}</p>
						<div
							style={{ display: "flex", flexDirection: "column", rowGap: 5 }}
						>
							<Checkbox
								label={t("form_calculator.label_4_check_1")}
								id={"roof-orientation-check-1"}
								name={"roofOrientation"}
								handleChange={handleChange}
							/>
							<Checkbox
								label={t("form_calculator.label_4_check_2")}
								id={"roof-orientation-check-2"}
								name={"roofOrientation"}
								handleChange={handleChange}
							/>
							<Checkbox
								label={t("form_calculator.label_4_check_3")}
								id={"roof-orientation-check-3"}
								name={"roofOrientation"}
								handleChange={handleChange}
							/>
							<Checkbox
								label={t("form_calculator.label_4_check_4")}
								id={"roof-orientation-check-4"}
								name={"roofOrientation"}
								handleChange={handleChange}
							/>
						</div>
					</div>
					<p>{t("form_calculator.sec_title_2")}</p>
					<div className="form-calculator__form-container">
						<p style={{ marginBottom: 10 }}>
							{t("form_calculator.label_5")} (kWh)
						</p>
						<div
							style={{ display: "flex", flexDirection: "column", rowGap: 5 }}
						>
							<Checkbox
								label={t("form_calculator.label_5_check_1")}
								id={"electricity-consumption-1"}
								name={"electricityConsumption"}
								handleChange={handleChange}
							/>
							<Checkbox
								label={t("form_calculator.label_5_check_2")}
								id={"electricity-consumption-2"}
								name={"electricityConsumption"}
								handleChange={handleChange}
							/>
						</div>
					</div>
					<div className="form-calculator__form-container">
						<p style={{ marginBottom: 10 }}>{t("form_calculator.label_6")}</p>
						<div
							style={{ display: "flex", flexDirection: "column", rowGap: 5 }}
						>
							<Checkbox
								label={t("form_calculator.label_6_check_1")}
								id={"electricity-price-1"}
								name={"electricityPrice"}
								handleChange={handleChange}
							/>
							<Checkbox
								label={t("form_calculator.label_6_check_2")}
								id={"electricity-price-2"}
								name={"electricityPrice"}
								handleChange={handleChange}
							/>
						</div>
					</div>
					<p>{t("form_calculator.sec_title_3")}</p>
					<div className="form-calculator__form-container">
						<div>
							<p style={{ marginBottom: 10 }}>
								{t("form_calculator.label_7")}?
							</p>
							<div
								style={{ display: "flex", flexDirection: "column", rowGap: 5 }}
							>
								<Checkbox
									label={t("form_calculator.label_7_check_1")}
									id={"shielding-1"}
									name={"shielding"}
									handleChange={handleChange}
								/>
								<Checkbox
									label={t("form_calculator.label_7_check_2")}
									id={"shielding-2"}
									name={"shielding"}
									handleChange={handleChange}
								/>
								<Checkbox
									label={t("form_calculator.label_7_check_3")}
									id={"shielding-3"}
									name={"shielding"}
									handleChange={handleChange}
								/>
							</div>
						</div>
					</div>
					<div className="form-calculator__form-container">
						<p style={{ marginBottom: 10 }}>{t("form_calculator.label_8")}</p>
						<div
							style={{ display: "flex", flexDirection: "column", rowGap: 5 }}
						>
							<Checkbox
								label={t("form_calculator.label_8_check_1")}
								id={"roof-condition-1"}
								name={"roofCondition"}
								handleChange={handleChange}
							/>
							<Checkbox
								label={t("form_calculator.label_8_check_2")}
								id={"roof-condition-2"}
								name={"roofCondition"}
								handleChange={handleChange}
							/>
						</div>
					</div>
					<p>{t("form_calculator.sec_title_4")}</p>
					<div className="form-calculator__form-container">
						<p style={{ marginBottom: 10 }}>{t("form_calculator.label_9")}?</p>
						<div
							style={{ display: "flex", flexDirection: "column", rowGap: 5 }}
						>
							<Checkbox
								label={t("form_calculator.label_9_check_1")}
								id={"battery-storage-1"}
								name={"batteryStorage"}
								handleChange={handleChange}
							/>
							<Checkbox
								label={t("form_calculator.label_9_check_2")}
								id={"battery-storage-2"}
								name={"batteryStorage"}
								handleChange={handleChange}
							/>
						</div>
					</div>
					<div className="form-calculator__form-container">
						<p style={{ marginBottom: 10 }}>{t("form_calculator.label_10")}?</p>
						<div
							style={{ display: "flex", flexDirection: "column", rowGap: 5 }}
						>
							<Checkbox
								label={t("form_calculator.label_10_check_1")}
								id={"subsidies-1"}
								name={"subsidies"}
								handleChange={handleChange}
							/>
							<Checkbox
								label={t("form_calculator.label_10_check_2")}
								id={"subsidies-2"}
								name={"subsidies"}
								handleChange={handleChange}
							/>
						</div>
					</div>
					<p>{t("contact.info")}</p>
					<div className="form-calculator__input-text-container">
						<label htmlFor="">{t("contact.first_name")}</label>
						<input
							onChange={handleChange}
							name="name"
							className="form-calculator__input"
							value={inputs.name}
							type="text"
						/>
					</div>
					<div className="form-calculator__input-text-container">
						<label htmlFor="email">E-mail</label>
						<input
							onChange={handleChange}
							className="form-calculator__input"
							type="email"
							name="email"
							value={inputs.email}
							id="email"
						/>
					</div>
					<div className="form-calculator__input-text-container">
						<label htmlFor="">{t("contact.tel")}</label>
						<input
							onChange={handleChange}
							className="form-calculator__input"
							value={inputs.tel}
							type="tel"
							name="tel"
							id=""
						/>
					</div>
					<button className="form-calculator__btn" type="submit">
						{t("contact.send")}
					</button>
				</form>
			</main>
		</>
	);
};

export default FormCalculator;
