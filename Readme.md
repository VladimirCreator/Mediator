# Mediator

## Table of Contents
- [About](#about)
- [Getting Started](#getting-started)
    - [Clone](#1-clone)
    - [Prepare .env](#2-prepare-env)
    - [Docker](#docker)
- [Backend](#backend)
    - [Build]()
    - [Docker]()
- [Frontend](#frontend)
    - [Build]()
    - [Docker]()

## About
This bot accepts as input these properties from a user:

1. language (e.g. C++);
1. source (e.g. `int main() { return 0; }`);
1. arguments (e.g. `--version`);
1. stdin (e.g. `vladimir`).

It processes these properties and sends back output of a program to the user.

## Getting Started

### 1. Clone
```
$ git clone \
    https://github.com/VladimirCreator/compiler_bot.git
```

### 2. Prepare .env
```
COMPILER_BOT_TOKEN=<YOUR_BOTS_TOKEN>
IHaveNotComeUpWithAName=<YOUR_MINI_APPS_URL>
```

### 3. Docker
```
$ docker compose up --detach
```

## Backend
Dockerfile installs all required dependecies like `g++`[^1], `swiftc`[^2], and `bun`[^3].

[^1]: Makes possible to compile C++ files.
[^2]: Makes possible to compile Swift files.
[^3]: Makes possible to interpret JavaScript and TypeScript files.

> **Pay Attention**\
> For the normal operation of this part of the software, it is required to specify the bot token and the location of mini app.\
> This can be done by changing `.env`.

### Build
```
$ swift build --configuration release
```

### Docker
```
$ docker run --publish 8080:80 \
             --detach          \
             --name $USER)
```
> **Pay Attention**\
> This Dockerfile is probably the worst Dockerfile.

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
