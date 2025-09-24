import { useState } from "react";
import "./DemoBanner.scss";

const DemoBanner = () => {
	const [email, setEmail] = useState("");

	// TODO:
	const checkEmail = () => {
		if (email === "") return "white";
		if (email && email.includes("@")) return "green";
		return "red";
	};

	return (
		<div className="demo-banner">
			<h3 className="demo-banner__title">
				Vyzkoušejte si demo dashboardu MaxFlow
			</h3>
			<div>
				<form className="demo-banner__form" action="mailto:info@fvestavby.cz">
					<input
						// TODO:
						onChange={(e) => setEmail(e.target.value)}
						className={`demo-banner__input ${checkEmail()}`}
						type="email"
						placeholder="example@company.com"
					/>
					<button type="submit">Send</button>
				</form>
				<p>Zadejte e-mail a pošleme vám přístup na 24 hodin.</p>
			</div>
		</div>
	);
};

export default DemoBanner;
