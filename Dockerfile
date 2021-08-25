FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV PORT 9009

EXPOSE $PORT

CMD [ "npm", "start" ]