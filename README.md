# repository-git-frontend

yarn init -y

iniciando projeto react web

yarn add react react-dom

yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli

Interface de linha de comando (permite eu utilizar o babel na minha linha de comando).
yarn add @babel/cli

Para o babel entender arquivos js
yarn add babel-loader

Convertendo codigo com o webpack em desenvolvimento
yarn webpack --mode development

Convertendo JS com o babel
yarn babel src/index.js --out-file public/bundle.js

Instala servidor de desenvolvimento do WebPack
yarn add webpack-dev-server -D

Rodar o servidor webpack
yarn webpack serve --mode development

Pacotes necessarios para trabalhar com CSS
yarn add style-loader css-loader

Pacote que permite que arquivos sejam carregados na aplicação
yarn add file-loader

Responsavel por realizar chamadas ao back-end
yarn add axios

*create react app