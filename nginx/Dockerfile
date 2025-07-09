FROM nginx:alpine


COPY ./nginx/conf.d/ /etc/nginx/conf.d/

RUN rm -rf /docker-entrypoint.d/* /etc/nginx/templates/

EXPOSE 80 443

ENTRYPOINT []

CMD ["nginx", "-g", "daemon off;"]
