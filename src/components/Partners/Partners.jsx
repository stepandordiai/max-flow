import styles from "./Partners.module.scss";

const Partners = () => {
	const partnersData = [
		{
			name: "Jinko Solar",
			imgUrl: "/partners-logo/jinko-solar.svg",
			siteUrl: "https://jinkosolar.eu/",
		},
		{
			name: "Canadian Solar",
			imgUrl: "/partners-logo/canadian-solar.svg",
			siteUrl: "https://www.canadiansolar.com/",
		},
		{
			name: "Solax Power",
			siteUrl: "https://www.solaxpower.com/",
		},
		{
			name: "ZJBENY",
			siteUrl: "https://www.zjbenydc.com/",
		},
		{
			name: "Aiko",
			siteUrl: "https://aikosolar.com/en/",
		},
		{
			name: "SKODA",
			siteUrl: "https://www.skoda-auto.cz/",
		},
	];

	return (
		<div className={styles["partners"]}>
			<div className={styles["partners__title-container"]}>
				<h2 className={styles["partners__title"]}>Naši partneři</h2>
			</div>
			<div className={styles["partners__container"]}>
				<div className={styles["partners__grid"]}>
					{partnersData.map((partner, index) => {
						return (
							<a key={index} href={partner.siteUrl} target="_blank">
								{partner.imgUrl && (
									<img src={partner.imgUrl} alt={partner.name + " Logo"} />
								)}
								{!partner.imgUrl && <span>{partner.name}</span>}
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Partners;
