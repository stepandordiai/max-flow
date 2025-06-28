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
import "./App.scss";

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
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
			<ScrollToTop />
		</Router>
	);
}

export default App;
