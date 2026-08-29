import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload, VerifyErrors } from "jsonwebtoken"

interface RequestType extends Request {
    username: string
    role: string
}

export const verifyJWT = (req: RequestType, res: Response, next: NextFunction) : void => {
    const authHeader = (req.headers.authorization && !Array.isArray(req.headers.authorization)) || (req.headers.Authorization && !Array.isArray(req.headers.Authorization))

     if (typeof authHeader === "boolean" || !authHeader?.startsWith('Bearer ')) {
        res.status(401).json({ message: 'Unauthorized' })
        return
    }

    const token = authHeader.split(' ')[1]

    jwt.verify(
        token as string, 
        process.env.ACCESS_TOKEN as string, 
        (err : VerifyErrors | null, decoded: string | JwtPayload | undefined) => {

        if (err || !decoded || typeof decoded === "string") {
                return res.status(403).json({
                    message: "Forbidden",
                });
        }
        req.username = decoded.UserInfo.username
        req.role = decoded.UserInfo.role
        next()
    })
}