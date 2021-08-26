FROM node

WORKDIR /camp

COPY package.json /camp

RUN npm install

COPY . /camp

ENV PORT 9009

EXPOSE $PORT

CMD [ "npm", "start" ]
