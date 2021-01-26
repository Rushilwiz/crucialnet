from nginx:alpine
COPY public/ /usr/share/nginx/html
ADD nginx.conf /etc/nginx/nginx.conf
ADD mime.types /etc/nginx/mime.types
