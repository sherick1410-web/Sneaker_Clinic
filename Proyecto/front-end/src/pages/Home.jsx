import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import portada from '../assets/img/portada.png';
import hombre2 from '../assets/img/hombre2.png';
import mujer2 from '../assets/img/mujer2.png';
import tenis2 from '../assets/img/tenis2.png';

const Home = () => (
  <>
    <img src={portada} alt="Portada" className="img-fluid w-100" />

    <Container className="mt-4 text-center">
      <br />
      <br />
      <h1 className="mb-4">¿Qué deseas reparar o limpiar?</h1>
      <br />
      <Row className="justify-content-center">
        <Col xs={10} sm={6} md={3}>
          <Card className="mb-4 mx-auto border shadow-sm" style={{ width: '100%', backgroundColor: '#ffffff' }}>
            <div
              style={{
                backgroundColor: '#1e3a8a',
                padding: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Card.Img
                variant="top"
                src={hombre2}
                style={{ height: '100px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <Card.Body>
              <Card.Title className="text-dark">Zapatos de Hombre</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={10} sm={6} md={3}>
          <Card className="mb-4 mx-auto border shadow-sm" style={{ width: '100%', backgroundColor: '#ffffff' }}>
            <div
              style={{
                backgroundColor: '#1e3a8a',
                padding: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Card.Img
                variant="top"
                src={mujer2}
                style={{ height: '100px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <Card.Body>
              <Card.Title className="text-dark">Zapatos de Mujer</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={10} sm={6} md={3}>
          <Card className="mb-4 mx-auto border shadow-sm" style={{ width: '100%', backgroundColor: '#ffffff' }}>
            <div
              style={{
                backgroundColor: '#1e3a8a',
                padding: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Card.Img
                variant="top"
                src={tenis2}
                style={{ height: '100px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <Card.Body>
              <Card.Title className="text-dark">Tenis</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  </>
);

export default Home;
