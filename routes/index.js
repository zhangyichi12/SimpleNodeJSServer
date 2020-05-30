import express from 'express';
import students from './students/routes.js';

let router = express.Router();

router.use('/students', students);

export default router;