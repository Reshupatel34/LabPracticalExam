import express from 'express';
import adminRoute from './src/Route/adminRoute.js';

const app=express();

// app.use(express.json());

app.use('/api',adminRoute);

app.get('/',(req,res)=>{
    res.send("Welcome");
});


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});