const express=require('express');
const friendsController=require('./controllers/friends.controller');
const messagesController=require('./controllers/messages.controller');
const app= express();
const PORT=3000; 
app.use((req,res,next)=>{
    const start=Date.now();
    console.log(`${req.method} ${req.url}`)
    next();
    const delta=Date.now()-start;
    console.log(delta);
})
app.use(express.json());
app.post('/friends',friendsController.postFriend)
app.get('/friends',friendsController.getFriends)
app.get('/friends/:friendID',friendsController.getFriend)
app.get('/messages',messagesController.getMessages);
app.post('/messages',messagesController.postMessage)
app.listen(PORT);