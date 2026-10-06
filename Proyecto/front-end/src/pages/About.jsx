import React from 'react';
import { Container } from 'react-bootstrap';
import abaut from '../assets/img/abaut.jpg';

const About = () => (
  <>
      {/* Imagen de portada */}
      <img src={abaut} alt="Portada" className="img-fluid w-100" />

    <Container className="mt-4">

    <h2 className="text-center">Sobre Nosotros</h2>
        <p className="text-center mb-4">
          En Clínica de Snickers, somos un equipo apasionado por la restauración y cuidado del calzado. Nuestra misión es darle nueva vida a tus zapatos, tenis y artículos favoritos, combinando técnicas tradicionales con innovación.Este proyecto fue desarrollado por estudiantes comprometidos con brindar soluciones prácticas a negocios locales, aplicando lo aprendido en desarrollo web y gestión de inventario.Creemos en el poder de los detalles y en la importancia de ofrecer un servicio que no solo repare, sino que también cree experiencias inolvidables para nuestros usuarios.   
        </p>

     </Container>
  </>
);

export default About;