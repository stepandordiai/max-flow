import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Financing from "./pages/Financing/Financing";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import FormCalculator from "./pages/FormCalculator/FormCalculator";
import NotFound from "./pages/NotFound/NotFound";
import "./i18next";
import "./scss/App.scss";

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product" element={<Product />} />
				<Route path="/how-it-works" element={<HowItWorks />} />
				<Route path="/financing" element={<Financing />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/form-calculator" element={<FormCalculator />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
