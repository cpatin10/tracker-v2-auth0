# Create image based on the official Node 9.4 image from the dockerhub
FROM node:8.11.0

# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Copy dependency definitions
COPY package.json /app

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /app

# Expose the port the app runs in
EXPOSE 8083

# Serve the app
CMD ["node", "server"]