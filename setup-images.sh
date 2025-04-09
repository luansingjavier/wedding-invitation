#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Instructions for manual image placement
echo "Please place your engagement photos in the public/images directory with the following names:

1. hero.jpg - The photo with white arches and turquoise background
2. engagement-1.jpg - The photo on the steps
3. engagement-2.jpg - The dancing photo
4. engagement-3.jpg - The embracing photo
5. engagement-4.jpg - The beach sunset photo
6. engagement-5.jpg - The close-up sunset photo

Image requirements:
- hero.jpg should be landscape orientation and at least 1920px wide
- Gallery images should be portrait orientation and at least 800px wide
- All images should be in JPG format
"

# Make the script executable
chmod +x setup-images.sh 