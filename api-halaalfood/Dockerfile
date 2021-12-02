FROM node:alpine

WORKDIR /app

COPY /package.json ./
RUN npm install
COPY ./.env ./
COPY ./build ./

CMD ["npm", "start"]