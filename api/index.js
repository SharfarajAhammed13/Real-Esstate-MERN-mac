import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import exp from 'constants';
dotenv.config();

mongoose.connect(process.env.MONGO).then (()=> {
    console.log('Connected to DB');
})
.catch ((err) => {
    console.log(err);
});

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is Running on 3000!!");
});

app.use("/api/user",userRouter);
app.use("/api/auth", authRouter);