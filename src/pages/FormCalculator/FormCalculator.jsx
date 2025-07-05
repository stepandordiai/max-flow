import { useState } from "react";
import "./FormCalculator.scss";

const FormCalculator = () => {
	const [inputs, setInputs] = useState({
		housingUnits: "",
		entrances: "",
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
		const { name, value } = e.target;

		setInputs((prev) => ({
			...prev,
			[name]: value,
		}));
	};

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
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<div className="form-calculator__input-container">
							<input
								onChange={handleChange}
								type="checkbox"
								name="roofType"
								value={"Flat"}
								id="roof-type-check-1"
							/>
							<label htmlFor="roof-type-check-1">Flat</label>
						</div>
						<div className="form-calculator__input-container">
							<input
								onChange={handleChange}
								type="checkbox"
								name="roofType"
								value={"Oblique"}
								id="roof-type-check-2"
							/>
							<label htmlFor="roof-type-check-2">Oblique</label>
						</div>
						<div className="form-calculator__input-container">
							<input
								onChange={handleChange}
								type="checkbox"
								name="roofType"
								value={"Combined"}
								id="roof-type-check-3"
							/>
							<label htmlFor="roof-type-check-3">Combined</label>
						</div>
					</div>
				</div>
				<div className="form-calculator__form-container">
					<p style={{ marginBottom: 10 }}>Roof orientation</p>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<div className="form-calculator__input-container">
							<input
								onChange={handleChange}
								type="checkbox"
								value={"North"}
								name="roofOrientation"
								id="roof-orientation-check-1"
							/>
							<label htmlFor="roof-orientation-check-1">North</label>
						</div>
						<div className="form-calculator__input-container">
							<input
								onChange={handleChange}
								type="checkbox"
								value={"South"}
								name="roofOrientation"
								id="roof-orientation-check-2"
							/>
							<label htmlFor="roof-orientation-check-2">South</label>
						</div>
						<div className="form-calculator__input-container">
							<input
								onChange={handleChange}
								type="checkbox"
								value={"East"}
								name="roofOrientation"
								id="roof-orientation-check-3"
							/>
							<label htmlFor="roof-orientation-check-3">East</label>
						</div>
						<div className="form-calculator__input-container">
							<input
								onChange={handleChange}
								type="checkbox"
								value={"West"}
								name="roofOrientation"
								id="roof-orientation-check-4"
							/>
							<label htmlFor="roof-orientation-check-4">West</label>
						</div>
					</div>
				</div>
				<p>Electricity consumption</p>
				<div className="form-calculator__form-container">
					<p style={{ marginBottom: 10 }}>Annual house consumption (kWh)</p>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<div className="form-calculator__input-container">
							{/* <input type="checkbox" /> */}
							<input
								onChange={handleChange}
								type="checkbox"
								name="electricityConsumption"
								value={"I don't know"}
								id=""
							/>
							<label htmlFor="">
								I don't know (we will estimate based on the number of
								apartments)
							</label>
						</div>
						<div>
							{/* <input
								onChange={handleChange}
								type="checkbox"
								name="electricityConsumption"
								value={"I know"}
								id=""
							/> */}
							{/* <label htmlFor="">I know: ____ kWh/year</label> */}
							<input
								onChange={handleChange}
								name="electricityConsumption"
								type="text"
								value={inputs.electricityConsumption}
							/>
						</div>
					</div>
				</div>

				<div className="form-calculator__form-container">
					<p style={{ marginBottom: 10 }}>
						Current electricity price (for calculating savings)
					</p>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<div className="form-calculator__input-container">
							<input
								onChange={handleChange}
								type="checkbox"
								name="electricityPrice"
								value={"Unknown"}
								id="electricity-price-1"
							/>
							<label htmlFor="electricity-price-1">
								Unknown *(average of ~5 CZK/kWh is used)*
							</label>
						</div>
						<div className="form-calculator__input-container">
							<input
								onChange={handleChange}
								type="checkbox"
								name="electricityPrice"
								value={"Iknow"}
								id="electricity-price-2"
							/>
							<label htmlFor="electricity-price-2">I know: ____ CZK/kWh</label>
						</div>
					</div>
				</div>
				<p>Shielding and roof condition</p>
				<div className="form-calculator__form-container">
					<div>
						<p>
							Does the roof have any shielding? (chimneys, trees, tall
							buildings)
						</p>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<div className="form-calculator__input-container">
								<input
									onChange={handleChange}
									type="checkbox"
									name="roofCondition"
									value={"Yes(mild)"}
									id="shielding-1"
								/>
								<label htmlFor="shielding-1">Yes(mild)</label>
							</div>
							<div>
								<input
									onChange={handleChange}
									type="checkbox"
									name="roofCondition"
									value={"Yes(strong)"}
									id="shielding-2"
								/>
								<label htmlFor="shielding-2">Yes(strong)</label>
							</div>
							<div>
								<input
									onChange={handleChange}
									type="checkbox"
									name="roofCondition"
									value={"No"}
									id="shielding-3"
								/>
								<label htmlFor="shielding-3">No</label>
							</div>
						</div>
					</div>
				</div>
				<div className="form-calculator__form-container">
					<p style={{ marginBottom: 10 }}>Roof condition</p>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<div>
							<input
								onChange={handleChange}
								type="checkbox"
								name="roofCondition"
								value={"New / in good condition"}
								id="roof-condition-1"
							/>
							<label htmlFor="roof-condition-1">New / in good condition</label>
						</div>
						<div>
							<input
								onChange={handleChange}
								type="checkbox"
								name="roofCondition"
								value="Reconstruction will be necessary"
								id="roof-condition-2"
							/>
							<label htmlFor="roof-condition-2">
								Reconstruction will be necessary
							</label>
						</div>
					</div>
				</div>
				<p>Interest in other elements</p>
				<div className="form-calculator__form-container">
					<p style={{ marginBottom: 10 }}>Battery storage?</p>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<div>
							<input
								onChange={handleChange}
								type="checkbox"
								name="batteryStorage"
								value="Yes"
								id="battery-storage-1"
							/>
							<label htmlFor="battery-storage-1">Yes (how big? ____ kWh)</label>
						</div>
						<div>
							<input
								onChange={handleChange}
								type="checkbox"
								name="batteryStorage"
								value="No"
								id="battery-storage-2"
							/>
							<label htmlFor="battery-storage-2">No</label>
						</div>
					</div>
					<div>
						<input
							onChange={handleChange}
							type="checkbox"
							name="batteryStorage"
							value="Based on installed capacity, standard for calculation according to
							subsidy coefficient 1.5"
							id="battery-storage-3"
						/>
						<label htmlFor="battery-storage-3">
							Based on installed capacity, standard for calculation according to
							subsidy coefficient 1.5
						</label>
					</div>
				</div>
				<div className="form-calculator__form-container">
					<p style={{ marginBottom: 10 }}>Subsidies (New Green Savings)?</p>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<div>
							<input
								onChange={handleChange}
								type="checkbox"
								name="subsidies"
								value="Yes, I am interested"
								id="subsidies-1"
							/>
							<label htmlFor="subsidies-1">Yes, I am interested</label>
						</div>
						<div>
							<input
								onChange={handleChange}
								type="checkbox"
								name="subsidies"
								value="No"
								id="subsidies-2"
							/>
							<label htmlFor="subsidies-2">No</label>
						</div>
					</div>
				</div>
				<p>Contact information</p>
				<div className="form-calculator__input-text-container">
					<label htmlFor="">Jmeno</label>
					<input
						onChange={handleChange}
						// id="name"
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
