# Etapa 1: Build da aplicação Angular
FROM node:20-alpine AS build-angular

WORKDIR /app

# Copia o código-fonte para o container
COPY . .

# Instala as dependências e constrói o app Angular
RUN npm install
RUN npm run build --prod

# Etapa 2: Configuração do Apache para servir a aplicação
FROM httpd:2.4-alpine

# Define o diretório de trabalho do Apache
WORKDIR /usr/local/apache2/htdocs

# Copia os arquivos construídos da fase anterior
COPY --from=build-angular /app/dist/sober-strike .

# Exponha a porta 80 para o Apache servir a aplicação
EXPOSE 80
