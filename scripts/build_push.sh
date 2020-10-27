#!/bin/bash

beRepoName="charciavisual/issue-tracker-25-be"
feRepoName="charciavisual/issue-tracker-25-fe"
tags=($1 "latest")
DOCKER_USER=$2
DOCKER_PASSWORD=$3

docker login --username $DOCKER_USER --password $DOCKER_PASSWORD || exit 1

cd server

npm install
npm run build
docker build -t $beRepoName .

for tag in ${tags[@]}; do
    docker tag $beRepoName ${beRepoName}:${tag}
    docker push ${beRepoName}:${tag}
done

cd ../front

npm install
npm run build
docker build -t $feRepoName .

for tag in ${tags[@]}; do
    docker tag $feRepoName ${feRepoName}:${tag}
    docker push ${feRepoName}:${tag}
done