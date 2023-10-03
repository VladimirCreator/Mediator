# Mediator
It is a bot.

## Getting Started
Убедитесь, что ваша операционная система включает в себя все необходимые зависимости.

### 1. Clone
```
$ git clone \
    https://github.com/VladimirCreator/compiler_bot.git
```

[//]: <> (### Docker)
[//]: <> (#### Deploy)
[//]: <> ($ docker compose up --detach)

## Backend
Обратите внимание, что для нормальной работы этой части программного обеспечения требуется указать токен бота и местоположение мини-приложения. Это можно осуществить путём изменения `.env`.

### Build
```
$ swift build --configuration release
```

[//]: <> (### Docker)
[//]: <> ($ docker run --publish 8080:80 \)
[//]: <> (             --detach          \)
[//]: <> (             --name $USER)

## Frontend
### Build
```
$ npm install
$ npm build
```

### Docker
```
docker run --publish 8080:80            \
    --volume dist:/usr/share/nginx/html:ro \
    --detach                            \
    --name $USER                        \
    nginx
```

[//]: <> (backend, backend-docker, frontend, frontend-docker, frontene-stdin-autofocus, master, master-development, docker-edits)
