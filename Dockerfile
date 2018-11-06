FROM node:8

LABEL description="Docker image for Corresponding models" \
      maintainer="t.krooswijk@nl.edenspiekermann.com" \
      version="1.0"

COPY . /home/node/app

# We need development mode here because devDependencies are required
# to build the app
ENV NODE_ENV=development
WORKDIR /home/node/app
RUN npm install
RUN npm run next-build

EXPOSE 8080
CMD ["npm", "start"]
