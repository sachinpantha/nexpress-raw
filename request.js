const express=require('express');
const friendsRouter=require('./routes/friends.router')
const messagesRouter = require('./routes/messages.router');
const app= express();
const PORT=3000; 
//Simplifying the server as far as possible in routes
app.use((req,res,next)=>{
    const start=Date.now();
    console.log(`${req.method} ${req.url}`)
    next();
    const delta=Date.now()-start;
    console.log(delta);
})
app.use(express.json());


app.use('/friends',friendsRouter);
app.use('/messages',messagesRouter)
app.listen(PORT);