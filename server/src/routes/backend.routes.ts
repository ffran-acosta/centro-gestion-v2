import express from 'express';
const router = express.Router();
import { Request, Response } from 'express';

router.get('/', (_req: Request, res: Response) => {
    res.send('Hello world! Backend WORKS');
});

export default router;
