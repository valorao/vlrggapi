FROM node:21-alpine

WORKDIR /valorao/api

COPY controllers /valorao/api/controllers
COPY middlewares /valorao/api/middlewares
COPY routes /valorao/api/routes
COPY src /valorao/api/src
COPY static /valorao/api/static

COPY package-lock.json /valorao/api/
COPY package.json /valorao/api/
COPY tsconfig.json /valorao/api/

RUN npm i
RUN npm install -g nodemon

CMD ["nodemon", "src/server.ts"]
