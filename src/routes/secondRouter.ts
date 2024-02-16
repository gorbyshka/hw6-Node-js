import { Router } from 'express';
import * as secondController from '../controllers/secondController';
import routerMiddleware from '../middlewares/routerMiddleware';
import routeMiddleware from '../middlewares/routeMiddleware';
import validationMiddleware from '../middlewares/validationMiddleware';

const router = Router();

router.use(routerMiddleware);

router.get('/get', routeMiddleware, secondController .getRoute2);
router.post('/post', routeMiddleware, validationMiddleware, secondController .postRoute2);
router.delete('/delete', routeMiddleware, validationMiddleware, secondController .deleteRoute2);

export default router;
