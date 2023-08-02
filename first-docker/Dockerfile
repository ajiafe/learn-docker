FROM node:20-alpine3.17
WORKDIR /myDocker
COPY package.json .
RUN npm install 
COPY . .
EXPOSE 3000
# CMD ["node","app.js"]
CMD [ "npm","run","dev"]
