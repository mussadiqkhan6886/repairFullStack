import express, {type Express} from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import { corsOptions } from "./config/corsOptions"
import connectDB from "./config/dbConnection"
import mongoose from "mongoose"
import { errorHandler } from "./middleware/errorHandler"

dotenv.config()
const app : Express = express()
const PORT : number = Number(process.env.PORT) || 4000

app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json())
connectDB()

app.use(errorHandler)
mongoose.connection.once("open", () => {
    console.log("MongoDB connected");
    app.listen(PORT, () : void => console.log(`Server running on port ${PORT}`))
})
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});
