import express from 'express';
import AppController from '../controller/AppController';
import UsersController from '../controller/UsersController';
import EventsController from '../controller/EventsController';

const router = express.Router();

router.get('/', AppController.getHome);
router.post('/addUser', UsersController.newUser);
router.get('/login', UsersController.getUser);
router.get('/logout', UsersController.endSession);
router.post('/event', EventsController.createEvent);
router.get('/search_events', EventsController.getEvents);

export default router;
