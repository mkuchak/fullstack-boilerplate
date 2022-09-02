#!/bin/bash

cd /usr/src/hasura || {
    echo "Hasura folder '/usr/src/hasura' not found"
    exit 1
}

# Trick to bypass CLI hasura console on Docker environment
socat TCP-LISTEN:8080,fork TCP:graphql-engine:8080 &
socat TCP-LISTEN:9695,fork,reuseaddr,bind=hasura-console TCP:127.0.0.1:9695 &
socat TCP-LISTEN:9693,fork,reuseaddr,bind=hasura-console TCP:127.0.0.1:9693 &
{
    # Apply migrations
    hasura migrate apply --database-name=default || exit 1

    # Apply metadata changes
    hasura metadata apply || exit 1

    # Apply seeds to populate database
    hasura seeds apply --database-name=default

    # Run console if specified
    if [[ -v HASURA_RUN_CONSOLE ]]; then
        echo "Starting console..."
        hasura console --log-level DEBUG --address 127.0.0.1 --skip-update-check --no-browser || exit 1
    else
        echo "Started without console"
        tail -f /dev/null
    fi
}
