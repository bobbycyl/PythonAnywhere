"use strict";

const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type"
    );
    var root = path.resolve();
    var pathname = url.parse(req.url).pathname;
    if (pathname == "/") {
        pathname = "/index.html";
    }
    var filepath = path.join(root, pathname);

    fs.exists(filepath, (exists) => {
        if (exists) {
            switch (path.extname(filepath)) {
                case ".html":
                    res.writeHead(200, { "Content-Type": "text/html" });
                    break;
                case ".js":
                    res.writeHead(200, { "Content-Type": "text/javascript" });
                    break;
                case ".css":
                    res.writeHead(200, { "Content-Type": "text/css" });
                    break;
                default:
                    res.writeHead(200, { "Content-Type": "application/octet-stream" });
            }

            fs.createReadStream(filepath).pipe(res);
        } else {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>404 Not Found</h1>");
        }
    });
});

server.listen(8080);
