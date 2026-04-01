FROM node:20

WORKDIR /workspace

COPY . .

CMD ["node", "index.js"]
