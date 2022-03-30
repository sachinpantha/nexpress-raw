 function getMessages(req,res){
    res.send('HElllllllo');
};
 function postMessage(req,res){
    console.log('updating messages');
};
module.exports={
    getMessages,
    postMessage,
}