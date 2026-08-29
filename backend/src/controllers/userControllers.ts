import { Request, Response } from "express";
import User from "../models/UserModel";
import { updateUserSchema, userSchema } from "../schemas/userSchema";
import bcrypt from "bcryptjs"
import Note from "../models/NoteModel";

export const getAllUsers = async (req: Request, res: Response) : Promise<void> => {

    const users = await User.find({}).select("-password").lean().exec()

    res.status(200).json({
        success: true,
        users,
    });
}

export const createNewUser = async (req: Request, res: Response) : Promise<void> => {
    const {role, email, password, username} = req.body

    if(!role || !email || !password || !username){
        res.status(400).json({message: "All field are required, Please fill al fields"})
        return
    }

    const safeParsedData = userSchema.safeParse({username, password, email, role})

    if(!safeParsedData.success){
        res.status(400).json({message: "Wrong Data entered please try again", errors: safeParsedData.error})
        return
    }

    const data = safeParsedData.data

    const hashedPassword = await bcrypt.hash(data.password, 10)

    const newUser = await User.create({
        username: data.username,
        password: hashedPassword,
        email: data.email,
        role: data.role
    })

    res.status(201).json({message: "New User created",  user:{
        id:newUser._id,
        username:newUser.username,
        email:newUser.email,
        role:newUser.role
    }})
}

export const updateUser = async (req: Request, res: Response) : Promise<void> => {
    const updatedData = req.body
    const {id} = req.params

    if(!id){
        res.status(400).json({message: "No id was passed in params"})
        return
    }

    if(Object.keys(updatedData).length === 0){
        res.status(400).json({message: "Please provide fields to update"})
        return
    }

    const safeParsedData = updateUserSchema.safeParse(updatedData)

    if(!safeParsedData.success){
        res.status(400).json({message: "Wrong Data entered please try again", errors: safeParsedData.error})
        return
    }

    const data = safeParsedData.data

    if(data.password){
        data.password = await bcrypt.hash(data.password,10);
    }

    const updatedUser = await User.findByIdAndUpdate(id, data, {new: true})

    if(!updatedUser){
        res.status(404).json({message: "No user found with this id"})
        return
    }

    res.status(200).json({message: "User updated successfully",  user:{
        id:updatedUser._id,
        username:updatedUser.username,
        email:updatedUser.email,
        role:updatedUser.role,
        status: updatedUser.status
    }})
}

export const deleteUser = async (req: Request, res: Response) : Promise<void> => {
    const {id} = req.params

     if(!id){
        res.status(400).json({message: "No id was passed in params"})
        return
    }

    const note = await Note.exists({ noteFor: id })
    if (note) {
        res.status(400).json({ message: 'User has assigned notes' })
        return
    }

    const user = await User.findByIdAndDelete(id)

    if(!user){
        res.status(404).json({message: "no user found with this id"})
        return
    }

    res.status(204).send()
}