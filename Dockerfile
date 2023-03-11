FROM node:16.13.2 as build
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "dev"]