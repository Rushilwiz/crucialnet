from nginx:alpine
COPY public/ /usr/share/nginx/html
ADD nginx.conf /etc/nginx.conf
