FROM node:latest as builder

WORKDIR root

COPY package.json      \
     package-lock.json \
     .

RUN npm install

COPY . \
     .
RUN npm run build


FROM nginx:latest

WORKDIR app

COPY --from=builder root/dist \
     .
COPY nginx.conf \
     /etc/nginx/

CMD ["nginx", "-g", "daemon off;"]
# Last Modified: 07:49 AM Tue 03 Oct 2023
