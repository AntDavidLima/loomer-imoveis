import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/signup', async (req, res) => {
  const { name, cpf, email, password } = req.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({ name, cpf, email, password });

  return res.json(user);
});

export default usersRouter;
