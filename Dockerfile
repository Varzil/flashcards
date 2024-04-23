FROM node:18-alpine
WORKDIR /varzil/
COPY public/ /varzil/public
COPY src/ /varzil/src
COPY package.json /varzil/

RUN npm install
CMD ["npm", "start"]