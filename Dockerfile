FROM node:latest as build

WORKDIR /app

COPY package.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

RUN npm run build

FROM nginx:latest

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/ef-frontend/browser /usr/share/nginx/html

EXPOSE 80
