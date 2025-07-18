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
        {/* Rotas com layout simples */}
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

        {/* Rotas com layout padrão */}
        <Route path="/" element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        } />

        {/* Rota de fallback para 404 */}
        <Route path="*" element={
          <DefaultLayout>
            <h1>Página não encontrada</h1>
          </DefaultLayout>
        } />
      </Routes>
    </Router>
  );
};

export default App;
