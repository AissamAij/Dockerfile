const fs = require("fs");

setInterval(() => {
  fs.appendFileSync("/workspace/log.txt", "Agent working...\n");
}, 5000);
