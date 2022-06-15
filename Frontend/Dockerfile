FROM node:14-alpine

RUN npm i -g @ionic/cli
RUN npm i react-scripts 
RUN npm i

WORKDIR /app
COPY . /app

EXPOSE 8100

CMD ionic serve