const express=require('express');
const friendsController=require('./controllers/friends.controller');
const messagesController=require('./controllers/messages.controller');
const app= express();
const PORT=3000; 
const friends=[
    {
        id:0,
        name: 'Sachin'
    },
    {
        id:1,
        name: 'Sunil'
    }
];
app.use((req,res,next)=>{
    const start=Date.now();
    console.log(`${req.method} ${req.url}`)
    next();
    const delta=Date.now()-start;
    console.log(delta);
})
app.use(express.json());
app.post('/friends',(req,res)=>{
    if(!req.body.name){
        return res.status(400).json({
            error: 'missing friend name'
        })
    }
    const newFriend={
        name: req.body.name,
        id:friends.length,
    }
    friends.push(newFriend);
    res.json(newFriend);
})
app.get('/friends',(req,res)=>{
    res.json(friends);
})
app.get('/friends/:friendID',(req,res)=>{
    const friendID=Number(req.params.friendID);
    const friend=friends[friendID];
    if (friend) {
        res.status(200).json(friend)
    }
    else{
        res.status(404).json({
            error: "friend doesnt exsit"
        })
    }
})
app.get('/messages',messagesController.getMessages);
app.post('/messages',messagesController.postMessages)
app.listen(PORT);