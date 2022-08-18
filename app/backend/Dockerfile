FROM node:16.14-alpine

WORKDIR /app-backend

COPY package*.json /app-backend

ENTRYPOINT ["npm", "install"]

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]