# Teste QA — ServeRest

Projeto de testes automatizados utilizando [Cypress](https://www.cypress.io/) e JavaScript, cobrindo os fluxos de login da [ServeRest](https://serverest.dev) — uma API REST pública que simula uma loja virtual.

**Autor:** Lucien "Oliver" Chalom

---

## Estrutura do projeto

```
cypress/
└── e2e/
    ├── API/
    │   └── Login.cy.js        # Testes de API do endpoint POST /login
    └── Frontend/
        └── Login.cy.js        # Testes de interface da página de login
```

---

## Pré-requisitos

- [Node.js](https://nodejs.org) v18 ou superior
- npm

---

## Instalação

```bash
npm install
```

---

## Executando os testes

**Interface visual (recomendado para desenvolvimento):**
```bash
npx cypress open
```

**Linha de comando:**
```bash
# Todos os testes
npx cypress run

# Apenas testes de API
npx cypress run --spec "cypress/e2e/API/**"

# Apenas testes de Frontend
npx cypress run --spec "cypress/e2e/Frontend/**"
```

---

## Cenários cobertos

### API — `POST /login`

| Cenário | Status esperado |
|---|---|
| Login com credenciais válidas — retorna token Bearer | 200 |
| Login com senha incorreta | 401 |
| Login com email não cadastrado | 401 |

### Frontend — Página de login

| Cenário | Resultado esperado |
|---|---|
| Login com credenciais válidas — redireciona para home | Sai da página `/login` |
| Login com senha incorreta — exibe mensagem de erro | "Email e/ou senha inválidos" |
| Login com email não cadastrado — exibe mensagem de erro | "Email e/ou senha inválidos" |

---

## URLs utilizadas

| Ambiente | URL |
|---|---|
| API | https://serverest.dev |
| Frontend | https://front.serverest.dev |
