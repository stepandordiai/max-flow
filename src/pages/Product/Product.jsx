import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import "./Product.scss";
import ContactUs from "../../components/ContactUs/ContactUs";

const Product = () => {
	return (
		<>
			<Helmet>
				<title>MaxFlow | Product</title>
				<link rel="canonical" href="https://maxflow.cz/product" />
			</Helmet>
			<main className="product">
				{/* <h1>Product</h1> */}
				<div>
					<h2 className="product__section1-title">
						Why MaxFlow 360&deg; for SVJ?
					</h2>
					<p style={{ marginBottom: 25 }}>
						Finally, Fair Energy Distribution for Your Building – No More
						Arguments or Paperwork
					</p>
					<div className="product__section1-container">
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
									Tracks energy consumption per apartment in real time – no more
									guesswork or disputes.
								</span>
							</li>
							<li>
								One-Click Billing Reports:
								<span>
									Our platform instantly generates monthly billing summaries for
									each unit.
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
					<h3 style={{ marginBottom: 25 }}>
						Case Study: Results That Speak for Themselves
					</h3>
					<div className="product__section1-container">
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
					<h2>MaxFlow 360&deg; Cloud Platform</h2>
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
				<ContactUs />
			</main>
		</>
	);
};

export default Product;
