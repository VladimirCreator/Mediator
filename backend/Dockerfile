# Initially Modified: 09:57 PM Tue 26 Sep 2023
FROM swift as build

WORKDIR /app
COPY . .

RUN swift build


FROM alpine as production

ENV COMPILER_BOT_TOKEN=

WORKDIR /app

COPY --from=build /app/.build/x86_64-unknown-linux-gnu/debug .

RUN chmod +x /app/compiler_bot
CMD ["/app/compiler_bot"]
