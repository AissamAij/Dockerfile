# Use Node
FROM node:20

# Create workspace
WORKDIR /workspace

# Copy project files
COPY . .

# Install dependencies (your package.json)
RUN npm install

# Install OpenClaw globally
RUN npm install -g openclaw

# Run your agent
CMD ["node", "index.js"]
