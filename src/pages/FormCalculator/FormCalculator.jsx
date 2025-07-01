import "./FormCalculator.scss";

const FormCalculator = () => {
	return (
		<div className="form-calculator">
			<h1 className="form-calculator__title">
				PV calculator for apartment buildings / SVJ
			</h1>
			<form className="form" action="">
				<div style={{ display: "flex", justifyContent: "space-between" }}>
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
				</div>
				<div>
					<p>Roof type</p>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
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
				</div>
				<div>
					<p>Roof orientation</p>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
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
				</div>
				<div>
					<p>Electricity consumption</p>
					<p>Annual house consumption (kWh)</p>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<div>
							<input type="checkbox" />
							<label htmlFor="">
								I don't know (we will estimate based on the number of
								apartments)
							</label>
						</div>
						<div>
							<input type="checkbox" />
							<label htmlFor="">I know: ____ kWh/year</label>
						</div>
					</div>
					<p>Current electricity price (for calculating savings)</p>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<div>
							<input type="checkbox" />
							<label htmlFor="">
								Unknown *(average of ~5 CZK/kWh is used)*
							</label>
						</div>
						<div>
							<input type="checkbox" />
							<label htmlFor="">I know: ____ CZK/kWh</label>
						</div>
					</div>
				</div>
				<div>
					<p>Shielding and roof condition</p>
					<div>
						<p>
							Does the roof have any shielding? (chimneys, trees, tall
							buildings)
						</p>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<div>
								<input type="checkbox" name="" id="" />
								<label htmlFor="">Yes(mild)</label>
							</div>
							<div>
								<input type="checkbox" name="" id="" />
								<label htmlFor="">Yes(strong)</label>
							</div>
							<div>
								<input type="checkbox" name="" id="" />
								<label htmlFor="">No</label>
							</div>
						</div>
					</div>
				</div>
				<div>
					<p>Roof condition</p>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<div>
							<input type="checkbox" name="" id="" />
							<label htmlFor="">New / in good condition</label>
						</div>
						<div>
							<input type="checkbox" name="" id="" />
							<label htmlFor="">Reconstruction will be necessary</label>
						</div>
					</div>
				</div>
				<div>
					<p>Interest in other elements</p>
					<p>Battery storage?</p>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<div>
							<input type="checkbox" name="" id="" />
							<label htmlFor="">Yes (how big? ____ kWh)</label>
						</div>
						<div>
							<input type="checkbox" name="" id="" />
							<label htmlFor="">No</label>
						</div>
					</div>
					<div>
						<input type="checkbox" name="" id="" />
						<label htmlFor="">
							Based on installed capacity, standard for calculation according to
							subsidy coefficient 1.5
						</label>
					</div>
				</div>
				<div>
					<p>Subsidies (New Green Savings)?</p>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<div>
							<input type="checkbox" name="" id="" />
							<label htmlFor="">Yes, I am interested</label>
						</div>
						<div>
							<input type="checkbox" name="" id="" />
							<label htmlFor="">No</label>
						</div>
					</div>
				</div>
				<div className="form-calculator__input-container">
					<label htmlFor="">Jmeno</label>
					<input className="form-calculator__input" type="text" />
				</div>
				<div className="form-calculator__input-container">
					<label htmlFor="">E-mail</label>
					<input
						className="form-calculator__input"
						type="email"
						name=""
						id=""
					/>
				</div>
				<div className="form-calculator__input-container">
					<label htmlFor="">Phone number</label>
					<input className="form-calculator__input" type="tel" name="" id="" />
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default FormCalculator;
