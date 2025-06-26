import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<>
			<footer className={styles["footer"]}>
				<p></p>
				<div className={styles["footer__bottom"]}>
					<div>
						<p>&copy; 2025 MaxFlow</p>
						<p>All rights reserved</p>
					</div>
					<p className="footer__creator">
						Site by{" "}
						<a
							className={styles["footer__creator-link"]}
							href="https://heeeyooo.studio/"
							target="_blank"
						>
							heeeyooo studio
						</a>
					</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
