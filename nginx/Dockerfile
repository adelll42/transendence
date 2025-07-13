FROM public.ecr.aws/docker/library/nginx:alpine


COPY ./nginx/conf.d/ /etc/nginx/conf.d/
RUN mkdir -p /etc/nginx/certs

# Copy certs from the host into the container
COPY ./certs/localhost.pem /etc/nginx/certs/localhost.pem
COPY ./certs/localhost-key.pem /etc/nginx/certs/localhost-key.pem

RUN rm -rf /docker-entrypoint.d/* /etc/nginx/templates/

EXPOSE 80 443

ENTRYPOINT []

CMD ["nginx", "-g", "daemon off;"]
