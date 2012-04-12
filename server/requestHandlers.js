var querystring = require("querystring");
var fs = require('fs');
var header;
var footer;
var content;

function init(response, postData) {
    console.log("Rendering index.html");
    fs.readFile('client/index.html', function(err, data) {
        if (err) {
            throw err;
        }
        content = data;
        response.writeHead(200, {"Content-Type": "text/html"});
        //response.write(header);
        response.write(content);
        //response.write(footer);
        response.end();
    });
    /*fs.readFile('client/header', function(err, data) {
        if (err) {
            throw err;
        }
        header = data;
    });
    fs.readFile('client/footer', function(err, data) {
        if (err) {
            throw err;
        }
        footer = data;
    });
    fs.readFile('client/main', function(err, data) {
        if (err) {
            throw err;
        }
        content = data;
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(header);
        response.write(content);
        response.write(footer);
        response.end();
    });*/
}

function main(response, postData) {
    console.log("Rendering main.html");
    fs.readFile('client/main', function(err, data) {
        if (err) {
            throw err;
        }
        content = data;
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(content);
        response.end();
    });
}

function itinerary(response, postData) {
    console.log("Rendering itinerary.html");
    fs.readFile('client/itinerary', function(err, data) {
        if (err) {
            throw err;
        }
        content = data;
        response.writeHead(200, {"Content-Type": "text/html"});
        //response.write(header);
        response.write(content);
        //response.write(footer);
        response.end();
    });
}

function submitplace(response, postData) {
    console.log("Rendering submiplace.html");
    fs.readFile('client/submitplace', function(err, data) {
        if (err) {
            throw err;
        }
        content = data;
        response.writeHead(200, {"Content-Type": "text/html"});
        //response.write(header);
        response.write(content);
        //response.write(footer);
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
exports.main = main;
exports.itinerary = itinerary;
exports.submitplace = submitplace;
exports.css = css;
exports.js = js;
exports.upload = upload;