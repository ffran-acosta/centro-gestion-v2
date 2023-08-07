import express from 'express';
import cors from 'cors';
import { port, start } from './modules';
import { backendRoutes } from './routes';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use(backendRoutes)

// Server
app.listen(port, start);