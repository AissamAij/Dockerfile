const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 8080;

// Create test file inside workspace
fs.writeFileSync("/workspace/test.txt", "Agent is working!");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("OpenClaw agent is running 🚀");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
