#  Sistema de Jogos – API Monolítica, Microserviços e API Gateway

##  Descrição do Projeto

Este projeto consiste no desenvolvimento de um sistema de gestão de jogos utilizando duas abordagens arquiteturais:

* Arquitetura **Monolítica**
* Arquitetura de **Microserviços com API Gateway**

O sistema permite gerir:

* Jogos 
* Avaliações 
* Utilizadores 

---

##  Arquitetura do Sistema

###  Monólito

Aplicação única que contém todas as funcionalidades:

* Gestão de jogos
* Gestão de reviews
* Gestão de utilizadores

###  Microserviços

O sistema foi dividido em serviços independentes:

* **Game Service** → gestão de jogos
* **Review Service** → gestão de avaliações
* **User Service** → gestão de utilizadores

###  API Gateway

Responsável por:

* Centralizar as requisições
* Encaminhar pedidos para os serviços corretos

---

##  Estrutura do Projeto

```
sistema-jogos/
│
├── monolito/
│   └── server.js
│
├── microservices/
│   ├── game-service/
│   │   └── server.js
│   ├── review-service/
│   │   └── server.js
│   └── user-service/
│       └── server.js
│
└── gateway/
    └── server.js
```

---

##  Tecnologias Utilizadas

* Node.js
* Express.js
* http-proxy-middleware
* Postman

---

##  Como Executar o Projeto

###  Instalar dependências

Em cada pasta do projeto:

```bash
npm init -y
npm install express
```

No gateway:

```bash
npm install http-proxy-middleware
```

---

###  Executar Microserviços

Abrir 3 terminais:

```bash
cd microservices/game-service
node server.js
```

```bash
cd microservices/review-service
node server.js
```

```bash
cd microservices/user-service
node server.js
```

---

###  Executar API Gateway

```bash
cd gateway
node server.js
```

---

### Executar Monólito (opcional)

```bash
cd monolito
node server.js
```

 Nota: O monólito deve usar uma porta diferente (ex: 4000)

---

##  Endpoints Disponíveis

###  Através do Gateway (porta 3000)

| Método | Endpoint | Descrição           |
| ------ | -------- | ------------------- |
| GET    | /games   | Listar jogos        |
| POST   | /games   | Criar jogo          |
| GET    | /reviews | Listar avaliações   |
| POST   | /reviews | Criar avaliação     |
| GET    | /users   | Listar utilizadores |
| POST   | /users   | Criar utilizador    |

---

## Testes

Os testes foram realizados utilizando:

* Postman

### Exemplo de requisição:

**POST /games**

```json
{
  "name": "GTA V"
}
```

---

##  Funcionamento do Sistema

Fluxo de comunicação:

```
Cliente → API Gateway → Microserviço → Resposta
```

Exemplo:

```
GET /games → Gateway → Game Service → Resposta JSON
```

---

##  Comparação de Arquiteturas

### Monólito

 Simples de implementar
 Fácil de testar
 Difícil de escalar

### Microserviços

 Escalável
 Modular
 Independente
 Mais complexo

### API Gateway

 Centraliza requisições
 Facilita gestão
 Melhora segurança

---

##  Conclusão

O projeto demonstra na prática:

* Diferença entre monólito e microserviços
* Comunicação entre serviços
* Uso de API Gateway

---


