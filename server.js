
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;

http.createServer((req, res) => {
  const pathname = new URL(req.url, "http://localhost").pathname;
  const file = pathname === "/" ? "index.html" : pathname.slice(1);

  // Only serve the demo HTML. Do not expose source files.
  if (file !== "index.html") {
    res.writeHead(404);
    return res.end("Not found");
  }

  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "no-store"
  });

  fs.createReadStream(path.join(root, "index.html")).pipe(res);
}).listen(3000, "0.0.0.0", () => {
  console.log("Preview ready on port 3000");
});
