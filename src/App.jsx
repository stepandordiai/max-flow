import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Financing from "./pages/Financing/Financing";
import Contact from "./pages/Contact/Contact";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import "./i18next";
import FormCalculator from "./pages/FormCalculator/FormCalculator";
import Testimonials from "./pages/Testimonials/Testimonials";
import "./scss/App.scss";

function App() {
	return (
		<Router>
			<Header />
			<Menu />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product" element={<Product />} />
				<Route path="/how-it-works" element={<HowItWorks />} />
				<Route path="/financing" element={<Financing />} />
				<Route path="/testimonials" element={<Testimonials />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/form-calculator" element={<FormCalculator />} />
			</Routes>
			<Footer />
			<ScrollToTop />
		</Router>
	);
}

export default App;
