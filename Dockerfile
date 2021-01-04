FROM node:14.15.3-alpine

WORKDIR /usr/app
COPY package.json ./

RUN npm i

COPY . .

EXPOSE 4200

CMD [ "npm","start" ]
