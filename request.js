// const axios= require('axios');
// axios.get('https://www.google.com').then((response)=>console.log(response)).catch((Err)=>console.log(Err));

// const http=require('https');
// const request=http.request('https://www.google.com',(res)=>{
//     res.on('data',(chunk)=>{
//         console.log(chunk);
//     })
//     res.on('end',()=>{
//         console.log('No more data');
//     })
// })
// request.end();


//SETTING OUT FIRST SERVER
const http=  require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-type':'application/json'
    })
    res.end(JSON.stringify({
        id:1,
        name:'sachin pantha',
    }));
})
server.listen(5000);
