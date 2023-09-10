FROM node:alpine
WORKDIR /usr/local
COPY package*.json ./
RUN npm install && npm cach clean --force
ENV PATH=/usr/local/node_modules/.bin:$PATH
WORKDIR /usr/local/app
COPY app /usr/local/app/
CMD node app.js