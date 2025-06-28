import { useTranslation } from "react-i18next";
import saveMoneyIcon from "/icons/save-money.png";
import executionIcon from "/icons/execution.png";
import homeAutomationIcon from "/icons/home-automation.png";
import "./BenefitsSection.scss";

const BenefitsSection = () => {
	const { t } = useTranslation();

	return (
		<>
			<p className="benefits__title">{t("benefits.title")}</p>
			<div className="benefits-container">
				<div className="benefits">
					<div>
						<p>{t("benefits.card1_title")}</p>
						<p>{t("benefits.card1_sec_title")}.</p>
					</div>
					<img width={100} height={100} src={saveMoneyIcon} alt="" />
				</div>
				<div className="benefits">
					<div>
						<p>{t("benefits.card2_title")}</p>
						<p>{t("benefits.card2_sec_title")}.</p>
					</div>
					<img width={100} height={100} src={homeAutomationIcon} alt="" />
				</div>
				<div className="benefits">
					<div>
						<p>{t("benefits.card3_title")}</p>
						<p>{t("benefits.card3_sec_title")} MaxFlow 360°.</p>
					</div>
					<img width={100} height={100} src={executionIcon} alt="" />
				</div>
			</div>
		</>
	);
};

export default BenefitsSection;
