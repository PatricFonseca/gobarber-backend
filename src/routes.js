import { Router } from 'express';
// import User from './app/models/user';
import UserController from './app/controllers/userController';

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
export default routes;
