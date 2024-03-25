import express from 'express';
import AppController from '../controller/AppController';
import UsersController from '../controller/UsersController';

const router = express.Router();

router.get('/', AppController.getHome);
router.post('/addUser', UsersController.newUser);
router.get('/login', UsersController.getUser);
router.get('/logout', UsersController.endSession);

export default router;
