FROM node:12.18.3-alpine

WORKDIR /usr/src/app

COPY dist/* .
COPY package.json .

RUN yarn install --production

EXPOSE 8080

CMD [ "node", "server.js" ]
