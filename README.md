# repository-git-frontend

yarn init -y

iniciando projeto react web

yarn add react react-dom

yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli

yarn add @babel/cli

Convertendo JS com o babel
yarn babel src/index.js --out-file public/bundle.js

Para o babel entender arquivos js
yarn add babel-loader

 Instala servidor de desenvolvimento do WebPack
 yarn add webpack-dev-server -D

 Rodar o servidor webpack
 yarn webpack serve --mode development

 Pacotes necessarios para trabalhar com CSS
 yarn add style-loader css-loader

 Pacote que permite que arquivos sejam carregados na aplicação
 yarn add file loader