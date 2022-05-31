FROM node:14-alpine
RUN npm i express --save
RUN npm i mysql --save
RUN npm i sequelize --save
RUN npm i mysql2 --save
RUN npm install nodemon -g
RUN npm i
WORKDIR /app
COPY . ./app

EXPOSE 3000
CMD ["nodemon"]