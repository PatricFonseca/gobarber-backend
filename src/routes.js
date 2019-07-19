import { Router } from 'express';
// import User from './app/models/user';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

/*
routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Patric de Paiva',
    email: 'patric.ccomp@gmail.com',
    password_hash: 2304924924,
  });

  return res.json(user);
});
*/

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
