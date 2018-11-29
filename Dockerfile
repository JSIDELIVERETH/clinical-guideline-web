FROM node:10.11-alpine as builder

RUN mkdir /app
WORKDIR /app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH


# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install


# add app
COPY . /app

## Build the angular app in production mode and store the artifacts in dist folder
RUN npm run build --prod


FROM zalari/nginx-html5

## Copy our default nginx config

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /app/dist/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
