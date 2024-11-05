import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/inicio';
import Oferta from './pages/Oferta';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div className="nav">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/ofertaeducativa" element={<Oferta />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
