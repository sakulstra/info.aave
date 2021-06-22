# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:16-alpine

# Create and change to the app directory.
WORKDIR /usr/src/app

RUN apk add \
    build-base \
    libtool \
    autoconf \
    automake \
    jq \
    openssh \
    python2 \
    libc6-compat
# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
#COPY package*.json ./
#COPY yarn.lock ./
#COPY blitz.config.js ./
COPY . ./

# Install production dependencies.
# If you add a package-lock.json, speed your build by switching to 'npm ci'.
# RUN npm ci --only=production
RUN yarn --production \
    --frozen-lockfile \
    --skip-integrity-check \
    --non-interactive \
    --no-progress 
# --silent
# --production=true
# RUN yarn build

# Copy local code to the container image.


# Run the web service on container startup.
CMD [ "yarn", "start" ]