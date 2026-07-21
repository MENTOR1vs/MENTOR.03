# Creates the Node.js development image used by the Express API.

FROM node:20-alpine

# Sets the application directory inside the container.
WORKDIR /app
# Copies dependency manifests before the source code for Docker caching.
COPY package*.json ./
# Copies dependency manifests before the source code for Docker caching.
RUN npm install --no-audit --no-fund

# Copies the remaining backend files.
COPY . .

# Documents the internal Express port.
EXPOSE 3000

# Starts the server with nodemon during local development.
CMD ["npm", "run", "dev"]
