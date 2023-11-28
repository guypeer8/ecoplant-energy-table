import express from 'express';
import { index } from '../controllers/energy.controller';

const router = express.Router();

router.get('/', index);

export default router;