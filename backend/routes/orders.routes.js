import { Router } from 'express';
const router = Router();

import * as ordersCtrl from '../controllers/orders.controller';
import { protect } from '../middlewares/authMiddleware';

router.post('/api/orders/', protect, ordersCtrl.addOrderItems);

export default router;
