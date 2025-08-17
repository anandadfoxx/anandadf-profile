FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine AS production

WORKDIR /app
ENV NODE_ENV=production

RUN adduser -D runner \
    && chown -R runner:runner /app \
    && apk add --no-cache openssl \
    && npm install --global serve 
  
USER runner
COPY --chown=runner:runner --from=build /app/build /app
COPY --chown=runner:runner package*.json /app

EXPOSE 3000
ENTRYPOINT [ "serve" ]