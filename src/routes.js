import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

// import User from './app/models/user';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';
import FileController from './app/controllers/FileController';
import ProvideController from './.app/controllers/ProvideController';

const routes = new Router();
const upload = multer(multerConfig);

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

routes.get('/providers', ProvideController.index);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
