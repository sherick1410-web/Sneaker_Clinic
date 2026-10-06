import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Productos from './pages/Productos';
import About from './pages/About';
import Servicios from './pages/Servicios';
import Perfil from './pages/Perfil';
import Envios from './pages/Envios';
import Carrito from './pages/Carrito';
import Admin from './pages/Admin';
import Listar from './assets/pages/ListarType_person';
import Register from './pages/Register';
import ListarUsername from './assets/pages/Listar_username';



function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/about" element={<About />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/envios" element={<Envios />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/register" element={< Register/>} />
          <Route path="/listart" element={<Listar />} />
          <Route path="/listaru" element={<ListarUsername />} />
      
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
