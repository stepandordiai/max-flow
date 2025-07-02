import { useTranslation } from "react-i18next";
import saveMoneyIcon from "/icons/save-money.png";
import executionIcon from "/icons/execution.png";
import homeAutomationIcon from "/icons/home-automation.png";
import "./Benefits.scss";

const Benefits = () => {
	const { t } = useTranslation();

	return (
		<div>
			<h2 className="benefits__title" id="benefits">
				{t("benefits.title")}
			</h2>
			<div className="benefits-container">
				<div className="benefits">
					<img width={100} height={100} src={saveMoneyIcon} alt="" />
					<div>
						<p>{t("benefits.card1_title")}</p>
						<p>{t("benefits.card1_sec_title")}.</p>
					</div>
				</div>
				<div className="benefits">
					<img width={100} height={100} src={homeAutomationIcon} alt="" />
					<div>
						<p>{t("benefits.card2_title")}</p>
						<p>{t("benefits.card2_sec_title")}.</p>
					</div>
				</div>
				<div className="benefits">
					<img width={100} height={100} src={executionIcon} alt="" />
					<div>
						<p>{t("benefits.card3_title")}</p>
						<p>{t("benefits.card3_sec_title")} MaxFlow 360°.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Benefits;
