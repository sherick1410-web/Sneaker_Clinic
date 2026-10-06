import express from 'express';
import { getAllu, addu, deleteU, updateU, loginAdmin } from '../controller/usernamecontroller.js';

const router = express.Router();

// Listar usuarios
router.get('/listaru', getAllu);

// Insertar usuario
router.post('/insertaru', addu);

// Eliminar usuario
router.delete('/:document', deleteU);

//  Actualizar usuario
router.put('/:document', updateU);

// Login del admin
router.post('/loginadmin', loginAdmin);

export default router;
