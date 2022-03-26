 function getMessages(req,res){
    res.send('HElllllllo');
};
 function postMessages(req,res){
    console.log('updating messages');
};
module.exports={
    getMessages,
    postMessages,
}