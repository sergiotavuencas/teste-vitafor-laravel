# # Etapa 1: Construção
# FROM node:16 AS build

# # Define o diretório de trabalho no contêiner
# WORKDIR /app

# # Copia o arquivo package.json e package-lock.json para instalar as dependências
# COPY package.json package-lock.json ./

# # Instala as dependências do projeto
# RUN npm install

# # Copia o código-fonte para o diretório de trabalho
# COPY . .

# # Gera o build do projeto
# RUN npm run build

# # Etapa 2: Servindo a aplicação
# FROM nginx:alpine

# # Copia os arquivos do build para o diretório padrão do Nginx
# COPY --from=build /app/dist /usr/share/nginx/html

# # Copia o arquivo de configuração do Nginx
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Expõe a porta 80 para acessar o frontend
# EXPOSE 5173

# # Comando para iniciar o Nginx
# CMD ["nginx", "-g", "daemon off;"]

# FROM node:18-alpine

# WORKDIR /app

# COPY package.json .

# RUN npm install

# RUN npm i -g serve

# COPY . .

# RUN npm run build

# EXPOSE 5173

# CMD [ "serve", "-s", "dist" ]