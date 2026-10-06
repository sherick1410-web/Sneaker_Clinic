import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import producto1 from '../assets/img/producto1.webp'; // reemplaza con tus imágenes reales
import producto2 from '../assets/img/producto2.webp';
import producto3 from '../assets/img/producto3.webp';
import producto4 from '../assets/img/producto4.webp';

const productos = [
  {
    id: 1,
    nombre: 'Cepillo doble fase para Gamuza y Nubuck',
    precio: '$65.000',
    imagen: producto2,
  },
  {
    id: 2,
    nombre: 'Kit premium de limpieza para Zapatos ',
    precio: '$39.000',
    imagen: producto3,
  },
  {
    id: 3,
    nombre: 'Impermeabilizante para Zapatos',
    precio: '$45.000',
    imagen: producto4,
  },
  {
    id: 4,
    nombre: 'Limpiador en seco para Zapatos',
    precio: '$55.000',
    imagen: producto1,
  },
];

const Productos = () => (
  <Container className="mt-5">
    <h2 className="text-center">Productos para el mantenimiento y cuidado de tus artículos</h2>
    <p className="text-center mb-4">
      Recuerda que el uso de productos especializados para el cuidado ayudan a incrementar la vida útil de tus artículos
    </p>
<br /> <br />
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {productos.map((producto) => (
        <Col key={producto.id}>
          <Card className="h-100 text-center">
            <Card.Img variant="top" src={producto.imagen} />
            <Card.Body>
              <Card.Title>{producto.nombre}</Card.Title>
              <Card.Text className="text-muted fw-bold">{producto.precio}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Productos;
