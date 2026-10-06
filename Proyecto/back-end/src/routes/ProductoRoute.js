import express from 'express';
import {
  getAllP,
  registrarProducto,
  actualizarProducto,
  eliminarProducto
} from '../controller/ProductoController.js';

const router = express.Router();

// Listar todos los productos
router.get('/listarP', getAllP);

// Registrar nuevo producto
router.post('/registrarP', registrarProducto);

// Actualizar un producto
router.put('/productos/:id', actualizarProducto);

// Eliminar un producto
router.delete('/eliminarP/:id', eliminarProducto);

export default router;
