import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import { corsOptions } from "./config/corsOptions"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 4000

app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json())


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))