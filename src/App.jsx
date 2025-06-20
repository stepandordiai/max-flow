import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<Home />} />
				<Route path="/services" element={<Home />} />
				<Route path="/pricing" element={<Home />} />
				<Route path="/contact" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;
