import { Router } from 'express';
import * as firstController from '../controllers/firstController';
import routerMiddleware from '../middlewares/routerMiddleware';
import routeMiddleware from '../middlewares/routeMiddleware';
import validationMiddleware from '../middlewares/validationMiddleware';

const router = Router();

router.use(routerMiddleware);

router.get('/get', routeMiddleware, firstController.getRoute1);
router.post('/post', routeMiddleware, validationMiddleware, firstController.postRoute1);
router.delete('/delete', routeMiddleware, validationMiddleware, firstController.deleteRoute1);

export default router;
