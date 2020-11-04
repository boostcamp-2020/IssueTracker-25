#!/bin/bash

tags=($1 "latest")
DOCKER_USER=$2
DOCKER_PASSWORD=$3

beRepoName="${DOCKER_USER}/issue-tracker-25-be"
feRepoName="${DOCKER_USER}/issue-tracker-25-fe"

docker login --username $DOCKER_USER --password $DOCKER_PASSWORD || exit 1

yarn build
docker-compose build --parallel

for tag in ${tags[@]}; do
    docker tag issue_tracker_be:latest ${beRepoName}:${tag}
    docker tag issue_tracker_fe:latest ${feRepoName}:${tag}
    docker push ${beRepoName}:${tag}
    docker push ${feRepoName}:${tag}
done