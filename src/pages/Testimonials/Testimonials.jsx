import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import styles from "./Testimonials.module.scss";

const Testimonials = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t("testimonials_title")} | MaxFlow</title>
			</Helmet>
			<main>
				<h1>{t("testimonials_title")}</h1>
			</main>
		</>
	);
};

export default Testimonials;
