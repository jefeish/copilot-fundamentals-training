# A Docker Demo Container that uses an ubuntu image and installs the following packages:
# - apache2 
# - php
# - nodejs
# - npm

# Pull base image
FROM ubuntu:latest

# Install apache2, php, nodejs, npm
RUN apt-get update && apt-get install -y apache2 php nodejs npm

# Expose port 80
EXPOSE 80

