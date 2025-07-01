import "./AboutUs.scss";

const AboutUs = () => {
	return (
		<>
			<div>
				<h2 className="about-us">About us in numbers</h2>
				<div className="stats">
					<div>
						<p>instalací ročně</p>
						<p className="process-count">
							{"50+".split("").map((char, index) => {
								return (
									<span key={index} className="char">
										{char}
									</span>
								);
							})}
						</p>
					</div>
					<div>
						<p>zemí</p>
						<p className="process-count">
							{"20+".split("").map((char, index) => {
								return (
									<span key={index} className="char">
										{char}
									</span>
								);
							})}
						</p>
					</div>
					<div>
						<p>let zkušeností</p>
						<p className="process-count">
							{"12".split("").map((char, index) => {
								return (
									<span key={index} className="char">
										{char}
									</span>
								);
							})}
						</p>
					</div>
					<div>
						<p>podporovaných zařízení</p>
						<p className="process-count">
							{"1000+".split("").map((char, index) => {
								return (
									<span key={index} className="char">
										{char}
									</span>
								);
							})}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutUs;
