/// <reference path="../types/express.d.ts" />
import { Request, Response } from "express";
import User from "../models/UserModel";

export const getAllUsers = async (req: Request, res: Response) : Promise<void> => {

    if(req?.user?.role === "Employee"){
        res.status(401).json({message: "Unauthorized"})
        return
    }
    const users = await User.find({}).select("-password").lean().exec()

    res.status(200).json({
        success: true,
        users,
    });
}