FROM node:14-alpine

RUN npm install -g @ionic/cli
RUN npm install

WORKDIR /app
COPY . /app

EXPOSE 8100

CMD ionic serve