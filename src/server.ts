import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import AppRouter from './routes';
import userRoutes from './routes/UserRoutes';

// Initialisierung von expres
const server = express();
server.use(bodyParser.json());
// Use for development
server.use(cors());
server.use('/v1', AppRouter);
server.use('/api', userRoutes);

export default server;
