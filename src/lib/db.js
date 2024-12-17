import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log('connect to mongodb', conn.connection.host)
    } catch (error) {
        console.log('Mongodb connection error', error);
    }
}

export {connectDB}