import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, ListGroup, Modal, Form } from 'react-bootstrap';
import { Obtenerusername } from '../service/UsernameService';
import { ObtenerProductos } from '../service/ProductoService';
import { Obtenerorden} from '../service/OrdenService';
import Swal from 'sweetalert2';
import axios from 'axios';

const Admin = () => {

  const [activeSection, setActiveSection] = useState('productos');
  const [usuarios, setUsuarios] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [usuarioEditado, setUsuarioEditado] = useState(null);

  const [productos, setProductos] = useState([]);
  const [productoEditado, setProductoEditado] = useState(null);
  const [showModalProducto, setShowModalProducto] = useState(false);

  const [ordenes, setOrdenes] = useState([]);
  const [ordenEditada, setOrdenEditada] = useState(null);
  const [showModalOrden, setShowModalOrden] = useState(false);


  useEffect(() => {
    if (activeSection === 'usuarios') {
      fetchUsuarios();
    }
  }, [activeSection]);

  useEffect(() => {
    if (activeSection === 'productos') {
      fetchProductos();
    }
  }, [activeSection]);

  useEffect(() => {
    if (activeSection === 'ordenes') {
      fetchOrden();
    }
  }, [activeSection]);




  const fetchUsuarios = async () => {
    try {
      const data = await Obtenerusername();
      setUsuarios(data);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  };
    const fetchOrden = async () => {
    try {
      const data = await Obtenerorden();
      setOrdenes(data);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  };

  // Función para eliminar usuario
  const handlEliminar = (document) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/${document}`)
          .then(() => {
            fetchUsuarios(); // refresca la lista después de eliminar
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          })
          .catch((error) => {
            console.log(error);
            Swal.fire("Error!", "Hubo un problema al eliminar.", "error");
          });
      }
    });
  };

  const handleEditar = (usuario) => {
    setUsuarioEditado(usuario);
    setShowModal(true);
  };

  const handleGuardarCambios = async () => {
    try {
      await axios.put(`http://localhost:3000/${usuarioEditado.document}`, usuarioEditado);
      Swal.fire("Actualizado", "El usuario ha sido actualizado", "success");
      setShowModal(false);
      fetchUsuarios(); // refrescar datos
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "No se pudo actualizar el usuario", "error");
    }
  };

  // Productos

  const fetchProductos = async () => {
    try {
      const data = await ObtenerProductos();
      setProductos(data); // corregido: usar setProductos aquí
    } catch (error) {
      console.error('Error al obtener productos', error);
    }
  };

  const handleEliminarProducto = (id_product) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esto no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/eliminarP/${id_product}`)
          .then(() => {
            fetchProductos();
            Swal.fire("Eliminado", "Producto eliminado con éxito", "success");
          })
          .catch(() => Swal.fire("Error", "No se pudo eliminar", "error"));
      }
    });
  };

  const handleEditarProducto = (producto) => {
    setProductoEditado(producto);
    setShowModalProducto(true);
  };

  const handleGuardarProducto = async () => {
    try {
      if (productoEditado.id_product) {
        await axios.put(`http://localhost:3000/productos/${productoEditado.id_product}`, productoEditado);
      } else {
        // Si quieres agregar funcionalidad para crear un producto nuevo:
        await axios.post(`http://localhost:3000/registrarP`, productoEditado);
      }
      setShowModalProducto(false);
      fetchProductos();
      Swal.fire("Actualizado", "Producto actualizado con éxito", "success");
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "No se pudo actualizar", "error");
    }
  };

  const handleGuardarOrden = async () => {
  try {
    if (ordenEditada.id_order) {
      // Actualizar
      await axios.put(`http://localhost:3000/order/${ordenEditada.id_order}`, ordenEditada);
      Swal.fire("Actualizado", "Orden actualizada con éxito", "success");
    } else {
      // Crear nueva orden
      await axios.post('http://localhost:3000/order/registrarO', ordenEditada);
      Swal.fire("Creado", "Orden creada con éxito", "success");
    }
    setShowModalOrden(false);
    fetchOrdenes();
  } catch (error) {
    console.error('Error al guardar orden:', error);
    Swal.fire("Error", "No se pudo guardar la orden", "error");
  }
};
 const handleEditarorden = (ordenes) => {
     setOrdenEditada(ordenes);
    setShowModalOrden(true)
  };
  const renderSection = () => {
    switch (activeSection) {
      case 'productos':
        return (
          <div>
            <h3>Gestión de Productos</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Talla</th>
                  <th>Color</th>
                  <th>Order ID</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productos.length === 0 ? (
                  <tr><td colSpan="8" className="text-center">No hay productos</td></tr>
                ) : (
                  productos.map((p) => (
                    <tr key={p.id_product}>
                      <td>{p.nombre}</td>
                      <td>{p.descripcion}</td>
                      <td>{p.precio}</td>
                      <td>{p.cantidad_inventario}</td>
                      <td>{p.talla}</td>
                      <td>{p.color}</td>
                      <td>{p.order_idfk}</td>
                      <td>
                        <Button onClick={() => handleEditarProducto(p)} className="btn btn-primary me-2">Editar</Button>
                        <Button onClick={() => handleEliminarProducto(p.id_product)} className="btn btn-danger">Eliminar</Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <Button style={{ backgroundColor: '#1e3a8a' }} onClick={() => { setProductoEditado({}); setShowModalProducto(true); }}>Agregar producto</Button>
          </div>
        );

      case 'usuarios':
        return (
          <div>
            <h3>Gestión de Usuarios</h3>
            <table className="table table-striped mt-3">
              <thead>
                <tr>
                  <th>Primer Nombre</th>
                  <th>Segundo Nombre</th>
                  <th>Apellido</th>
                  <th>Segundo Apellido</th>
                  <th>Documento</th>
                  <th>Teléfono</th>
                  <th>Tipo de Persona</th>
                  <th>Estado</th>
                  <th>Username</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.length === 0 ? (
                  <tr><td colSpan="10" className="text-center">No hay usuarios</td></tr>
                ) : (
                  usuarios.map((u) => (
                    <tr key={u.document}>
                      <td>{u.name_}</td>
                      <td>{u.name2_}</td>
                      <td>{u.lastname_}</td>
                      <td>{u.lastname2_}</td>
                      <td>{u.document}</td>
                      <td>{u.telephone}</td>
                      <td>{u.type_personfk}</td>
                      <td>{u.id_status_fk}</td>
                      <td>{u.username}</td>
                      <td>
                        <button onClick={() => handlEliminar(u.document)} type="button" className="btn btn-danger me-2">
                          Eliminar
                        </button>
                        <button onClick={() => handleEditar(u)} className="btn btn-primary">Editar</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <Button style={{ backgroundColor: '#1e3a8a', borderColor: '#1e3a8a' }}
              onClick={() => {
        }}
            
            >Agregar usuario</Button>
          </div>
        );

      case 'ordenes':
         return (
    <div>
      <h3>Gestión de Órdenes</h3>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>id_orden</th>
            <th>Fecha</th>
            <th>Documento</th>

          </tr>
        </thead>
        <tbody>
          {ordenes.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center">No hay pedidos</td>
            </tr>
          ) : (
            ordenes.map((o) => (
              <tr key={o.id_order}>
                <td>{o.id_order}</td>
                <td>{o.date_}</td>
                <td>{o.document_person}</td>
                <td>
                  <button onClick={() => handleEliminarOrden(o.id_order)} className="btn btn-danger me-2">
                    Eliminar
                  </button>
                  <button onClick={() => handleEditarorden(o)} className="btn btn-primary">
                    Editar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <Button
        style={{ backgroundColor: '#1e3a8a', borderColor: '#1e3a8a' }}
        onClick={() => {
          setOrdenEditada({}); // Para crear una orden nueva
          setShowModalOrden(true);
        }}
      >
        Agregar orden
      </Button>
    </div>
  );


      case 'estadisticas':
        return <div>{/* ... tu código estadísticas ... */}</div>;

      case 'configuracion':
        return <div>{/* ... tu código configuración ... */}</div>;

      case 'taller':
        return <div>{/* ... tu código taller ... */}</div>;

      default:
        return null;
    }
  };

  return (
    <Container fluid className="mt-4">
      <Row>
        <Col md={3} className="bg-light p-3 shadow-sm" style={{ height: '100vh' }}>
          <h4>Administración</h4>
          <ListGroup>
            <ListGroup.Item action onClick={() => setActiveSection('productos')}>📦 Productos</ListGroup.Item>
            <ListGroup.Item action onClick={() => setActiveSection('taller')}>🔨 Taller</ListGroup.Item>
            <ListGroup.Item action onClick={() => setActiveSection('usuarios')}>👤 Usuarios</ListGroup.Item>
            <ListGroup.Item action onClick={() => setActiveSection('ordenes')}>🛒 Pedidos</ListGroup.Item>
            <ListGroup.Item action onClick={() => setActiveSection('estadisticas')}>📈 Estadísticas</ListGroup.Item>
            <ListGroup.Item action onClick={() => setActiveSection('configuracion')}>⚙️ Configuración</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9} className="p-4">
          {renderSection()}
        </Col>
      </Row>

      {/* Modal para Editar Usuario */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Primer Nombre</Form.Label>
              <Form.Control
                type="text"
                value={usuarioEditado?.name_ || ''}
                onChange={(e) => setUsuarioEditado({ ...usuarioEditado, name_: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Segundo Nombre</Form.Label>
              <Form.Control
                type="text"
                value={usuarioEditado?.name2_ || ''}
                onChange={(e) => setUsuarioEditado({ ...usuarioEditado, name2_: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                value={usuarioEditado?.lastname_ || ''}
                onChange={(e) => setUsuarioEditado({ ...usuarioEditado, lastname_: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Segundo Apellido</Form.Label>
              <Form.Control
                type="text"
                value={usuarioEditado?.lastname2_ || ''}
                onChange={(e) => setUsuarioEditado({ ...usuarioEditado, lastname2_: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Documento</Form.Label>
              <Form.Control type="text" value={usuarioEditado?.document || ''} disabled />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                value={usuarioEditado?.telephone || ''}
                onChange={(e) => setUsuarioEditado({ ...usuarioEditado, telephone: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tipo de Persona</Form.Label>
              <Form.Control
                type="text"
                value={usuarioEditado?.type_personfk || ''}
                onChange={(e) => setUsuarioEditado({ ...usuarioEditado, type_personfk: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                value={usuarioEditado?.id_status_fk || ''}
                onChange={(e) => setUsuarioEditado({ ...usuarioEditado, id_status_fk: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={usuarioEditado?.username || ''}
                onChange={(e) => setUsuarioEditado({ ...usuarioEditado, username: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
          <Button variant="primary" onClick={handleGuardarCambios}>Guardar</Button>
        </Modal.Footer>
      </Modal>



      {/* Modal para Editar Producto */}
      <Modal show={showModalProducto} onHide={() => setShowModalProducto(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{productoEditado?.id_product ? 'Editar Producto' : 'Agregar Producto'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={productoEditado?.nombre || ''}
                onChange={(e) => setProductoEditado({ ...productoEditado, nombre: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                value={productoEditado?.descripcion || ''}
                onChange={(e) => setProductoEditado({ ...productoEditado, descripcion: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                value={productoEditado?.precio || ''}
                onChange={(e) => setProductoEditado({ ...productoEditado, precio: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control
                type="number"
                value={productoEditado?.cantidad_inventario || ''}
                onChange={(e) => setProductoEditado({ ...productoEditado, cantidad_inventario: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Talla</Form.Label>
              <Form.Control
                type="text"
                value={productoEditado?.talla || ''}
                onChange={(e) => setProductoEditado({ ...productoEditado, talla: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                value={productoEditado?.color || ''}
                onChange={(e) => setProductoEditado({ ...productoEditado, color: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Order ID</Form.Label>
              <Form.Control
                type="number"
                value={productoEditado?.order_idfk || ''}
                onChange={(e) => setProductoEditado({ ...productoEditado, order_idfk: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalProducto(false)}>Cancelar</Button>
          <Button variant="primary" onClick={handleGuardarProducto}>Guardar</Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showModalOrden} onHide={() => setShowModalOrden(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Editar Orden</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Fecha</Form.Label>
        <Form.Control
          type="date"
          value={ordenEditada?.date_ || ''}
          onChange={(e) =>
            setOrdenEditada({ ...ordenEditada, date_: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Documento Persona</Form.Label>
        <Form.Control
          type="number"
          value={ordenEditada?.document_person || ''}
          onChange={(e) =>
            setOrdenEditada({ ...ordenEditada, document_person: e.target.value })
          }
        />
      </Form.Group>
    </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setShowModalOrden(false)}>
      Cancelar
    </Button>
    <Button variant="primary" onClick={handleGuardarOrden}>
      Guardar Cambios
    </Button>
  </Modal.Footer>
</Modal>

    </Container>
  );
};

export default Admin;
