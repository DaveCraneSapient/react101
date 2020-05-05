FROM nginx

RUN mkdir /app
RUN rm -f $/etc/nginx/conf.d/default.conf /var/lib/nginx/index.html

COPY build/ /app/
RUN rm -f /etc/nginx/conf.d/*.conf
COPY nginx.conf /etc/nginx/conf.d/ui.conf
COPY start_nginx.sh /etc/init.d/start_nginx.sh
RUN chmod +x /etc/init.d/start_nginx.sh
EXPOSE 80
ENTRYPOINT ["/etc/init.d/start_nginx.sh"]
