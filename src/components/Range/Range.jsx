import "./Range.scss";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const Range = ({ handleInputsOnChange, value, maxValue, name, label }) => {
	const { t } = useTranslation();

	const bgRangeRef = useRef(null);

	useEffect(() => {
		const percent = (value / maxValue) * 100;
		if (bgRangeRef.current) {
			bgRangeRef.current.style.width = `${percent}%`;
		}
	}, [value]);
	return (
		<>
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
					<span>{label}</span>
					<span>
						<span style={{ fontWeight: 600 }}>{value}</span> kWh
					</span>
				</label>
				<div className="calculator__range-container">
					<div className="bg-range" ref={bgRangeRef}></div>
					<input
						onChange={handleInputsOnChange}
						className="range"
						value={value}
						name={name}
						type="range"
						min={0}
						max={maxValue}
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
						{maxValue / 2}
					</span>
					<span>{maxValue}</span>
				</div>
			</div>
		</>
	);
};

export default Range;
