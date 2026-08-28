import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

app.get("/", (req, res) => {
    res.send("Hello mr")
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))