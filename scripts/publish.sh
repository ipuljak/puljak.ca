#!/usr/bin/env bash

s3Path="s3://$1"

npm run build
mkdir -p public/files
cp -a files/resume.pdf public/files/resume.pdf

aws s3 sync public $s3Path --acl public-read