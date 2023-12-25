FROM nginx:latest

WORKDIR /var/www/html

# Perform copy (copy build due to now production)
COPY public public/
COPY build .