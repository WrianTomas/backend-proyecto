import { Request, Response } from 'express';

export interface Incidencia {
    id: number;
    tipo: string;
    descripcion: string;
    ubicacion: string;
    estado: string;
}

let incidencias: Incidencia[] = [
    {
        id: 1,
        tipo: 'Bache',
        descripcion: 'Asfalto dañado en la vía principal',
        ubicacion: 'Av. Estrella, Santa Clara',
        estado: 'Pendiente'
    }
];

// 3. Tipamos req (petición) y res (respuesta) en cada función
export const obtenerIncidencias = (req: Request, res: Response) => {
    res.json(incidencias);
};

export const crearIncidencia = (req: Request, res: Response) => {
    const nuevaIncidencia: Incidencia = {
        id: incidencias.length > 0 ? incidencias[incidencias.length - 1].id + 1 : 1,
        tipo: req.body.tipo,
        descripcion: req.body.descripcion,
        ubicacion: req.body.ubicacion || 'Santa Clara, Ate',
        estado: req.body.estado || 'Pendiente'
    };
    incidencias.push(nuevaIncidencia);
    res.status(201).json(nuevaIncidencia);
};

export const actualizarIncidencia = (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);
    const index = incidencias.findIndex(i => i.id === id);
    
    if (index !== -1) {
        incidencias[index] = { ...incidencias[index], ...req.body };
        res.json(incidencias[index]);
    } else {
        res.status(404).json({ mensaje: 'Incidencia no encontrada' });
    }
};

export const eliminarIncidencia = (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);
    incidencias = incidencias.filter(i => i.id !== id);
    res.json({ mensaje: 'Incidencia eliminada correctamente' });
};