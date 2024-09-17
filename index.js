import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

http
  .createServer((req, res) => {
    const fileStream = fs.createReadStream(path.join(__dirname, "index.html"));
    fileStream.pipe(res)
  })
  .listen(8080, () => {
    console.log("Server started on port 8080");
  });
