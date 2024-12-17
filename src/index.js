import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRouter from './Routes/auth.route.js';
import { connectDB } from './lib/db.js';

dotenv.config()
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', authRouter);

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`)
    connectDB()
})