import { Router } from 'express';
const router = Router();

import * as usersCtrl from '../controllers/users.controller';
import { protect } from '../middlewares/authMiddleware';

router.post('/api/users/login', usersCtrl.authUser);
router.post('/api/users/register', usersCtrl.registerUser);
router.get('/api/users/profile', protect, usersCtrl.getUserProfile);
router.put('/api/users/profile', protect, usersCtrl.updateUserProfile);

export default router;
