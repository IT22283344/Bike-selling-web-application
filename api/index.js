import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
dotenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log(err);
}); 


const __dirname = path.resolve();

const app = express(); 
app.use(express.json());
app.use(cookieParser());

app.listen(3000,() => {
    console.log('Server is running on port 3000!');
});

app.use(express.static(path.join(__dirname, '/client/dist')));
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client','dist', 'index.html'));
})



app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message||'Internet server error' ;
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,

    });
});