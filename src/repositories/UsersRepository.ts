import User from '../models/User';

class UsersRepository {
  private user: User[];

  constructor() {
    this.user = [];
  }

  public create(
    name: string,
    cpf: string,
    email: string,
    password: string,
  ): User {
    const user = new User(name, cpf, email, password);

    this.user.push(user);

    return user;
  }
}

export default UsersRepository;
