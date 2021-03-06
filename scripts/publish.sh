#!/usr/bin/env bash

S3_PATH="s3://$1"

npm run build
mkdir -p public/files
cp -a files/resume.pdf public/files/resume.pdf

aws s3 sync public ${S3_PATH} --acl public-read