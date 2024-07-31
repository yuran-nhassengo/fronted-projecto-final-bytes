Div-Just Front-End
Bem-vindo ao repositório front-end do projeto Div-Just! Esta aplicação foi construída com ReactJS, TailwindCSS e Vite para criar uma experiência de usuário moderna e responsiva. O front-end se conecta com uma API backend desenvolvida em Node.js e Express.

Índice
Sobre o Projeto
Tecnologias Utilizadas
Configuração do Ambiente
Instruções de Uso
Estrutura do Projeto
Conectando com a API Backend
Contribuição
Licença
Sobre o Projeto
O Div-Just é uma plataforma inovadora para formalizar e monitorar empréstimos pessoais e microcréditos. Este repositório contém o código fonte do front-end da aplicação, desenvolvida para proporcionar uma interface intuitiva e responsiva.

Tecnologias Utilizadas
ReactJS: Biblioteca JavaScript para construção da interface do usuário.
TailwindCSS: Framework de CSS utilitário para estilização.
Vite: Ferramenta de construção rápida para desenvolvimento e bundling.
Axios: Cliente HTTP para fazer requisições à API.
Configuração do Ambiente
Para começar a trabalhar com o projeto, você precisará ter o Node.js e o npm ou Yarn instalados em sua máquina.

1. Clone o Repositório
bash
Copiar código
git clone https://github.com/SEU-USUARIO/div-just-frontend.git
cd frontend
2. Instale as Dependências
Se estiver usando npm:

bash
Copiar código
npm install
Se estiver usando Yarn:

bash
Copiar código
yarn install
3. Configuração do Ambiente
Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente necessárias. Por exemplo:

env
Copiar código
REACT_APP_API_URL=http://localhost:5000/api
Certifique-se de substituir http://localhost:5000/api pelo URL da sua API backend.

Instruções de Uso
Desenvolvimento
Para iniciar o servidor de desenvolvimento, execute:

Se estiver usando npm:

bash
Copiar código
npm run dev
Se estiver usando Yarn:

bash
Copiar código
yarn dev
Isso iniciará o servidor Vite e você poderá acessar a aplicação no navegador em http://localhost:3000.

Construção para Produção
Para criar uma versão otimizada para produção, execute:

Se estiver usando npm:

bash
Copiar código
npm run build
Se estiver usando Yarn:

bash
Copiar código
yarn build
Isso criará uma pasta dist com os arquivos prontos para produção.

