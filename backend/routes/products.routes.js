import { Router } from 'express';
const router = Router();

import * as productsCtrl from '../controllers/products.controller';

router.get('/api/products', productsCtrl.getProducts);
router.get('/api/products/:id', productsCtrl.getProductById);

export default router;
