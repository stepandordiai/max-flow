import "./FormCalculator.scss";

const FormCalculator = () => {
	return (
		<div className="form-calculator">
			<form action="">
				<div>
					<label htmlFor="">Number of housing units</label>
					<input
						type="range"
						name=""
						min={0}
						max={100}
						step={1}
						defaultValue={0}
						id=""
					/>
				</div>
				<div>
					<label htmlFor="">Number of entrances</label>
					<input
						type="range"
						name=""
						min={0}
						max={10}
						step={1}
						defaultValue={0}
						id=""
					/>
				</div>
				<div>
					<p>Roof type</p>
					<div>
						<input type="checkbox" name="" id="" />
						<label htmlFor="">Flat</label>
					</div>
					<div>
						<input type="checkbox" name="" id="" />
						<label htmlFor="">Oblique</label>
					</div>
					<div>
						<input type="checkbox" name="" id="" />
						<label htmlFor="">Combined</label>
					</div>
				</div>
				<div>
					<p>Roof orientation</p>
					<div>
						<input type="checkbox" name="" id="" />
						<label htmlFor="">North</label>
					</div>
					<div>
						<input type="checkbox" name="" id="" />
						<label htmlFor="">South</label>
					</div>
					<div>
						<input type="checkbox" name="" id="" />
						<label htmlFor="">East</label>
					</div>
					<div>
						<input type="checkbox" name="" id="" />
						<label htmlFor="">West</label>
					</div>
				</div>
				<div>
					<p>Annual house consumption</p>
					<div>
						<input type="checkbox" name="" id="" />
						<label htmlFor="">North</label>
					</div>
					<div>
						<input type="checkbox" name="" id="" />
						<label htmlFor="">South</label>
					</div>
					<div>
						<input type="checkbox" name="" id="" />
						<label htmlFor="">East</label>
					</div>
					<div>
						<input type="checkbox" name="" id="" />
						<label htmlFor="">West</label>
					</div>
				</div>
			</form>
		</div>
	);
};

export default FormCalculator;
