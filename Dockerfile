ARG NODE_VERSION=20.1.0
ARG NODE_BASE=node:${NODE_VERSION}-alpine3.17

FROM $NODE_BASE as builder

WORKDIR /app
RUN chown -R node: /app

RUN apk add --no-cache --update imagemagick libxml2 expat pkgconf

COPY --chown=node package*.json ./
COPY --chown=node apps/cms/package.json ./apps/cms/package.json
COPY --chown=node apps/web/package.json ./apps/web/package.json

USER node

RUN npm ci

COPY --chown=node . .
