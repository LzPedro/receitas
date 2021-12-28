FROM node:16.2.0
WORKDIR /usr/src/app
# Install dependencies
COPY ./backend/package*.json ./
RUN npm install
# Bundle app source
COPY ./backend .
# Expose container port 5000
EXPOSE 5000
# Run "start" script in package.json
CMD ["npm", "start"]