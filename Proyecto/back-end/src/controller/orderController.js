import {
  getAllorder,
  registrarOrder,
  actualizarOrder,
  eliminarOrder
} from '../model/ordernModel.js';

// Obtener todas las órdenes
 const listarOrders = async (req, res) => {
  try {
    const productos = await getAllorder();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Registrar una nueva orden
const crearOrder = async (req, res) => {
  try {
    const nuevaOrder = req.body;
    await registrarOrder(nuevaOrder);
    res.status(201).json({ mensaje: "Orden registrada exitosamente" });
  } catch (error) {
    console.error("Error al registrar la orden:", error);
    res.status(500).json({ mensaje: "Error al registrar la orden" });
  }
};

// Actualizar una orden existente
 const modificarOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const datosActualizados = req.body;
    await actualizarOrder(id, datosActualizados);
    res.status(200).json({ mensaje: "Orden actualizada exitosamente" });
  } catch (error) {
    console.error("Error al actualizar la orden:", error);
    res.status(500).json({ mensaje: "Error al actualizar la orden" });
  }
};

// Eliminar una orden
 const borrarOrder = async (req, res) => {
  try {
    const id = req.params.id;
    await eliminarOrder(id);
    res.status(200).json({ mensaje: "Orden eliminada exitosamente" });
  } catch (error) {
    console.error("Error al eliminar la orden:", error);
    res.status(500).json({ mensaje: "Error al eliminar la orden" });
  }
};
export {
  listarOrders,crearOrder,modificarOrder,borrarOrder
};