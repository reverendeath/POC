var http=require('http');
var fs=require('fs');

http.createServer(function(request,response){
    if(request.url == '/someUrl')
    {   
        var headers = request.headers;
        var method = request.method;
        var url = request.url;
        var body = [];
        
        response.writeHead(200,{'Content-Type':'application.json'});
        request.on('data', function(chunk) {
          console.log("streamng started");
          body.push(chunk);
          console.log("streamng completed");
        })
        .on('end', function() {
        body = Buffer.concat(body).toString();
        console.log(body);
        console.log(JSON.parse(body));
        var responseBody = {
           
           method: method,
           url: url,
           body: JSON.parse(body) };
        console.log("concat ended");
        fs.writeFile('data.json',JSON.stringify(responseBody), function(err){
            console.log("File written");
            if  (err) throw err;
        });
        response.end(JSON.stringify(responseBody));
        });

        //////////////ERROR HANDLING//////////////////////
        request.on('error', function(err) {
        console.error(err.stack);
        
        });
        
            
        console.log("Entered the loop!!"); 
        console.log(request.url);
        
        //response.write(JSON.stringify(responseBody));
        
        console.log("response ended");
        //response.end('url visited'+request.url);
        //////////////ERROR HANDLING//////////////////////
        response.on('error', function(err) {
        console.error(err); 
        });
     }
    else
    {
      fs.readFile('index.html','utf8',function(err,data){
         
         if (err) throw err;
         response.writeHead(200,{'Content-Type':'text/html'});
         response.write(data);
         response.end();
      });
 
            
    }
    
}).listen(8080);