import { NextFunction, Request, Response } from "express"

export const verifyRole = (...allowedRoles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if(!req?.user?.role){
            res.status(401).json({message: "Unauthorized"})
            return
        }

        if(!allowedRoles.includes(req?.user?.role)){
            res.status(403).json({message: "Forbidden"})
            return
        }

        next()
    }
} 