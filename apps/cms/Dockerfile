ARG NODE_VERSION=20.1.0
ARG NODE_BASE=node:${NODE_VERSION}-alpine3.17

FROM $NODE_BASE

WORKDIR /app

# Install libs
RUN apk add --no-cache --update imagemagick libxml2 expat pkgconf

# Copy root package.json and lockfile
COPY package.json ./
COPY package-lock.json ./

# Copy the docs package.json
COPY apps/web/package.json ./apps/web/package.json

# Install dependencies
RUN npm install

# Copy app source
COPY . .

# Expose port
ARG CMS_PORT
EXPOSE ${CMS_PORT}

# Run server
CMD ["node", "./app.js"]
