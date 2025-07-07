import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import "./Product.scss";
import ContactUs from "../../components/ContactUs/ContactUs";
import bg from "/bg3.svg";

const Product = () => {
	return (
		<>
			<Helmet>
				<title>MaxFlow | Product</title>
				<link rel="canonical" href="https://maxflow.cz/product" />
			</Helmet>
			<main className="product">
				<div>
					<div className="product__top-container">
						<div className="product__top-container-inner">
							<div>
								<h1>Product</h1>
								<h2 className="product__section1-title" id="product-section-1">
									Why MaxFlow 360&deg; for SVJ?
								</h2>
							</div>
						</div>
						<div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									justifySelf: "flex-end",
									alignItems: "flex-end",
								}}
							>
								<img
									style={{ justifySelf: "flex-end" }}
									width={500}
									src={bg}
									alt=""
								/>
								<p style={{ marginBottom: 25, marginTop: 25 }}>
									Finally, Fair Energy Distribution for Your Building – No More
									Arguments or Paperwork
								</p>
							</div>
							<div className="product__section1-container sect-1">
								<p>Common Pain Points We Solve:</p>
								<ul>
									<li>
										"Paying high energy bills with no clarity on actual usage?"
									</li>
									<li>"Neighbors arguing over who owes what?"</li>
									<li>
										"Worried that solar installation will be too complicated or
										disruptive?"
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div
						style={{
							border: "3px dashed white",
							borderRadius: 10,
							padding: 15,
						}}
					>
						<h3>Here’s How MaxFlow 360&deg; Helps:</h3>
						<p style={{ marginBottom: 25 }}>
							MaxFlow offers a complete energy management system built
							specifically for SVJs with or without shared PV systems.
						</p>
						<div className="product__section1-container">
							<p>Key Features for SVJs:</p>
							<ul>
								<li>
									Automatic, Fair Allocation:
									<span>
										Tracks energy consumption per apartment in real time – no
										more guesswork or disputes.
									</span>
								</li>
								<li>
									One-Click Billing Reports:
									<span>
										Our platform instantly generates monthly billing summaries
										for each unit.
									</span>
								</li>
								<li>
									We Handle Everything:
									<span>
										From subsidy applications to complete installation, we take
										care of the full process.
									</span>
								</li>
							</ul>
						</div>
					</div>
					<h3 style={{ marginBottom: 25 }}>
						Case Study: Results That Speak for Themselves
					</h3>
					<div className="product__section1-container sect-2">
						<p>After implementing MaxFlow:</p>
						<ul>
							<li>Reduced energy overflow by 65%</li>
							<li>Average monthly savings of 28% on common energy bills</li>
							<li>
								ROI on their solar system improved from 11 to just 6.5 years
							</li>
							<li>
								Transparent energy allocation led to fewer complaints and
								improved resident satisfaction
							</li>
						</ul>
					</div>
				</div>

				<div>
					<h2 id="product-section-2">MaxFlow 360&deg; Cloud Platform</h2>
					<p style={{ marginBottom: 25 }}>
						All Your Energy Data in One Place – Anytime, Anywhere
					</p>
					<div className="product__section1-container">
						<p>Key Features:</p>
						<ul>
							<li>
								Live Monitoring
								<span>
									Track real-time solar production and building consumption in
									one simple view.
								</span>
							</li>
							<li>
								AI Energy Forecasts
								<span>
									Get smart alerts when it’s the best time to sell surplus
									energy – maximize your returns automatically
								</span>
							</li>
							<li>
								Mobile App Access
								<span>
									Monitor, manage, and export energy data right from your phone
									– anytime, anywhere.
								</span>
							</li>
						</ul>
					</div>
				</div>
				<ContactUs>
					<p className="contact-us__title">
						Ready to empower your SVJ with intelligent energy?
					</p>
					<div>
						<p>
							Let MaxFlow 360&deg; turn your building into a self-managing,
							cost-efficient, solar-powered community.
						</p>
						<NavLink className="contact-us__link" to={"/contact"}>
							<span>Chci nabídku</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="20px"
								viewBox="0 -960 960 960"
								width="20px"
								fill="#ffffff"
							>
								<path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
							</svg>
						</NavLink>
					</div>
				</ContactUs>
			</main>
		</>
	);
};

export default Product;
