import React from 'react';

const Footer = () => (
  <footer
    style={{ backgroundColor: '#1e3a8a', color: 'white' }}
    className="text-center p-3 mt-4"
  >
    <p>&copy; Clinica de Snickers. Todos los derechos reservados.</p>
    <div>
      <a href="#" style={{ color: 'white', margin: '0 0.5rem' }}>Facebook</a>
      <a href="#" style={{ color: 'white', margin: '0 0.5rem' }}>Twitter</a>
    </div>
  </footer>
);

export default Footer;
