# Initially Modified: 07:38 PM Tue 26 Sep 2023
FROM node:latest as build

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .


FROM nginx:latest as production

WORKDIR ./app
COPY --from=build /app/dist/ /app
COPY nginx.conf /etc/nginx/

CMD ["nginx", "-g", "daemon off;"]
