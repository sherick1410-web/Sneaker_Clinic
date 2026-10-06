import {
  getAllProductos,
  registrarProductoModel,
  actualizarProductoModel,
  eliminarProductoModel
} from "../model/ProductoModel.js";

// Listar todos los productos
const getAllP = async (req, res) => {
  try {
    const productos = await getAllProductos();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Registrar un nuevo producto
const registrarProducto = async (req, res) => {
  try {
    const nuevoProducto = req.body;
    await registrarProductoModel(nuevoProducto);
    res.status(201).json({ message: "Producto registrado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un producto existente
const actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const datosActualizados = req.body;
    await actualizarProductoModel(id, datosActualizados);
    res.json({ message: "Producto actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un producto
const eliminarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    await eliminarProductoModel(id);
    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllP, registrarProducto, actualizarProducto, eliminarProducto };
