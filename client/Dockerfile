# Creates the Node.js development image used by the Vite client
FROM node:20-alpine

# Sets the working directory inside the container 
WORKDIR /app

# Copies dependency manifest first to improve Docker catching
COPY package*.json ./
# Installs client dependecies without audit o funding messages
RUN npm install --no-audit --no-fund

#Cpies the remaining frontend source code
COPY . .

# Documents the port used by the Vite decelopment server
EXPOSE 5173

# Starts Vite and makes it reachable outside the container
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
