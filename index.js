const http = require("http");
const { exec } = require("child_process");

const PORT = process.env.PORT || 8080;

// Start your agent (example command)
exec("node agent.js", (err) => {
  if (err) {
    console.error("Agent error:", err);
  }
});

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Agent running in background ✅");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
