import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import "./Financing.scss";

const Financing = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t("financing")} | MaxFlow</title>
			</Helmet>
			<main className="financing">
				<h1>{t("financing")}</h1>
			</main>
		</>
	);
};

export default Financing;
