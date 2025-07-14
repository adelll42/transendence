FROM public.ecr.aws/docker/library/nginx:alpine

COPY ./nginx/conf.d/ /etc/nginx/conf.d/

EXPOSE 80 443

ENTRYPOINT []

CMD ["nginx", "-g", "daemon off;"]
