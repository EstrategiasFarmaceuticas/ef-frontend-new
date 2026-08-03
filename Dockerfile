from node:22-alpine as build

workdir /app

env NODE_OPTIONS="--max-old-space-size=4096"

# Instalar bun
run npm install -g bun

copy package.json bun.lock ./

run bun install

copy . .

run bun run build

from node:22-alpine

workdir /app

env NODE_ENV=production
env NODE_OPTIONS="--max-old-space-size=2048"

# Instalar bun en la imagen de runtime
run npm install -g bun

copy package.json bun.lock ./

run bun install --production

copy --from=build /app/dist ./dist

expose 4200

cmd [ "bun", "run", "serve:ssr:ef-frontend-new" ]
