# CRUD de clientes

API simples para armazenamento de e-mails de clientes.

## Ambientes

- Ambiente de desenvolvimento: [http://localhost:3000](http://localhost:3000)
- Ambiente de produção: [https://onrender-clientes-api.com](https://onrender-clientes-api.com)

## Rotas

### Buscar todos os usuários

- **Descrição:** Rota responsável por buscar todos os usuários cadastrados.
- **Tags:** Rotas sem parâmetros
- **Método:** GET
- **Respostas:**
  - 200 OK
    - Tipo: array
    - Exemplo:
      ```json
      [
        {
          "id": 1,
          "name": "Leandro Gonçalves",
          "email": "leandro@mail.com"
        },
        {
          "id": 2,
          "name": "Luiz Gonçalves",
          "email": "luiz@mail.com"
        },
        {
          "id": 3,
          "name": "Bibiana R.C. Gonçalves",
          "email": "bibi@mail.com"
        }
      ]
      ```
- **Segurança:** JWT

### Cadastrar usuário

- **Descrição:** Rota responsável por cadastrar o e-mail dos clientes.
- **Tags:** Rotas sem parâmetros
- **Método:** POST
- **Corpo da Requisição:**
  - Tipo: application/json
  - Esquema: createUser
- **Respostas:**
  - 201 Created
    - Tipo: object
    - Esquema: readUser
    - Exemplo:
      ```json
      {
        "id": 1,
        "name": "Leandro Gonçalves",
        "email": "leandro@mail.com"
      }
      ```
  - 409 Conflict
    - Tipo: application/json
    - Exemplo:
      ```json
      {
        "message": "Email already exists"
      }
      ```
- **Segurança:** JWT

### Buscar usuário por ID

- **Descrição:** Rota responsável por buscar o usuário informado.
- **Tags:** Rotas com parâmetros
- **Método:** GET
- **Parâmetros:**
  - Tipo: query
  - Nome: id
  - Descrição: Id do usuário que deseja buscar
- **Respostas:**
  - 200 OK
    - Tipo: object
    - Exemplo:
      ```json
      {
        "id": 1,
        "name": "Leandro Gonçalves",
        "email": "leandro@mail.com"
      }
      ```
- **Segurança:** JWT

### Atualizar dados do usuário

- **Descrição:** Rota responsável por atualizar os dados do usuário informado.
- **Tags:** Rotas com parâmetros
- **Método:** PATCH
- **Parâmetros:**
  - Tipo: query
  - Nome: id
  - Descrição: Id do usuário que deseja atualizar
- **Corpo da Requisição:**
  - Tipo: application/json
  - Esquema: createUser
- **Respostas:**
  - 200 OK
    - Tipo: object
    - Esquema: readUser
    - Exemplo:
      ```json
      {
        "id": 1,
        "name": "Leandro Gonçalves",
        "email": "leandro@mail.com"
      }
      ```
  - 409 Conflict
    - Tipo: application/json
    - Exemplo:
      ```json
      {
        "message": "Email already exists"
      }
      ```
- **Segurança:** JWT

### Deletar usuário por ID

- **Descrição:** Rota responsável por deletar os dados do usuário informado.
- **Tags:** Rotas com parâmetros
- **Método:** DELETE
- **Parâmetros:**
  - Tipo: query
  - Nome: id
  - Descrição: Id do usuário que deseja deletar
- **Respostas:**
  - 204 No Content
- **Segurança:** JWT

## Esquemas

### createUser

- Tipo: object
- Propriedades:
  - name: string
  - email: string

### readUser

- Tipo: object
- Propriedades:
  - id: number
  - name: string
  - email: string

### readAllUser

- Tipo: array
- Propriedades:
  - id: number
  - name: string
  - email: string