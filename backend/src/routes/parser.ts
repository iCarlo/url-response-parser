import express from 'express';
import { parseQuery } from '../controllers/parser';

const router = express.Router();

router.post("/", parseQuery);

export default router;