<h1 align="center">
  Loomer Imóveis 🏚️
</h1>

<h2 align="center">
  Desafio para a vaga de estágio na Loomer Tech
</h2>

<ul>
  <li><a href="#wrench-tecnologias">Tecnologias utilizadas</a></li>
  <li><a href="#memo-licença">Licença</a></li>
  <li><a href="#floppy_disk-banco-de-dados">Estrutura do Banco de Dados</a></li>
  <li><a href="#runner-rodando-localmente">Rodando o Projeto Localmente</a></li>
  <li><a href="#motorway-rotas">Rotas</a></li>
</ul>

## :wrench: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- [Express](https://expressjs.com/pt-br/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/#/)
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs)

## :memo: Licença 

Este projeto está sob a licensa MIT. Veja a [LICENSE](LICENSE) para mais informações.

## :floppy_disk: Banco de dados

<img alt="Banco de dados" src="database-structure.png"/>

## :runner: Rodando localmente

Antes de tudo, abra o arquivo ormconfig.json e edite-o de acordo com as configurações do seu banco de dados, que já deve estar criado com o nome de lommer-imoveis

Depois disso, rode o seguinte comando na raiz do projeto:

```sh
yarn
```

Agora rode as migrations do banco de dados com o comando:

```sh
yarn typeorm migration:run
```

Por fim, é só startar o server

```sh
  yarn dev:server
```

## :motorway: Rotas

### User
`POST /users/signup`: Cadastro de usuários

- entrada:
```json
"name": "Nome do usuário",
"cpf": "000.000.000-00",
"email": "usuario@email.com",
"password": "12345678"
```
---

`POST /users/signin`: Login
- entrada:
```json
"email": "usuario@email.com",
"password": "12345678"
```
---
### Imóvel
`POST /properties`: Cadastro de imoveis
```json
"zip_code": "00000-000",
"number": 000,
"complement": "AB"          OPCIONAL
"rent": 000.00,
"rooms": 0,
"avaliable": true           OPCIONAL
```
---

`GET /properties`: Listagem de imoveis

---

`GET /properties/:id`: Buscar por imóvel

---

`PUT /properties/:id`: Atualização de imoveis
  - entrada:
```json
"zip_code": "00000-000",    OPCIONAL
"number": 000,              OPCIONAL
"complement": "AB"          OPCIONAL
"rent": 000.00,             OPCIONAL
"rooms": 0,                 OPCIONAL
"avaliable": true           OPCIONAL
```

---

`DELETE /properties/:id`: Remoção de imoveis

---

Feito com ♥ por David Lima [Venha me conhecer!](https://www.linkedin.com/in/antdavidlima/)
