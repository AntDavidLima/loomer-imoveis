import { compare } from 'bcryptjs';
import { getRepository } from 'typeorm';
import User from '../models/User';

interface RequestDTO {
  email: string;
  password: string;
}

interface ResponseDTO {
  user: User;
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

    return { user };
  }
}

export default AuthenticateUserService;
