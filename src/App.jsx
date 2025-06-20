import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Reference from "./pages/Reference/Reference";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Menu from "./components/Menu/Menu";

function App() {
	return (
		<Router>
			<Header />
			<Menu />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product" element={<Product />} />
				<Route path="/reference" element={<Reference />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	);
}

export default App;
