import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavbarMenu from "./pages/NavbarMenu";
import Footer from "./components/Footer";

const App = () => {
	return (
		<Router>
			<header>
				<NavbarMenu />
			</header>

			<main>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</main>

			<footer>
				<Footer />
			</footer>
		</Router>
	);
};

export default App;
