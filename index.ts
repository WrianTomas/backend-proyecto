import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import incidenciasRoutes from './src/routes/incidencias.routes';

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/api/incidencias', incidenciasRoutes);

const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Servidor backend con TypeScript funcionando correctamente.');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});