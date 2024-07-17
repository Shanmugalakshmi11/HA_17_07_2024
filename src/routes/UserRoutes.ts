import { Router } from 'express';
import { getUser } from '../controllers/UserController';

const router = Router();

router.get('/user/:userId', getUser);

export default router;
