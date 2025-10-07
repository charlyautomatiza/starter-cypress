# Use Cypress base image with browsers
FROM cypress/browsers:node-20.18.1-chrome-131.0.6778.85-1-ff-133.0-edge-131.0.2903.51-1

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy project files
COPY . .

# Verify Cypress installation
RUN npx cypress verify

# Set environment variable
ENV CYPRESS_CACHE_FOLDER=/root/.cache/Cypress

# Default command
CMD ["npm", "run", "cypress:run:chrome"]
