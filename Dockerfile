FROM node:14

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
EXPOSE 19006

RUN rm -fR /var/cache/apk/*

RUN npm install -g expo-cli

WORKDIR /usr/src

CMD ["/bin/sh"]

