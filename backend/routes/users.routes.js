import { Router } from 'express';
const router = Router();

import * as usersCtrl from '../controllers/users.controller';
import { protect } from '../middlewares/authMiddleware';

router.post('/login', usersCtrl.authUser);
router.post('/register', usersCtrl.registerUser);
router.get('/profile', protect, usersCtrl.getUserProfile);
router.put('/profile', protect, usersCtrl.updateUserProfile);

export default router;
