
const constant = require("../config/constants.js");

var fs = require('fs'),
url = require('url'),
http = require('http');


http.createServer(function(req, response) {
        fs.readFile("./http/index.html", (err, data)=>{
            
            if (err) throw err;
  
         response.writeHead(200, {'Content-Type': 'text/html'});
         console.log(data.toString());
         response.write(data.toString());
         
         response.end();
	
        });
        
        
}).listen(constant.PORT, constant.HOST);


console.log("Server at http://" + constant.HOST + ':' + constant.PORT.toString() + '/');




