FROM node:18

WORKDIR /app

COPY package*.json ./
COPY prisma ./
COPY .env ./

RUN npm install
RUN npm run migrate

COPY . .

EXPOSE 8001

CMD ["npm", "run", "start"]