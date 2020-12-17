import { Router } from 'express';
const router = Router();

import * as ordersCtrl from '../controllers/orders.controller';
import { protect } from '../middlewares/authMiddleware';

router.get('/myorders', protect, ordersCtrl.getMyOrders);
router.get('/:id', protect, ordersCtrl.getOrderById);
router.post('/', protect, ordersCtrl.addOrderItems);
router.put('/:id/pay', protect, ordersCtrl.updateOrderToPaid);

export default router;
