# Web Portfolio

O trabalho apresentado neste repositório é o front-end de um sistema de gerenciamento de portfolios. Os usuários do sistema podem criar um perfil e inserir informações de seus próprios projetos para terem uma página própria de forma simples e prática. Foi realizado o CRUD para o perfil de usuário e para os projetos dentro de um portfolio, o sistema contém um front-end Next.JS e backend Java + Spring, estes foram integrados para as funcionalidades principais, mas o sistema não está completamente integrado e funcional devido ao prazo da disciplina para qual foi desenvolvido.

Este é um projeto da disciplina XDES03 - Programação Web, realizado em 2023.2 sob o docente Phyllipe Lima - [https://github.com/phillima](https://github.com/phillima) - por mim e Lucas Batista Pereira - [https://github.com/Perebati](https://github.com/Perebati).

O projeto foi criado em duas partes, o presente repositório contém o front-end do sistema, o qual foi desenvolvido utilizando [Next.js](https://nextjs.org/) bootstrapped com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) e auxiliado por [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) para a estilização.

A execução do código do front-end requer a execução do back-end, que pode ser encontrado no repositório [TrabalhoCOM222](https://github.com/Perebati/TrabalhoCOM222).

## Execução

É necessário clonar o back-end através do link apresentado acima, ter os requisitos necessários para sua execução e iniciá-lo.

Após isso, o presente repositório pode ser clonado e deve ser adicionado à ele o arquivo .env.local, contendo a url de execução do servidor como o exemplo: `NEXT_PUBLIC_BACKEND_URL: "http://localhost:8080/api"`, existe apenas essa variável de ambiente.

O sistema então poderá ser executado através dos comandos:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Será possível acessá-lo através da url [http://localhost:3000](http://localhost:3000).

## Páginas

Aqui estão as visualizações das páginas principais do sistema:

Página inicial
![página inicial](./screenshots/Tela%20inicial.jpeg)

Página de um portfolio (versão web)
![página portfolio web](./screenshots/Página%20portfolio.jpeg)

Página de um portfolio (versão mobile)
![página portfolio mobile](./screenshots/Página%20portfolio%20mobile.jpeg)

Criação de conta
![Criação de conta](./screenshots/Criação%20de%20conta.jpeg)

Edição do perfil
![Edição do perfil](./screenshots/Configuração%20de%20perfil.jpeg)

Edição do portfolio
![Edição do portfolio](./screenshots/Configuração%20de%20projetos.jpeg)