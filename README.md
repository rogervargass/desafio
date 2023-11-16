#Teste FluxStation

## Telas

A aplicação conta com uma primeira tela mostra os ultimos motoristas cadastrados e os ultimos abastecimentos.
![Captura de tela 2023-11-16 094835](https://github.com/rogervargass/desafio-2/assets/70342776/00855214-60d8-444c-bbdc-40f48af78a17)

Acessando o menu lateral clicando em "Motoristas" voce é direcionado para a tela de motoristas onde mostra os ultimos motoristas cadastrados e um formulario para cadastro de novos.
![Captura de tela 2023-11-16 094922](https://github.com/rogervargass/desafio-2/assets/70342776/36ebccae-026d-4997-8e82-9ea18d0f0950)

Clicando em algum motorista da tabela voce é direcionado para a pagina desse motorista com os seus detalhes.
![Captura de tela 2023-11-16 101037](https://github.com/rogervargass/desafio-2/assets/70342776/a3284818-550a-4dc1-9204-ffde8203e074)

E a ultima tela voce acessa clicando no menu lateral em "Abastecimentos" e nela mostra os ultimos abastecimentos feitos e também pode ser feito um novo cadastro de abastecimento.
![Captura de tela 2023-11-16 094902](https://github.com/rogervargass/desafio-2/assets/70342776/072da931-ebf5-486a-894f-d56fc97f5341)

#### Frontend

- NextJs 14 com Typescript
- SWR
- Axios
- Tailwind Css

#### Backend

- NestJS com Typescript
- TypeORM
- Swagger
- Jest

#### Bando de dados

- Postgres
- Docker

## Rodar o app

Frontend:

```bash
$ npm install
$ npm run dev
```

Backend:

```bash
$ npm install
$ docker-compose up -d
$ npm run start:dev
```

## Endpoints da API

- **Motoristas:**

  - `GET /driver`: Retorna todos os motoristas.
  - `GET /driver/:id`: Retorna um motorista pelo seu ID.
  - `POST /driver`: Adiciona um novo motorista.

- **Abastecimentos:**

  - `GET /supply`: Retorna todos os abastecimentos.
  - `POST /supply`: Adiciona um novo abastecimento.

- Voce pode ter acesso ao Swagger acessando o endpoint /api
