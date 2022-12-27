# write a bash script that:
# 1. convert all .png files in public/** to .jpg files
# 2. compress all .jpg files in public/** to 50% quality
# 3. resize all .jpg files in public/assets/** height to 512px
# Note: echo all executed commands to stdout

#/bin/bash

# 1. convert all .png files in public/** to .jpg files
find public -name "*.png" -exec sh -c 'convert "$0" "${0%.png}.jpg"' {} \;

# 2. compress all .jpg files in public/** to 50% quality
find public -name "*.jpg" -exec sh -c 'convert "$0" -quality 50 "${0%.jpg}.jpg"' {} \;

# 3. resize all .jpg files in public/assets/** height to 512px
find public/assets -name "*.jpg" -exec sh -c 'convert "$0" -resize x512 "${0%.jpg}.jpg"' {} \;

# Note: echo all executed commands to stdout
find public -name "*.png" -exec sh -c 'echo convert "$0" "${0%.png}.jpg"' {} \;
find public -name "*.jpg" -exec sh -c 'echo convert "$0" -quality 50 "${0%.jpg}.jpg"' {} \;
find public/assets -name "*.jpg" -exec sh -c 'echo convert "$0" -resize x512 "${0%.jpg}.jpg"' {} \;
