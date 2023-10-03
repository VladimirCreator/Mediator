FROM swift:5.9

WORKDIR root

RUN apt-get install libcurl4-openssl-dev

COPY .build \
     .build

CMD [".build/x86_64-unknown-linux-gnu/release/Bot"]
