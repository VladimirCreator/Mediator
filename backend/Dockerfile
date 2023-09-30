FROM swift as build
WORKDIR /app

COPY Package.swift .
COPY Sources ./Sources

RUN swift build --configuration release


FROM swift as production

WORKDIR /app

ENV COMPILER_BOT_TOKEN=
ENV IHaveNotComeUpWithAName=

COPY  --from=build /app/.build .

CMD ["/app/x86_64-unknown-linux-gnu/release/Bot"]
