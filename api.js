const http=  require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-type':'application/json'
    })
    if (req.url=='/') {
        
        res.end(JSON.stringify({
            id:1,
            name:'sachin pantha',
        }));
    }
    else if(req.url=='/messages'){
        res.end(JSON.stringify({
            id:1,
            name:'John doe',
        }));
    }
    else{
        res.end('Page not found')
    }
})
server.listen(5000);
