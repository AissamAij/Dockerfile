# Use Node (or change if OpenClaw needs something else)
FROM node:20

# Create isolated workspace
WORKDIR /workspace

# Copy your project files
COPY . .

# Install dependencies
RUN npm install

# (Optional) Install OpenClaw globally if needed
# RUN npm install -g openclaw

# Run your agent
CMD ["node", "index.js"]
