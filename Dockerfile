FROM node:20.11.1-alpine

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 3000

# Command to run the app
CMD [  "npm", "run", "start:migrate:prod" ]