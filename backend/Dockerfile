FROM swift:5.9

WORKDIR root

RUN apt-get update

RUN apt-get install libcurl4-openssl-dev
RUN apt install g++ -y && \
    apt install unzip -y && apt install nodejs -y && apt install -y npm && npm install -g bun

COPY Package.swift    \
     Package.resolved \
     .env             \
     .
RUN swift package resolve

COPY Sources \
     Sources
RUN mkdir Tests \
          Tests/BotTests

RUN swift build -c release
#
#COPY .build \
#     .build

CMD [".build/x86_64-unknown-linux-gnu/release/Bot"]
