FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3001

CMD [ "npm", "run", "dev:babel" ]

# production commands
# CMD [ "npm", "run", "build" ]
# CMD [ "npm", "run", "production" ]

# docker build -t jhliou/core-pricer-admin .
# docker run -p 3001:3001 -d jhliou/core-pricer-admin
