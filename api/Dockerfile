FROM node:16

WORKDIR /var/app

COPY package*.json ./

RUN npm install --no-deb

COPY app.js .

EXPOSE 3000
CMD [ "node", "app.js" ]
