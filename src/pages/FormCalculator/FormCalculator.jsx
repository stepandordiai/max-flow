import { useState } from "react";
import "./FormCalculator.scss";
import Checkbox from "../../components/Checkbox/Checkbox";

const FormCalculator = () => {
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

	console.log(inputs.roofType);

	return (
		<div className="form-calculator">
			<h1 className="form-calculator__title">
				PV calculator for apartment buildings / SVJ
			</h1>
			<form
				className="form"
				action="https://formspree.io/f/xovddpld"
				method="POST"
			>
				<p>Basic information about the house</p>
				<div
					style={{ display: "flex", justifyContent: "space-between", gap: 15 }}
				>
					<div className="form-calculator__form-container">
						<label style={{ marginBottom: 5 }} htmlFor="">
							Number of housing units
						</label>
						<input
							style={{ width: "100%" }}
							onChange={handleChange}
							type="range"
							name="housingUnits"
							min={0}
							max={100}
							step={1}
							value={inputs.housingUnits}
							id=""
						/>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<span>0</span>
							<span>50</span>
							<span>100</span>
						</div>
					</div>
					<div className="form-calculator__form-container">
						<label htmlFor="" style={{ marginBottom: 5 }}>
							Number of entrances
						</label>
						<input
							style={{ width: "100%" }}
							onChange={handleChange}
							type="range"
							name="entrances"
							min={0}
							max={10}
							step={1}
							value={inputs.entrances}
							id=""
						/>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<span>0</span>
							<span>5</span>
							<span>10</span>
						</div>
					</div>
				</div>
				<div className="form-calculator__form-container">
					<p style={{ marginBottom: 10 }}>Roof type</p>
					<div style={{ display: "flex", flexDirection: "column", rowGap: 5 }}>
						<Checkbox
							label={"Flat"}
							id={"roof-type-check-1"}
							name={"roofType"}
							handleChange={handleChange}
						/>
						<Checkbox
							label={"Oblique"}
							id={"roof-type-check-2"}
							name={"roofType"}
							handleChange={handleChange}
						/>
						<Checkbox
							label={"Combined"}
							id={"roof-type-check-3"}
							name={"roofType"}
							handleChange={handleChange}
						/>
					</div>
				</div>
				<div className="form-calculator__form-container">
					<p style={{ marginBottom: 10 }}>Roof orientation</p>
					<div style={{ display: "flex", flexDirection: "column", rowGap: 5 }}>
						<Checkbox
							label={"North"}
							id={"roof-orientation-check-1"}
							name={"roofOrientation"}
							handleChange={handleChange}
						/>
						<Checkbox
							label={"South"}
							id={"roof-orientation-check-2"}
							name={"roofOrientation"}
							handleChange={handleChange}
						/>
						<Checkbox
							label={"East"}
							id={"roof-orientation-check-3"}
							name={"roofOrientation"}
							handleChange={handleChange}
						/>
						<Checkbox
							label={"West"}
							id={"roof-orientation-check-4"}
							name={"roofOrientation"}
							handleChange={handleChange}
						/>
					</div>
				</div>
				<p>Electricity consumption</p>
				<div className="form-calculator__form-container">
					<p style={{ marginBottom: 10 }}>Annual house consumption (kWh)</p>
					<div style={{ display: "flex", flexDirection: "column", rowGap: 5 }}>
						<Checkbox
							label={
								"I don't know (we will estimate based on the number of apartments)"
							}
							id={"electricity-consumption-1"}
							name={"electricityConsumption"}
							handleChange={handleChange}
						/>
						<div>
							{/* <input
								onChange={handleChange}
								type="checkbox"
								name="electricityConsumption"
								value={"I know"}
								id=""
								/> */}
							<label htmlFor="">I know: ____ kWh/year</label>
							<input
								onChange={handleChange}
								name="electricityConsumption"
								type="text"
								value={inputs.electricityConsumption}
								placeholder="I know"
							/>
						</div>
					</div>
				</div>
				<div className="form-calculator__form-container">
					<p style={{ marginBottom: 10 }}>
						Current electricity price (for calculating savings)
					</p>
					<div style={{ display: "flex", flexDirection: "column", rowGap: 5 }}>
						<Checkbox
							label={"Unknown *(average of ~5 CZK/kWh is used)*"}
							id={"electricity-price-1"}
							name={"electricityPrice"}
							handleChange={handleChange}
						/>
						<Checkbox
							label={"I know: ____ CZK/kWh"}
							id={"electricity-price-2"}
							name={"electricityPrice"}
							handleChange={handleChange}
						/>
					</div>
				</div>
				<p>Shielding and roof condition</p>
				<div className="form-calculator__form-container">
					<div>
						<p style={{ marginBottom: 10 }}>
							Does the roof have any shielding? (chimneys, trees, tall
							buildings)
						</p>
						<div
							style={{ display: "flex", flexDirection: "column", rowGap: 5 }}
						>
							<Checkbox
								label={"Yes(mild)"}
								id={"shielding-1"}
								name={"shielding"}
								handleChange={handleChange}
							/>
							<Checkbox
								label={"Yes(strong)"}
								id={"shielding-2"}
								name={"shielding"}
								handleChange={handleChange}
							/>
							<Checkbox
								label={"No"}
								id={"shielding-3"}
								name={"shielding"}
								handleChange={handleChange}
							/>
						</div>
					</div>
				</div>
				<div className="form-calculator__form-container">
					<p style={{ marginBottom: 10 }}>Roof condition</p>
					<div style={{ display: "flex", flexDirection: "column", rowGap: 5 }}>
						<Checkbox
							label={"New / in good condition"}
							id={"roof-condition-1"}
							name={"roofCondition"}
							handleChange={handleChange}
						/>
						<Checkbox
							label={"Reconstruction will be necessary"}
							id={"roof-condition-2"}
							name={"roofCondition"}
							handleChange={handleChange}
						/>
					</div>
				</div>
				<p>Interest in other elements</p>
				<div className="form-calculator__form-container">
					<p style={{ marginBottom: 10 }}>Battery storage?</p>
					<div style={{ display: "flex", flexDirection: "column", rowGap: 5 }}>
						<Checkbox
							label={"Yes (how big? ____ kWh)"}
							id={"battery-storage-1"}
							name={"batteryStorage"}
							handleChange={handleChange}
						/>
						<Checkbox
							label={"No"}
							id={"battery-storage-2"}
							name={"batteryStorage"}
							handleChange={handleChange}
						/>
						<Checkbox
							label={
								"Based on installed capacity, standard for calculation according to subsidy coefficient 1.5"
							}
							id={"battery-storage-3"}
							name={"batteryStorage"}
							handleChange={handleChange}
						/>
					</div>
				</div>
				<div className="form-calculator__form-container">
					<p style={{ marginBottom: 10 }}>Subsidies (New Green Savings)?</p>
					<div style={{ display: "flex", flexDirection: "column", rowGap: 5 }}>
						<Checkbox
							label={"Yes, I am interested"}
							id={"subsidies-1"}
							name={"subsidies"}
							handleChange={handleChange}
						/>
						<Checkbox
							label={"No"}
							id={"subsidies-2"}
							name={"subsidies"}
							handleChange={handleChange}
						/>
					</div>
				</div>
				<p>Contact information</p>
				<div className="form-calculator__input-text-container">
					<label htmlFor="">Jmeno</label>
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
					<label htmlFor="">Phone number</label>
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
					Submit
				</button>
			</form>
		</div>
	);
};

export default FormCalculator;
