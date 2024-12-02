FROM node:20.11.1-alpine

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma/ 

RUN npm install 

COPY . .

RUN npm run build

RUN npx prisma generate

EXPOSE 3000

# Command to run the app
CMD [  "npm", "run", "start:migrate:prod" ]