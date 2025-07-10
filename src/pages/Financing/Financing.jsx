import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import "./Financing.scss";

const Financing = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t("financing")} | MaxFlow</title>
				<link rel="canonical" href="https://maxflow.cz/financing" />
			</Helmet>
			<main>
				<h1>Financing</h1>
			</main>
		</>
	);
};

export default Financing;
