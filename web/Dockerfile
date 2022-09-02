FROM node:18-alpine

RUN mkdir -p /home/web/node_modules && chown -R node:node /home/web

WORKDIR /home/web

COPY ./package*.json ./

RUN npm install

COPY . ./

COPY --chown=node:node . .

USER node

CMD ["npm", "run", "dev"]
