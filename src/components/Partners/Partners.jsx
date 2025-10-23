import { useTranslation } from "react-i18next";
import "./Partners.scss";

const partnersData = [
	{
		siteUrl: "https://aikosolar.com/cz/",
		imgUrl:
			"https://www.memodo.cz/m/fileadmin/shopware_products/manufacturer_images/400x200px_Aiko-Logo.png",
		name: "Aiko Logo",
	},
	{
		siteUrl: "https://www.canadiansolar.com/",
		imgUrl:
			"https://www.canadiansolar.com/wp-content/uploads/2024/06/CS-LOGO-RED-RGB-NEW-2024-W-TAG-2.png",
		name: "Canadian Solar Logo",
	},
	{
		siteUrl: "https://deye.com/cs/",
		imgUrl: "https://www.deyeinverter.com/template/en/images/logo.png",
		name: "Deye Logo",
	},
	{
		siteUrl: "https://www.jinkosolar.com/en/#index1",
		imgUrl:
			"https://jinkosolarcdn.shwebspace.com/themes/basicen/skin/images/logony.png",
		name: "Jinko Solar Logo",
	},
	{
		siteUrl: "https://www.solaxpower.com/",
		imgUrl:
			"https://www.fotovolty.cz/uploads/media/full/00/40-solax-power-logo.webp?v=1-0",
		name: "Solax Power Logo",
	},
	{
		siteUrl: "https://cs.tigoenergy.com/",
		imgUrl:
			"https://cdn.prod.website-files.com/5fa5ee97e1eb253b5efc0385/5fad42bc7dee3e2002385080_Tigo-logo.svg",
		name: "Tigo Logo",
	},
	{
		siteUrl: "https://www.solaredge.com/en",
		imgUrl:
			"https://www.solaredge.com/sites/master/files/SolarEdge_logo_header_new_0.svg",
		name: "Solar Edge Logo",
	},
	{
		siteUrl: "http://cz.zjbeny-german.com/",
		imgUrl:
			"https://lh4.googleusercontent.com/proxy/341zOYGIOFlOW5xf7XYn1CNQqGaKaOOXc9uAKv9aqbU-PX_0ameieUdtYshiwsEjcMGtbEMWv96le1WXvbtR65quSuLbJ--cyZkI7d6I8rjZOI5qriUi8jowokGgPw",
		name: "Zjbeny Logo",
	},
	{
		siteUrl: "https://www.skoda-auto.cz/",
		imgUrl:
			"https://upload.wikimedia.org/wikipedia/commons/0/09/%C5%A0koda_nieuw.png",
		name: "Skoda Logo",
	},
];

const Partners = () => {
	const { t } = useTranslation();

	return (
		<div className="partners" id="partners">
			<div className="partners__title-container">
				<h2 className="partners__title">{t("partners.title")}</h2>
			</div>
			<div className="partners__container">
				<div className="partners__grid">
					{partnersData.map((partner, index) => {
						return (
							<a key={index} href={partner.siteUrl} target="_blank">
								<img src={partner.imgUrl} alt={partner.name + " logo"} />
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Partners;
