var querystring = require("querystring");
var fs = require('fs');

function init(response, postData) {
    console.log("Rendering index.html");
    fs.readFile('client/index.html', function(err, data) {
        if (err) {
            throw err;
        }
        var index = data;
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(index);
        response.end();
    });
}

function itinerary(response, postData) {
    console.log("Rendering itinerary.html");
    fs.readFile('client/itinerary.html', function(err, data) {
        if (err) {
            throw err;
        }
        var index = data;
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(index);
        response.end();
    });
}

function css(response, postData) {
    console.log("fetching onestop.css");
    fs.readFile('client/assets/css/onestop.css', function(err, data) {
        if (err) {
            throw err;
        }
        var css = data;
        response.writeHead(200, {"Content-Type": "text/css"});
        response.write(css);
        response.end();
    });
}

function js(response, postData) {
    console.log("fetching onestop.js");
    fs.readFile('client/assets/js/onestop.js', function(err, data) {
        if (err) {
            throw err;
        }
        var js = data;
        response.writeHead(200, {"Content-Type": "text/js"});
        response.write(js);
        response.end();
    });
}
  
  /*var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(index);
    response.end();*/

function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("You've sent the text: "+
  querystring.parse(postData).text);
  response.end();
}

exports.init = init;
exports.itinerary = itinerary;
exports.css = css;
exports.js = js;
exports.upload = upload;