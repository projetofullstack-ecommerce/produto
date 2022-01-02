FROM node:14-alpine As builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod
FROM nginx:1.17.1-alpine
COPY --from=builder /usr/src/app/dist/produto/ /usr/share/nginx/html
