#!/usr/bin/env bash

### VARIABLES
ALBUM_PATH=$1
ALBUM_NAME=$2
COVER_IMAGE=$3
S3_BUCKET=$4

cd ${ALBUM_PATH}/images

rename 'y/A-Z/a-z/' *

### RESIZE THE IMAGES
mogrify -resize 30% *jpg

### CREATE THE THUMBNAILS
mkdir ../thumbnails
mogrify -path ../thumbnails -format jpg -resize "275x275^" -gravity center -crop 275x275+0+0 +repage *.jpg

cd ${ALBUM_PATH}

cp images/${COVER_IMAGE} ${ALBUM_NAME}.jpg

### PUBLISH TO S3
aws s3 sync images s3://${S3_BUCKET}/images/albums/${ALBUM_NAME}/images
aws s3 sync thumbnails s3://${S3_BUCKET}/images/albums/${ALBUM_NAME}/thumbnails
aws s3 cp ${ALBUM_NAME}.jpg s3://${S3_BUCKET}/images/covers/${ALBUM_NAME}.jpg

### PRINT OUT THE RESULTS
images=`aws s3 ls s3://${S3_BUCKET}/images/albums/${ALBUM_NAME}/images/ --recursive | awk '{$1=$2=$3=""; print $0}' | sed 's/^[ \t]*//'`
thumbnails=`aws s3 ls s3://${S3_BUCKET}/images/albums/${ALBUM_NAME}/thumbnails/ --recursive | awk '{$1=$2=$3=""; print $0}' | sed 's/^[ \t]*//'`

echo "\nIMAGES:\n"

for i in ${images}; do
    echo \'/${i}\',
done

echo "\nTHUMBNAILS:\n"

for i in ${thumbnails}; do
    echo \'/${i}\',
done