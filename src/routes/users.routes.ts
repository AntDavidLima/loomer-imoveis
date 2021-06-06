import { Router } from 'express';

import UsersRepository from '../repositories/UsersRepository';

const usersRouter = Router();

const usersRepository = new UsersRepository();

usersRouter.post('/signup', (req, res) => {
  const { id, name, cpf, email, password } = req.body;

  const user = usersRepository.create(id, name, cpf, email, password);

  return res.json(user);
});

export default usersRouter;
