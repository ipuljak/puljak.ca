#!/usr/bin/env bash

s3Path="s3://$1"

npm run build

aws s3 rm $s3Path --recursive
aws s3 sync public $s3Path --acl public-read