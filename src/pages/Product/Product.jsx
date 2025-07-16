import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import bg from "/bg3.svg";
import "./Product.scss";

const Product = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t("product")} | MaxFlow</title>
			</Helmet>
			<main className="product">
				<div>
					<div className="product__top-container">
						<div className="product__top-container-inner">
							<div>
								<h1>{t("product")}</h1>
								<h2 className="product__sec-title" id="product-section-1">
									Pro SVJ
								</h2>
							</div>
						</div>
						<div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									justifySelf: "flex-end",
									alignItems: "flex-end",
								}}
							>
								<img
									style={{ justifySelf: "flex-end" }}
									width={500}
									src={bg}
									alt=""
								/>
								<p style={{ marginBottom: 25, marginTop: 25 }}>
									Konečně spravedlivé rozdělení energií ve vašem domě - bez
									hádek a papírování
								</p>
							</div>
							<div className="product__section1-container sect-1">
								<p>Problémy SVJ:</p>
								<ul>
									<li>
										Platíte vysoké zálohy a nevíte, kdo energii reálně
										spotřebovává?
									</li>
									<li>Sousedi se hádají, komu účtovat přebytky?</li>
									<li>Bojíte se, že instalace FVE bude příliš složitá?</li>
								</ul>
							</div>
						</div>
					</div>

					<div
						style={{
							border: "3px dashed white",
							borderRadius: 10,
							padding: 15,
						}}
					>
						<div className="product__section1-container">
							<p>Řešení:</p>
							<ul>
								<li>
									MaxFlow 360 &deg; automaticky měří a rozděluje energii na
									základě reálné spotřeby každého bytu.
								</li>
								<li>
									Naše cloudová platforma vám připraví vyúčtování na pár
									kliknutí.
								</li>
								<li>
									Postaráme se o celý proces za vás – od dotací po instalaci.
								</li>
							</ul>
						</div>
					</div>
					<h3 style={{ marginBottom: 25 }}>
						Case Study: Results That Speak for Themselves
					</h3>
					<div className="product__section1-container sect-2">
						<p>After implementing MaxFlow:</p>
						<ul>
							<li>Reduced energy overflow by 65%</li>
							<li>Average monthly savings of 28% on common energy bills</li>
							<li>
								ROI on their solar system improved from 11 to just 6.5 years
							</li>
							<li>
								Transparent energy allocation led to fewer complaints and
								improved resident satisfaction
							</li>
						</ul>
					</div>
				</div>

				<div>
					<h2 className="product__sec-title" id="product-section-2">
						MaxFlow 360&deg; Cloud
					</h2>
					<p style={{ marginBottom: 25 }}>
						Všechny údaje o energii přehledně na jednom místě – kdykoli a
						kdekoli
					</p>
					<div className="product__section1-container">
						<p>Vlastnosti:</p>
						<ul>
							<li>
								Živý monitoring
								<span>Vidíte, kolik právě teď vyrábíte a spotřebováváte.</span>
							</li>
							<li>
								AI předpověď
								<span>
									Systém vás upozorní, kdy prodávat přebytky za nejvýhodnější
									cenu.
								</span>
							</li>
							<li>
								Mobilní aplikace
								<span>Správa energie z telefonu.</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="product__demo">
					<p className="contact-us__title">Vyzkoušejte si demo dashboardu</p>
					<div>
						<form className="product__demo-form" action="">
							<input
								className="product__demo-input"
								type="text"
								placeholder="example@company.com"
							/>
							<button type="submit">Send</button>
						</form>
						<p>Zadejte e-mail a pošleme vám přístup na 24 hodin.</p>
					</div>
				</div>
			</main>
		</>
	);
};

export default Product;
