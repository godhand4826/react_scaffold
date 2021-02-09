FROM node:14 AS builder
WORKDIR /usr/src/app
RUN npm i koa koa-conditional-get koa-etag koa-helmet koa-static koa-compress

FROM node:14-slim
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app /usr/src/app
COPY server/index.js /usr/src/app
COPY dist dist
EXPOSE 8080
CMD [ "node", "index.js" ]