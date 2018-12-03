FROM node

RUN npm install -g ionic

WORKDIR /usr/src/app

COPY . .

RUN rm -r node_modules/

RUN npm install

EXPOSE 8100 35729

CMD [ "ionic", "serve", "--no-open" ]