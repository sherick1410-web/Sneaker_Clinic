import React from 'react';
import servi from '../assets/img/servi.jpg';
import { Container, Row, Col } from 'react-bootstrap';

const Servicios = () => (
  <Container className="mt-4">
    <h1 className="mb-4 text-center">Restauración</h1>
    <p className="mb-4 text-center">
      Alarga la vida útil de los zapatos por medio de nuestra propuesta de alternativa sostenible.
      Una experiencia en tiendas donde se podrá tener la opción de solicitar reparación o mantenimiento de tus zapatos y darles una segunda vida.
    </p>
    <br /><br />
    
    <Row className="align-items-center">
      
      <Col md={4} className="text-center mb-4">
        <img src={servi} alt="zapatero" className="img-fluid rounded w-75" />
      </Col>

      
      <Col md={8}>
        <Row>
          
          <Col md={6}>
            <ul className="list-unstyled">
              <li className="d-flex justify-content-between">Hacer resanes leves por peladuras.</li>
              <li className="d-flex justify-content-between">Limpiar exterior.</li>
              <li className="d-flex justify-content-between">Recuperar apariencia.</li>
              <li className="d-flex justify-content-between">Limpieza de forros.</li>
              <li className="d-flex justify-content-between">Limpieza de suelas.</li>
              <li className="d-flex justify-content-between">Limpieza o Cambio de cordones.</li>
            </ul>
          </Col>
          

          
          <Col md={6}>
            <ul className="list-unstyled">
              <li className="d-flex justify-content-between">Limpieza o Cambio de plantilla.</li>
              <li className="d-flex justify-content-between">Nutrir el cuero.</li>
              <li className="d-flex justify-content-between">Revivir color.</li>
              <li className="d-flex justify-content-between">Aplicar renovador.</li>
              <li className="d-flex justify-content-between">Dar acabado final.</li>
              <li className="d-flex justify-content-between">Proteger acabado.</li>
            </ul>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Servicios;
