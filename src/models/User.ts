class Model {
  id: string;

  name: string;

  cpf: string;

  email: string;

  password: string;

  constructor(
    id: string,
    name: string,
    cpf: string,
    email: string,
    password: string,
  ) {
    this.id = id;
    this.name = name;
    this.cpf = cpf;
    this.email = email;
    this.password = password;
  }
}

export default Model;
