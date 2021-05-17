FROM node:12
WORKDIR /home/explore/streaming/app
COPY app /home/explore/streaming/app
RUN npm install
CMD npm run app
EXPOSE 9999