import User from '../models/User';

class UsersRepository {
  private user: User[];

  constructor() {
    this.user = [];
  }

  public create(
    id: string,
    name: string,
    cpf: string,
    email: string,
    password: string,
  ): User {
    const user = new User(id, name, cpf, email, password);

    this.user.push(user);

    return user;
  }
}

export default UsersRepository;
