import { Router } from 'express';
const router = Router();

import * as usersCtrl from '../controllers/users.controller';
import { admin, protect } from '../middlewares/authMiddleware';

router.post('/login', usersCtrl.authUser);
router.post('/register', usersCtrl.registerUser);
router.get('/profile', protect, usersCtrl.getUserProfile);
router.put('/profile', protect, usersCtrl.updateUserProfile);
router.get('/', protect, admin, usersCtrl.getUsers);
router.delete('/:id', protect, admin, usersCtrl.deleteUser);
router.get('/:id', protect, admin, usersCtrl.getUserById);
router.put('/:id', protect, admin, usersCtrl.updateUser);

export default router;
