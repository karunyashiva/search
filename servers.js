var http = require('http');
var url = require('url');
var fs = require('fs');
var server = http.createServer(function(request, response) {
   var path = url.parse(request.url).pathname;
   switch (path) {
       case '/':
           response.writeHead(200, {
               'Content-Type': 'text/plain'
           });
           response.write("This is Test Message.");
           response.end();
           break;
       case '/Registration.html':
           fs.readFile(__dirname + path, function(error, data) {
               if (error) {
                   response.write(error);
                   response.end();
               } else {
                   response.writeHead(500, {
                       'Content-Type': 'text/html'
                       // 'Content-Type': 'text/css'
                   });
                   response.write(data);
                   response.end();
               }
           });
           break;
       default:
           response.writeHead(404);
           response.write("opps this doesn't exist - 404");
           response.end();
           break;
   }
});
server.listen(8081);