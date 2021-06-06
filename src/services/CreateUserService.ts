import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

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

    const emailUsed = await userRepository.findOne({
      where: { email },
    });

    if (emailUsed) {
      throw new Error('Este email já está cadastrado!');
    }

    const cpfUsed = await userRepository.findOne({
      where: { cpf },
    });

    if (cpfUsed) {
      throw new Error('Este CPF já está cadastrado!');
    }

    const hashedPass = await hash(password, 8);

    const user = userRepository.create({
      name,
      cpf,
      email,
      password: hashedPass,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
