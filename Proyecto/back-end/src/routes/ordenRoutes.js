import express from 'express';
import {
  listarOrders,
  crearOrder,
  modificarOrder,
  borrarOrder
} from '../controller/orderController.js';

const router = express.Router();

// Obtener todas las órdenes
router.get('/listaro', listarOrders);

// Crear una nueva orden
router.post('/orders',crearOrder);

// Actualizar una orden existente
router.put('/orders/:id', modificarOrder);

// Eliminar una orden
router.delete('/orders/:id', borrarOrder);

export default router;
