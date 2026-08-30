import { CorsOptions } from "cors"
import { allowedOrigins } from "./allowedOrigins"

export const corsOptions : CorsOptions = {
    origin: (origin : string | undefined, callback: (err : null | Error, allow?: boolean) => void) => {
        if(!origin || allowedOrigins.includes(origin)){
            callback(null, true)
            return
        }
        callback(new Error ("Origin error cors not allowed"))
    },
    credentials: true
}