FROM node:14-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i --only=production
COPY . ./

EXPOSE 8080
CMD ["npm", "run", "docker"]