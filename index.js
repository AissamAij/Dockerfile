console.log("OpenClaw agent is running...");

// Example: create a file inside workspace
const fs = require("fs");

fs.writeFileSync("/workspace/test.txt", "Hello from agent!");
