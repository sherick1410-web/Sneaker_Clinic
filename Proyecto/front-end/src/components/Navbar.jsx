import React from 'react';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg px-4">
    
    {/* Logo y título */}
    <div className="navbar-brand d-flex align-items-center" to="/">
      <img
        src={logo}
        alt="Logo"
        style={{ height: '40px', marginRight: '8px' }}
      />
    </div>

    {/* Enlaces principales */}
    <Link className="navbar-brand text-black" to="/">Inicio</Link>
    <div className="navbar-nav">
      <Link className="nav-link text-black" to="/Productos">Productos</Link>
      <Link className="nav-link text-black" to="/Servicios">Servicios</Link>
      <Link className="nav-link text-black" to="/about">Acerca de</Link>
    </div>

    {/* Íconos alineados a la derecha */}
    <div className="ms-auto d-flex align-items-center gap-3">
      <Link className="text-black" to="/perfil">
        <i className="bi bi-person fs-5"></i>
      </Link>
      <Link className="text-black" to="/envios">
        <i className="bi bi-truck fs-5"></i>
      </Link>
      <Link className="text-black" to="/carrito">
        <i className="bi bi-bag fs-5"></i>
      </Link>
    </div>

  </nav>
);

export default Navbar;