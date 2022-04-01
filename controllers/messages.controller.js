 const path=require('path');
 function getMessages(req,res){
    // res.send('HElllllllo');
    res.sendFile(path.join(__dirname,'..','public','doge.jpg')) //sending files
};
 function postMessage(req,res){
    console.log('updating messages');
};
module.exports={
    getMessages,
    postMessage,
}