# Use an official Node.js image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy source code
COPY . .

# Expose the application port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
