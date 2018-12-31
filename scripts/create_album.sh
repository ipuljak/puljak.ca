#!/usr/bin/env bash

#cd $1/images
#
#rename 'y/A-Z/a-z/' *
#
## Resize the images
#mogrify -resize 30% *jpg
#
## Create the thumbnails
#mkdir ../thumbnails
#mogrify -path ../thumbnails -format jpg -resize "275x275^" -gravity center -crop 275x275+0+0 +repage *.jpg
#
## Publish to S3
#cd $1

images=`aws s3 ls s3://puljak.ca/images/albums/$1/images/ --recursive | awk '{$1=$2=$3=""; print $0}' | sed 's/^[ \t]*//'`
thumbnails=`aws s3 ls s3://puljak.ca/images/albums/$1/thumbnails/ --recursive | awk '{$1=$2=$3=""; print $0}' | sed 's/^[ \t]*//'`

echo "\nIMAGES:\n"

for i in ${images}; do
    echo \'/${i}\',
done

echo "\nTHUMBNAILS:\n"

for i in ${thumbnails}; do
    echo \'/${i}\',
done