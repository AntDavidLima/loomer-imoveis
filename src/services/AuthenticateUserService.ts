import { compare } from 'bcryptjs';
import { getRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';

import User from '../models/User';

import auth from '../config/auth';

interface RequestDTO {
  email: string;
  password: string;
}

interface ResponseDTO {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: RequestDTO): Promise<ResponseDTO> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new Error('Email não cadastrado!');
    }

    const mathcedPass = await compare(password, user.password);

    if (!mathcedPass) {
      throw new Error('Senha incorreta!');
    }

    const token = sign({ id: user.id }, auth.secret, { expiresIn: 86400 });

    return { user, token };
  }
}

export default AuthenticateUserService;
