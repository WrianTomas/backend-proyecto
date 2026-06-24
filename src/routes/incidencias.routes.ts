import { Router } from 'express';
import {
    obtenerIncidencias,
    crearIncidencia,
    actualizarIncidencia,
    eliminarIncidencia
} from '../controllers/incidencias.controller';

const router = Router();

router.get('/', obtenerIncidencias);
router.post('/', crearIncidencia);
router.put('/:id', actualizarIncidencia);
router.delete('/:id', eliminarIncidencia);

export default router;