FROM debian:buster-slim

RUN apt-get update -y && apt-get install -y curl socat

RUN apt update -y && apt install -y curl socat
RUN curl -L -o /usr/local/bin/hasura https://github.com/hasura/graphql-engine/releases/download/v2.11.1/cli-hasura-linux-amd64
RUN chmod +x /usr/local/bin/hasura

WORKDIR /usr/src/hasura

COPY . ./

RUN chmod +x ./start.sh

CMD "./start.sh"
