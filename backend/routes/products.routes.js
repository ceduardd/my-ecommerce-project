import { Router } from 'express';
const router = Router();

import * as productsCtrl from '../controllers/products.controller';
import { protect, admin } from '../middlewares/authMiddleware';

router.get('/top', productsCtrl.getTopProducts);
router.get('/', productsCtrl.getProducts);
router.get('/:id', productsCtrl.getProductById);
router.post('/', protect, admin, productsCtrl.createProduct);
router.put('/:id', protect, admin, productsCtrl.updateProduct);
router.delete('/:id', protect, admin, productsCtrl.deleteProduct);
router.post('/:id/reviews', protect, productsCtrl.createProductReview);

export default router;
