const http = require('http');
const url = require('url');
const fs = require('fs');
const StringDecoder = require("string_decoder").StringDecoder;
const util = require('util');
const formidable = require("formidable");
const { type } = require('os');
const { decode } = require('punycode');
const { default: test } = require('node:test');

const server = http.createServer(function (req, res) {
    let path = url.parse(req.url, true);
    res.writeHead(200, "OK", { 'Content-type': 'text/html' });
    fs.readFile('index.html', function (error, data) {
        if (error) {
            res.writeHead(404)
            res.write('File not found')
        } else {
            res.write(data)
        }
        res.end()
        f(path.query.run)
    });
});

server.listen(80, function () {
    console.log('Listening on port 80');
});

let gates = "closed"

let f = function (x) {
    if (x == 0) {
        gates = "closed"
        console.log("The gate is " + gates);
    } else if (x == 1) {
        gates = "open"
        console.log("The gate is " + gates);
    } else {
        // console.log("Did nothing");
    }

}