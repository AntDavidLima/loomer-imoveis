import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/signup', async (req, res) => {
  const { name, cpf, email, password } = req.body;

  const createUser = new CreateUserService();

  try {
    const user = await createUser.execute({ name, cpf, email, password });
    return res.json(user);
  } catch (error) {
    return res.json({ erro: error.message });
  }
});

usersRouter.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  const authenticateUser = new AuthenticateUserService();

  try {
    const { user, token } = await authenticateUser.execute({ email, password });
    return res.json({ user, token });
  } catch (error) {
    return res.json({ erro: error.message });
  }
});

export default usersRouter;
