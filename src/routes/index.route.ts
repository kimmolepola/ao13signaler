import express from 'express';
import {
  getGameObjectController,
  saveGameStateController,
} from '../controllers/gameObject.controller';
import {
  checkOkToStartController,
  getUserController,
  updateUsernameController,
} from '../controllers/user.controller';
import {
  loginController,
  signUpController,
  resetPasswordRequestController,
  resetPasswordController,
  logoutController,
} from '../controllers/auth.controller';

const router = express.Router();

router.get('/gameObject/:id', getGameObjectController);
router.post('/gameObject/saveGameState', saveGameStateController);
router.get('/user/checkOkToStart', checkOkToStartController);
router.get('/user', getUserController);
router.post('/user/updateUsername', updateUsernameController);
router.post('/auth/login', loginController);
router.post('/auth/signup', signUpController);
router.post('/auth/requestResetPassword', resetPasswordRequestController);
router.post('/auth/resetPassword', resetPasswordController);
router.post('/auth/logout', logoutController);

export default router;