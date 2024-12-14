import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        //console.log('mongodb connected successfully');
    } catch (error) {
        //console.log(error);
        //console.log("Mongodb is not connected")
    }
}
export default connectDB;