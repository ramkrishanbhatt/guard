FROM node:18-alpine
 
WORKDIR /app
 
COPY . .
 
# Add serve globally
RUN npm add -g serve 
 
# Build and clear in one command
RUN npm ci && npm run build && rm -fr /app/node_modules
 
# Set the env to "production"
ENV NODE_ENV production
 
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
 
# Start the app
CMD [ "npx", "serve", "build" ]
