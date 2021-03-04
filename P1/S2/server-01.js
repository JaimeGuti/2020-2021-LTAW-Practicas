const http = require('http');

for(p in http){
    console.log("Propiedad " + p);
}

http.createServer