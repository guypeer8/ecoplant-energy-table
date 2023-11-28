import express from 'express';
import energyRouter from './energy.router';

const router = express.Router();

router.use('/energy', energyRouter);

export default router;