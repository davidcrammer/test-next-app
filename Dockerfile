# Use an official Node.js runtime as the base image
FROM node:16-alpine as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the Next.js app
RUN npm run build

# Start a new build stage
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy over the built app data from the previous stage
COPY --from=builder /app ./

# Expose port 3000 for the app to listen on
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]
