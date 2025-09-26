import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import DemoBanner from "../../components/DemoBanner/DemoBanner";
import Container from "../../components/Container/Container";
import bg from "/bg3.svg";
import macbookImg from "/macbook-1.png";
import "./Product.scss";

const Product = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t("product_title")} | MaxFlow 360&deg;</title>
			</Helmet>
			<main className="product">
				<Container>
					<div className="product-inner">
						<div className="product-top">
							<div>
								<h1>{t("product_title")}</h1>
								<h2 className="product__sec-title" id="product-section-1">
									{t("product.section1_title")}
								</h2>
							</div>
							<div style={{ alignSelf: "flex-end", textAlign: "end" }}>
								<img
									style={{ justifySelf: "flex-end" }}
									width={500}
									src={bg}
									alt=""
								/>
								<h3 style={{ marginBottom: 25, marginTop: 25 }}>
									{t("product.section1_desc")}
								</h3>
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
								<p> {t("product.section2_title")}:</p>
								<ul>
									<li>{t("product.section2_item1")}</li>
									<li>{t("product.section2_item2")}</li>
									<li>{t("product.section2_item3")}</li>
								</ul>
							</div>
						</div>
						<div>
							<div style={{ marginBottom: 25 }}>
								<h2>{t("product.section3_title")}</h2>
								<p>{t("product.section3_desc")}</p>
							</div>
							<div
								style={{ marginBottom: 25 }}
								className="product__section1-container sect-1"
							>
								<p>{t("product.section3_item1_title")}:</p>
								<ul>
									<li>{t("product.section3_item1_item1")}?</li>
									<li>{t("product.section3_item1_item2")}?</li>
									<li>{t("product.section3_item1_item3")}?</li>
								</ul>
							</div>
							<div className="product__section1-container sect-2">
								<p>{t("product.section3_item2_title")}:</p>
								<ul>
									<li>{t("product.section3_item2_item1")}</li>
									<li>{t("product.section3_item2_item2")}</li>
									<li>{t("product.section3_item2_item3")}</li>
									<li>{t("product.section3_item2_item4")}</li>
								</ul>
							</div>
						</div>
						<div>
							<h2 className="product__sec-title" id="product-section-2">
								{t("product.section4_title")}
							</h2>
							<p style={{ marginBottom: 25 }}>{t("product.section4_desc")}</p>
							<div className="product-container">
								<div>
									<p>{t("product.section4_item_title")}:</p>
									<ul>
										<li>{t("product.section4_item_item1")}</li>
										<li>{t("product.section4_item_item2")}</li>
										<li>{t("product.section4_item_item3")}</li>
									</ul>
								</div>
								<img src={macbookImg} alt="" />
							</div>
							<DemoBanner />
						</div>
					</div>
				</Container>
			</main>
		</>
	);
};

export default Product;
