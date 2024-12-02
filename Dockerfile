FROM node:20.11.1-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npx run build

RUN npx prisma generate

EXPOSE 3000

CMD [  "npm", "run", "start:migrate:prod" ]