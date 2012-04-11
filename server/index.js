var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.init;
handle["/assets/css/onestop.css"] = requestHandlers.css;
handle["/assets/js/onestop.js"] = requestHandlers.js;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);