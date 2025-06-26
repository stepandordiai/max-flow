import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import "./Product.scss";

const Product = () => {
	return (
		<>
			<Helmet>
				<title>MaxFlow | Product</title>
				<link rel="canonical" href="https://maxflow.cz/product" />
			</Helmet>
			<main className="product">
				<h1>Product</h1>
				<h2 className="product__section1-title">Why MaxFlow for SVJ?</h2>
				<p>
					Managing energy in residential buildings is more complex than ever.
					SVJs often face high operating costs, confusing energy allocation, and
					rising pressure to integrate sustainable technologies — all while
					keeping residents happy.
				</p>
				<div className="product__section1-container">
					<p>Common SVJ Problems:</p>
					<ul>
						<li>Rising electricity distribution costs</li>
						<li>
							Unfair or outdated energy allocation keys between apartments
						</li>
						<li>
							Frequent grid overflows from solar systems with no local usage
							optimization
						</li>
						<li>
							Low return on solar investments due to unmanaged consumption
						</li>
					</ul>
				</div>
				<h2>Our Solution: Data-Driven Energy for SVJs</h2>
				<p>
					MaxFlow offers a complete energy management system built specifically
					for SVJs with or without shared PV systems.
				</p>
				<div className="product__section1-container">
					<p>Key Features for SVJs:</p>
					<ul>
						<li>
							Automatic allocation of solar production and consumption per
							apartment — based on real data, not flat-rate assumptions
						</li>
						<li>
							Reduction of grid overflows through intelligent load shifting and
							usage balancing
						</li>
						<li>
							Clear reporting and billing tools to simplify admin work and
							increase trust among residents
						</li>
						<li>
							Integrated with SOLARIS 360° AI forecasting, ensuring smarter
							energy planning and fewer surprises
						</li>
					</ul>
				</div>
				<h2>Case Study: Results That Speak for Themselves</h2>
				<div className="product__section1-container">
					<p>After implementing MaxFlow:</p>
					<ul>
						<li>Reduced energy overflow by 65%</li>
						<li>Average monthly savings of 28% on common energy bills</li>
						<li>
							ROI on their solar system improved from 11 to just 6.5 years
						</li>
						<li>
							Transparent energy allocation led to fewer complaints and improved
							resident satisfaction
						</li>
					</ul>
				</div>

				<div>
					<p>Ready to empower your SVJ with intelligent energy?</p>
					<p>
						Let SOLARIS SYNERGY turn your building into a self-managing,
						cost-efficient, solar-powered community.
					</p>
					<NavLink to={"/contact"}>Knotaktujte nas</NavLink>
				</div>
			</main>
		</>
	);
};

export default Product;
