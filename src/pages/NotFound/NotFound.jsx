import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>404</title>
			</Helmet>
			<main className="not-found">
				<p className="not-found__title">404</p>
				<div className="not-found__container">
					<h2 className="not-found__container-title">Page Not Found</h2>
					<NavLink className="not-found__link" to="/">
						{t("home")}
					</NavLink>
				</div>
			</main>
		</>
	);
};

export default NotFound;
