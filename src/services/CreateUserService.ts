import { getRepository } from 'typeorm';
import User from '../models/User';

interface RequestDTO {
  name: string;
  cpf: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({
    name,
    cpf,
    email,
    password,
  }: RequestDTO): Promise<User> {
    const userRepository = getRepository(User);

    const user = userRepository.create({
      name,
      cpf,
      email,
      password,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
