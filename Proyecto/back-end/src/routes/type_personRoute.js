import { getAlltype_person } from '../controller/type_personController.js';
import express from 'express';
const router = express.Router();

router.get('/listart', getAlltype_person);

export default router;
