FROM node:20.11.1-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npx prisma generate

RUN npx run build


EXPOSE 3000

CMD [  "npm", "run", "start:migrate:prod" ]