# write a bash script that:
# 1. resize all .jpg files in public/assets/{academic,culture,others} width to 706px
# 2. resize all .jpg files in public/assets/departments width to 768px
# 3. compress all .jpg files in public/assets/** to 70% quality
# 4. convert all .jpg files in public/assets/** to webp format
# Note: echo all executed commands to stdout, using find with convert (imagemagick)

#/bin/bash
# 1. resize all .jpg files in public/assets/{academic,culture,others} width to 706px
# 1.1. resize all .jpg files in public/assets/academic width to 706px
find public/assets/academic -name "*.jpg" -exec convert -resize 706x {} {} \;
# 1.2. resize all .jpg files in public/assets/culture width to 706px
find public/assets/culture -name "*.jpg" -exec convert -resize 706x {} {} \;
# 1.3. resize all .jpg files in public/assets/others width to 706px
find public/assets/others -name "*.jpg" -exec convert -resize 706x {} {} \;
# 2. resize all .jpg files in public/assets/departments width to 768px
find public/assets/departments -name "*.jpg" -exec convert -resize 768x {} {} \;
# 3. compress all .jpg files in public/** to 70% quality
find public/assets -name "*.jpg" -exec convert -quality 70 {} {} \;
# 4. convert all .jpg files in public/** to webp format
find public/assets -name "*.jpg" -exec convert {} {}.webp \;
rm public/assets/**/**.jpg -v
# convert public/bg.jpg public/bg.webp
