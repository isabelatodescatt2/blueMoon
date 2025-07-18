import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavbarMenu from "./pages/NavbarMenu"; 
import Footer from "./components/Footer";
import AgendarAula from "./pages/AgendarAula";
import LuaBrunetti from "./pages/LuaBrunetti";

const DefaultLayout = ({ children }) => (
  <>
    <header>
      <NavbarMenu />
    </header>
    <main>{children}</main>
    <footer>
      <Footer />
    </footer>
  </>
);

const SimpleLayout = ({ children }) => (
  <main>{children}</main>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/aprender" element={
          <SimpleLayout>
            <AgendarAula />
          </SimpleLayout>
        } />
		<Route path="/canto" element={
			<SimpleLayout>
				<LuaBrunetti />
			</SimpleLayout>
			} />
        
        <Route path="*" element={
          <DefaultLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Outras rotas com navbar */}
            </Routes>
          </DefaultLayout>
        } />
      </Routes>
    </Router>
  );
};

export default App;