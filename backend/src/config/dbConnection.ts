import mongoose from "mongoose"

const connectDB = async () : Promise<void> => {
    try{
        await mongoose.connect(process.env.MONGODB_URI as string)
    }catch(err: unknown){
        if(err instanceof Error){
            console.log(err.message)
        }else{
            console.log("Database connection error")
        }
        process.exit(1);
    }
}

export default connectDB