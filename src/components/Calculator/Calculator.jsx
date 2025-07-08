import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import "./Calculator.scss";

const Calculator = () => {
	const { t } = useTranslation();

	const [inputs, setInputs] = useState({
		houseUnits: 35,
		purchasePrice: 8340,
		electricityPrice: 1500,
		batterySize: 35,
	});

	const handleInputsOnChange = (e) => {
		const { name, value } = e.target;

		setInputs((prev) => ({ ...prev, [name]: value }));
	};

	const yearConsumption = inputs.houseUnits * 1000 * 1000 * 0.43;

	const uspora = (yearConsumption * inputs.purchasePrice) / 1000;

	const usporaAll =
		(inputs.houseUnits *
			1000000 *
			0.43 *
			(inputs.purchasePrice - inputs.electricityPrice)) /
		1000000;

	const usporaBut = usporaAll / 35;

	const cena = inputs.houseUnits * 35000 + inputs.batterySize * 15000;

	const year = cena / 2 / usporaAll;

	useEffect(() => {
		const ranger = document.querySelector(".range");

		const value = 35;
		const max = 80;
		const percent = (value / max) * 100;

		// Initial range width
		const bgRange = document.querySelector(".bg-range");
		bgRange.style.width = `${percent}%`;

		ranger.addEventListener("input", (e) => {
			const value = e.target.value;
			// TODO:
			const percent = (value / e.target.max) * 100;
			document.querySelector(".bg-range").style.width = percent + "%";
		});
	}, []);
	return (
		<div className="calculator">
			<h2 className="calculator__title">{t("calculator.title")}</h2>
			<div className="calculator__inner">
				<div className="calculator__inputs-container">
					<div className="calculator__inputs-top">
						<div style={{ width: "100%" }}>
							<label
								style={{ display: "inline-block", marginBottom: 5 }}
								htmlFor="calculator__input1"
							>
								{t("calculator.input1")}
							</label>
							<input
								onChange={handleInputsOnChange}
								value={inputs.houseUnits}
								name="houseUnits"
								className="calc__input"
								id="calculator__input1"
								type="text"
							/>
						</div>
						<div style={{ width: "100%" }}>
							<label
								style={{ display: "inline-block", marginBottom: 5 }}
								htmlFor="calculator__input2"
							>
								{t("calculator.input2")} (MWh)
							</label>
							<input
								onChange={handleInputsOnChange}
								value={inputs.purchasePrice}
								name="purchasePrice"
								className="calc__input"
								id="calculator__input2"
								type="text"
							/>
						</div>
					</div>
					<div>
						<label
							style={{ display: "inline-block", marginBottom: 5 }}
							htmlFor="calculator__input3"
						>
							{t("calculator.input3")} (MWh)
						</label>
						<input
							onChange={handleInputsOnChange}
							value={inputs.electricityPrice}
							name="electricityPrice"
							className="calc__input"
							id="calculator__input3"
							type="text"
						/>
					</div>
				</div>
				<div className="calculator__range-wrapper">
					<label
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
						htmlFor="calculator__input4"
					>
						<span>{t("calculator.input4")}</span>
						<span>
							<span style={{ fontWeight: 600 }}>{inputs.batterySize}</span> kWh
						</span>
					</label>
					<div className="calculator__range-container">
						<div className="bg-range"></div>
						<input
							onChange={handleInputsOnChange}
							className="range"
							value={inputs.batterySize}
							name="batterySize"
							type="range"
							min={0}
							max={80}
							step={1}
							id="calculator__input4"
						/>
					</div>
					<div
						style={{
							position: "relative",
							display: "flex",
							justifyContent: "space-between",
							fontWeight: 600,
						}}
					>
						<span>0</span>
						<span
							style={{
								position: "absolute",
								left: "50%",
								transform: "translateX(-50%)",
							}}
						>
							40
						</span>
						<span>80</span>
					</div>
				</div>
			</div>
			<div className="calculator__bottom-wrapper">
				<div className="calculator__bottom-container">
					<p
						style={{
							fontSize: "1.5rem",
							color: "var(--bg-clr)",
							fontWeight: 500,
							marginBottom: 15,
						}}
					>
						MaxFlow 360 &deg;
					</p>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							flexWrap: "wrap",
							gap: 30,
						}}
					>
						<div
							style={{
								backgroundColor: "var(--accent-bg-clr)",
								color: "var(--bg-clr)",
								padding: "10px",
								borderRadius: "5px",
							}}
						>
							<p>
								{t("calculator.txt1")}:{" "}
								<span style={{ fontWeight: 600 }}>{inputs.houseUnits}</span> kWp
							</p>
							<p>
								{t("calculator.input4")}:{" "}
								<span style={{ fontWeight: 600 }}>{inputs.batterySize}</span>{" "}
								kWh
							</p>
							<p>
								{t("calculator.txt2")} FVE:{" "}
								<span style={{ fontWeight: 600 }}>42</span> %
							</p>
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "space-evenly",
								alignItems: "center",
								backgroundColor: "var(--bg-clr)",
								color: "#fff",
								padding: "10px",
								borderRadius: "5px",
							}}
						>
							<p
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									columnGap: 5,
								}}
							>
								<span style={{ fontSize: "2rem" }}>
									<i className="fa-solid fa-building"></i>
								</span>
								<span style={{ display: "flex", flexDirection: "column" }}>
									<span>
										<span style={{ fontWeight: 600 }}>{usporaAll}</span> Kč
									</span>
									<span>{t("calculator.txt3")}</span>
								</span>
							</p>
							<p
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									columnGap: 5,
								}}
							>
								<span style={{ fontSize: "2rem" }}>
									<i className="fa-solid fa-piggy-bank"></i>
								</span>
								<span style={{ display: "flex", flexDirection: "column" }}>
									<span>
										<span style={{ fontWeight: 600 }}>
											{usporaBut.toFixed(0)}
										</span>{" "}
										Kč
									</span>
									<span>{t("calculator.txt4")}</span>
								</span>
							</p>
						</div>
						<div
							style={{
								backgroundColor: "var(--accent-bg-clr)",
								color: "var(--bg-clr)",
								padding: "10px",
								borderRadius: "5px",
							}}
						>
							<p>
								{t("calculator.txt5")}:{" "}
								<span style={{ fontWeight: 600 }}>{cena}</span>
							</p>
							<p>
								{t("calculator.txt6")}:{" "}
								<span style={{ fontWeight: 600 }}>{cena / 2}</span>
							</p>
						</div>
						<div
							style={{
								backgroundColor: "var(--accent-bg-clr)",
								color: "var(--bg-clr)",
								padding: "10px",
								borderRadius: "5px",
							}}
						>
							<p>
								{t("calculator.txt7")}:{" "}
								<span style={{ fontWeight: 600 }}>{cena / 2}</span> Kč
							</p>
							<p>
								{t("calculator.txt8")}:{" "}
								<span style={{ fontWeight: 600 }}>{year.toFixed(1)}</span> let
							</p>
						</div>
					</div>
				</div>
				<div className="calculator__bottom-container">
					<p style={{ fontSize: "1.5rem", fontWeight: 500, marginBottom: 15 }}>
						Běžná komunita
					</p>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							flexWrap: "wrap",
							gap: 30,
						}}
					>
						<div
							style={{
								backgroundColor: "rgba(0,0,0, 0.05)",
								padding: "10px",
								borderRadius: "5px",
							}}
						>
							<p>
								{t("calculator.txt1")}:{" "}
								<span style={{ fontWeight: 600 }}>{inputs.houseUnits}</span> kWp
							</p>
							<p>
								{t("calculator.input4")}:{" "}
								<span style={{ fontWeight: 600 }}>{inputs.batterySize}</span>{" "}
								kWh
							</p>
							<p>{t("calculator.txt2")} FVE: %</p>
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "space-evenly",
								alignItems: "center",
								backgroundColor: "rgba(0,0,0, 0.05)",
								padding: "10px",
								borderRadius: "5px",
							}}
						>
							<p
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									columnGap: 5,
								}}
							>
								<span style={{ fontSize: "2rem" }}>
									<i className="fa-solid fa-building"></i>
								</span>
								<span style={{ display: "flex", flexDirection: "column" }}>
									<span>
										<span style={{ fontWeight: 600 }}>{usporaAll}</span> Kč
									</span>
									<span>{t("calculator.txt3")}</span>
								</span>
							</p>
							<p
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									columnGap: 5,
								}}
							>
								<span style={{ fontSize: "2rem" }}>
									<i className="fa-solid fa-piggy-bank"></i>
								</span>
								<span style={{ display: "flex", flexDirection: "column" }}>
									<span>
										<span style={{ fontWeight: 600 }}>
											{usporaBut.toFixed(0)}
										</span>{" "}
										Kč
									</span>
									<span>{t("calculator.txt4")}</span>
								</span>
							</p>
						</div>
						<div
							style={{
								backgroundColor: "rgba(0,0,0, 0.05)",
								padding: "10px",
								borderRadius: "5px",
							}}
						>
							<p>
								{t("calculator.txt5")}:{" "}
								<span style={{ fontWeight: 600 }}>{cena}</span>
							</p>
							<p>
								{t("calculator.txt6")}:{" "}
								<span style={{ fontWeight: 600 }}>{cena / 2}</span>
							</p>
						</div>
						<div
							style={{
								backgroundColor: "rgba(0,0,0, 0.05)",
								padding: "10px",
								borderRadius: "5px",
							}}
						>
							<p>
								{t("calculator.txt7")}:{" "}
								<span style={{ fontWeight: 600 }}>{cena / 2}</span> Kč
							</p>
							<p>
								{t("calculator.txt8")}:{" "}
								<span style={{ fontWeight: 600 }}>{year.toFixed(1)}</span> let
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calculator;
