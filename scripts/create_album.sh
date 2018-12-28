#!/usr/bin/env bash

cd $1/images

rename 'y/A-Z/a-z/' *

# Resize the images
mogrify -resize 30% *jpg

# Create the thumbnails
mkdir ../thumbnails
mogrify -path ../thumbnails -format jpg -resize "275x275^" -gravity center -crop 275x275+0+0 +repage *.jpg

# Publish to S3
cd $1