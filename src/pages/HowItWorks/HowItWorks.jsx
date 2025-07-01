import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import "./HowItWorks.scss";
import ContactUs from "../../components/ContactUs/ContactUs";

const HowItWorks = () => {
	return (
		<>
			<Helmet>
				<title>MaxFlow | How it works</title>
				<link rel="canonical" href="https://maxflow.cz/how-it-works" />
			</Helmet>
			<main>
				<h1>How It Works</h1>
				<p>
					Switching to smarter energy has never been easier. Here’s what to
					expect:
				</p>
				<div>
					<strong>Free Energy Audit</strong>
					<p>We analyze your energy usage and design the perfect solution.</p>
					<p>
						Send us your latest energy bill, and our experts will assess your
						current consumption, inefficiencies, and potential for savings.
					</p>
				</div>
				<div>
					<strong>Tailored Proposal</strong>
					<p>You get a custom plan—with subsidy paperwork handled for you.</p>
					<p>
						We prepare a fully personalized proposal, including any available
						rebates or government incentives. All documentation is taken care
						of.
					</p>
				</div>
				<div>
					<strong>Hassle-Free Installation</strong>
					<p>
						Our certified technicians install your system—no stress, no mess.
					</p>
					<p>
						Sit back while our professionals handle the entire setup. We ensure
						everything is installed safely, efficiently, and up to code.
					</p>
				</div>
				<div>
					<strong>Maximize Savings</strong>
					<p>Our AI technology starts optimizing your energy use instantly.</p>
					<p>
						Once live, your system runs smart—automatically reducing energy
						waste and cutting your costs from day one.
					</p>
				</div>
				<ContactUs>
					<p className="contact-us__title">
						Want to know how much you’ll save?
					</p>
					<div>
						<NavLink className="contact-us__link" to={"/contact"}>
							<span>Use our quick savings calculator</span>
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

export default HowItWorks;
