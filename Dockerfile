FROM node

WORKDIR /nodejs-homework-rest-api

COPY . .

RUN npm isntall

EXPOSE 3000

CMD ["node", "server"]

