import { Helmet } from "react-helmet";
import "./Product.scss";

const Product = () => {
	return (
		<>
			<Helmet>
				<title>MaxFlow | Product</title>
				<link rel="canonical" href="https://maxflow.cz/product" />
			</Helmet>
			<h1>Product</h1>
		</>
	);
};

export default Product;
