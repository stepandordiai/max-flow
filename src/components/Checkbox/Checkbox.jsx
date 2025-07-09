import "./Checkbox.scss";

const Checkbox = ({ label, handleChange, id, name }) => {
	return (
		<>
			<div className="form-calculator__input-container">
				<input
					onChange={handleChange}
					type="checkbox"
					name={name}
					value={label}
					id={id}
				/>
				<label htmlFor={id}>{label}</label>
			</div>
		</>
	);
};

export default Checkbox;
