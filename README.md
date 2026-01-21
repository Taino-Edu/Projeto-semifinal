<div align="center">

  # 🚀 Kanban Fullstack (Cyberpunk Edition)

  **Um sistema de gestão de tarefas de alta performance com design Glassmorphism.**

  ![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
  ![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
  ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
  ![TypeORM](https://img.shields.io/badge/TypeORM-FE0C05?style=for-the-badge&logo=typeorm&logoColor=white)

  <img src="./image_e58aca.png" alt="Dashboard Preview" width="100%" style="border-radius: 10px; box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);">

</div>

<br />

## 📋 Sobre o Projeto

Este projeto é uma aplicação **Fullstack** robusta para gerenciamento de tarefas (Kanban), desenvolvida para unir performance técnica com uma experiência de usuário imersiva.

Diferente de listas de tarefas comuns, este sistema oferece um **Dashboard Executivo** em tempo real e uma interface **Drag-and-Drop** fluida, tudo envelopado em um design moderno estilo *Cyberpunk/Glassmorphism*.

### ✨ Funcionalidades Principais

- **🎨 UI/UX Imersiva:** Design responsivo com efeito de vidro (Glassmorphism), gradientes neon e animações suaves.
- **✋ Drag-and-Drop:** Movimentação natural de cards entre colunas (A Fazer, Em Progresso, Feito) utilizando `Angular CDK`.
- **📊 Dashboard de Métricas:** Visualização em tempo real do progresso do projeto, contagem de tarefas e alertas de atraso.
- **📅 Gestão Inteligente:** Sistema de prazos com destaque visual automático para tarefas atrasadas.
- **📝 Detalhes e Notas:** Modal de visualização rápida para descrição detalhada das tarefas.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído seguindo os princípios de **Clean Architecture** e **Separation of Concerns**:

| Backend (API) | Frontend (Client) |
| :--- | :--- |
| **NestJS** (Framework Node.js Progressivo) | **Angular 17+** (Standalone Components) |
| **GraphQL** (API eficiente e flexível) | **Apollo Client** (Gerenciamento de Estado) |
| **TypeORM** (ORM robusto) | **Angular CDK** (Física de arrastar) |
| **SQLite** (Banco de dados leve e rápido) | **CSS3 Puro** (Sem frameworks pesados) |

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação em sua máquina local.

### Pré-requisitos
Certifique-se de ter o **Node.js** (v16 ou superior) e o **NPM** instalados.

### 1️⃣ Clonar o Repositório
```bash
git clone [https://github.com/Taino-Edu/Projeto-semifinal.git](https://github.com/Taino-Edu/Projeto-semifinal.git)
cd Projeto-semifinal  
2️⃣ Configurar e Rodar o Backend
Bash

cd backend
npm install

# Iniciar o servidor em modo de desenvolvimento
npm run start:dev

# O servidor rodará em: http://localhost:3000
# GraphQL Playground: http://localhost:3000/graphql
3️⃣ Configurar e Rodar o Frontend
Abra um novo terminal, volte para a raiz e entre na pasta do frontend:

Bash

cd frontend
npm install

# Iniciar a aplicação Angular
npm start

# O projeto estará disponível em: http://localhost:4200
📸 Screenshots
Kanban Board
Visualização das colunas com suporte a arrastar e soltar.

<div align="center"> <img src="./image_e51da9.png" alt="Kanban Board" width="800"> </div>

Estrutura de Código
Backend organizado com módulos, services e resolvers.

<div align="center"> <img src="./image_e6739f.png" alt="Code Structure" width="800"> </div>

🤝 Contribuição
Contribuições são bem-vindas! Se você tiver uma sugestão para melhorar isso, por favor, faça um fork do repositório e crie um pull request.

Faça um Fork do projeto

Crie sua Feature Branch (git checkout -b feature/MinhaFeature)

Faça o Commit (git commit -m 'Adicionando uma feature incrível')

Faça o Push (git push origin feature/MinhaFeature)

Abra um Pull Request

<div align="center"> Desenvolvido com 💜 por <strong>Edson Taino</strong> </div>
