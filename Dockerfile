FROM node:lts-alpine as build-stage
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
COPY ./badni/package*.json ./
RUN npm install
COPY ./badni .
RUN npm run serve