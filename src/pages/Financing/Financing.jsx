import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import "./Financing.scss";

const Financing = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t("financing")} | MaxFlow 360&deg;</title>
			</Helmet>
			<main className="financing">
				<h1>{t("financing")}</h1>
			</main>
		</>
	);
};

export default Financing;
