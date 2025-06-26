import styles from "./PartnersSection.module.scss";

const PartnersSection = () => {
	return (
		<div className={styles["partners-container"]}>
			<h2 className={styles["partners__title"]}>Partners</h2>
			<div className={styles["partners__outer"]}>
				<div className={styles["partners"]}>
					<div>
						<p>Jinko Solar</p>
					</div>
					<div>
						<p>Deye</p>
					</div>
					<div>
						<p>Solar Power</p>
					</div>
					<div>
						<p>Canadian Solar</p>
					</div>
					<div>
						<p>Aiko</p>
					</div>
					<div>
						<p>ZJBENY</p>
					</div>
					<div>
						<p>Canadian Solar</p>
					</div>
					<div>
						<p>Aiko</p>
					</div>
					<div>
						<p>ZJBENY</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PartnersSection;
