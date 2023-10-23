This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Documentação da API de Jogos para a Equipe Octopus

## Introdução

Este documento serve como um guia para a API de Jogos, desenvolvida em React JS para a equipe Octopus. Aqui, você encontrará informações sobre a estrutura da API, os componentes React e como interagir com os endpoints.

## Pré-requisitos

- Node.js
- React JS
- Axios para chamadas de API

## Instalação e Configuração

1. Clone o repositório do GitHub.
2. Rode `npm install` para instalar as dependências.
3. Utilize `npm run dev` para iniciar o servidor de desenvolvimento.

## Estrutura de Diretórios

```
src/
|-- components/
| |-- GameCard.js
| |-- GameDetail.js
|-- api/
| |-- page.jsx
|-- App.js
```
### Link da API
'https://api.rawg.io/api/games?key=2014ca8f1ab34906952da5f330744b55'

### GameList.js

Este componente lista todos os jogos disponíveis na API.

```jsx
import React from 'react';
import axios from 'axios';

const GameList = () => {
  // Fetch data logic here
};
```

### GameDetail.js

Este componente exibe informações detalhadas sobre um jogo específico.

```jsx
import React from 'react';
import axios from 'axios';

const GameDetail = ({ gameId }) => {
  // Fetch data logic here
};
```

### Exemplo de Uso com Axios

Para listar todos os jogos:

```jsx
axios.get('/api/games')
  .then(response => {
    // Handle the response
  })
  .catch(error => {
    // Handle the error
  });
```

## Conclusão

Esta API foi projetada para ser modular e fácil de usar. Ela fornece uma base sólida sobre a qual a equipe Octopus pode construir e adaptar funcionalidades conforme necessário.

## Contribuidores

- Arthur Borges - Tech Lead;
- Isabela Oliveira;
- João Victor Oliveira;
- Matheus Zambon;
- Nicoly Val;