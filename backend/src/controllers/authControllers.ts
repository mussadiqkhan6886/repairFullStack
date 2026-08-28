import { Request, Response } from "express"
import User from "../models/UserModel"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const login = async (req: Request, res: Response) : Promise<void> => {
    const {username, password} = req.body

    if(!username || !password){
        res.status(400).json({message: "Please Enter both username and password"})
        return
    }

    const user = await User.findOne({username}).lean().exec()

    if(!user){
        res.status(404).json({message: "No username found with this username"})
        return
    }

    const passMatch = await bcrypt.compare(password, user.password)

    if(!passMatch){
         res.status(401).json({message: "Wrong Password"})
         return
    }

    const accessToken = jwt.sign(
        {
            UserInfo: {
                username: user.username,
                roles: user.role
            }
        }, 
        process.env.ACCESS_TOKEN as string,
        {expiresIn: "15m"}
    )

    const refreshToken = jwt.sign(
        {
            username: user.username
        },
        process.env.REFRESH_TOKEN as string,
        {expiresIn: '7d'}
    )

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
        path: "/",
    })

    res.json({message: "Login Successfully", accessToken})
}

export const refresh = async (req: Request, res: Response) => {

}
export const logout = async (req: Request, res: Response) => {

}