import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import { sign } from 'jsonwebtoken';
import User from '../models/User';
import auth from '../config/auth';

interface RequestDTO {
  name: string;
  cpf: string;
  email: string;
  password: string;
}

interface ResponseDTO {
  user: User;
  token: string;
}

class CreateUserService {
  public async execute({
    name,
    cpf,
    email,
    password,
  }: RequestDTO): Promise<ResponseDTO> {
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

    const token = sign({ id: user.id }, auth.secret, { expiresIn: 86400 });

    return { user, token };
  }
}

export default CreateUserService;
