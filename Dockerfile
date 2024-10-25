# Etapa 1: Build da aplicação Angular
FROM node:20-alpine as build-angular

WORKDIR /app

# Copia o código-fonte para o container
COPY . .

# Instala as dependências e constrói o app Angular
RUN npm install
RUN npm run build --prod

# Etapa 2: Configuração do Nginx para servir a aplicação
FROM nginx:alpine

# Copia os arquivos construídos da fase anterior
COPY --from=build-angular /app/dist/sober-strike /usr/share/nginx/html

# Copia a configuração personalizada do Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Ajusta permissões dos arquivos (opcional, mas recomendado)
RUN chmod -R 755 /usr/share/nginx/html

# Exponha a porta 80 para o Nginx servir a aplicação
EXPOSE 80

# Comando para rodar o Nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]