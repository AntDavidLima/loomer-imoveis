class Model {
  id: string;

  name: string;

  cpf: string;

  email: string;

  password: string;

  constructor(name: string, cpf: string, email: string, password: string) {
    this.name = name;
    this.cpf = cpf;
    this.email = email;
    this.password = password;
  }
}

export default Model;
