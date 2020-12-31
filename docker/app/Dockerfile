FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ADD package.json /usr/src/app/package.json

RUN npm install -g typescript

RUN npm install

ADD . /usr/src/app

RUN tsc

EXPOSE 3000

CMD [ "npm", "start" ]