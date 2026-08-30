import { Request, Response } from "express";
import User from "../models/UserModel";
import { updateUserSchema, userSchema } from "../schemas/userSchema";
import bcrypt from "bcryptjs"
import Note from "../models/NoteModel";

interface filterQuery {
    status?: "Active" | "InActive"
    search?: string
}

export const getAllUsers = async (req: Request<{}, {}, {}, filterQuery>, res: Response) : Promise<void> => {

    const {status, search} = req.query
    let filter: Record<string, unknown> = {}

    if(status){
        filter.status = status 
    }

    if(search){
        filter.username = {
            $regex: search,
            $options: 'i'
        }
    }

    const users = await User.find(filter).select("-password").lean().exec()

    res.status(200).json({
        success: true,
        users,
    });
}

export const createNewUser = async (req: Request, res: Response) : Promise<void> => {
    const {role, email, password, username} = req.body

    if(!role || !email || !password || !username){
        res.status(400).json({success: false, message: "All field are required, Please fill al fields"})
        return
    }

    const safeParsedData = userSchema.safeParse({username, password, email, role})

    if(!safeParsedData.success){
        res.status(400).json({success: false, message: "Zod error, please enter correct field data", errors: safeParsedData.error})
        return
    }

    const data = safeParsedData.data

    const hashedPassword = await bcrypt.hash(data.password, 10)

    try{
        const newUser = await User.create({
        username: data.username,
        password: hashedPassword,
        email: data.email,
        role: data.role
        })

        res.status(201).json({success: true, message: "New User created",  user:{
            id:newUser._id,
            username:newUser.username,
            email:newUser.email,
            role:newUser.role
        }})
    }catch(error:any){

        if(error.code === 11000){
            res.status(409).json({
                success: false, message:"Username or email already exists"
            });
            return;
        }

        res.status(500).json({
            success: false, message:"Server error"
        });
     }
    
}

export const updateUser = async (req: Request, res: Response) : Promise<void> => {
    const updatedData = req.body
    const {id} = req.params

    if(!id){
        res.status(400).json({success: false, message: "No id was passed in params"})
        return
    }

    if(Object.keys(updatedData).length === 0){
        res.status(400).json({success: false, message: "Please provide fields to update"})
        return
    }

    const safeParsedData = updateUserSchema.safeParse(updatedData)

    if(!safeParsedData.success){
        res.status(400).json({success: false, message: "Zod error, please enter correct field data", errors: safeParsedData.error})
        return
    }

    const data = safeParsedData.data

    if(data.password){
        data.password = await bcrypt.hash(data.password,10);
    }

    try{
        const updatedUser = await User.findByIdAndUpdate(id, data, {new: true})

    if(!updatedUser){
        res.status(404).json({success: false, message: "No user found with this id"})
        return
    }

    res.status(200).json({success: true, message: "User updated successfully",  user:{
        id:updatedUser._id,
        username:updatedUser.username,
        email:updatedUser.email,
        role:updatedUser.role,
        status: updatedUser.status
    }})
    }catch(err: any){
        if(err.code === 11000){
            res.status(409).json({
                success: false, message:"Username or email already exists"
            });
            return;
        }

        res.status(500).json({
            success: false, message:"Server error"
        });
    }
}

export const deleteUser = async (req: Request, res: Response) : Promise<void> => {
    const {id} = req.params

     if(!id){
        res.status(400).json({success: false, message: "No id was passed in params"})
        return
    }

    const note = await Note.exists({ noteFor: id })
    if (note) {
        res.status(400).json({ success: false, message: 'User has assigned notes' })
        return
    }

    const user = await User.findByIdAndDelete(id)

    if(!user){
        res.status(404).json({success: false, message: "no user found with this id"})
        return
    }

    res.status(204).send()
}

export const getSingleUser = async (req: Request, res: Response) : Promise<void> => {
    const {id} = req.params

    if(!id){
        res.status(400).json({success:false, message:"Id is required"})
        return
    }

    const user = await User.findById(id).lean().exec()

    if(!user){
        res.status(404).json({success:false, message: "No user found with this id"})
        return
    }

    res.status(200).json({
        success: true,
        user,
    });
}

export const getCurrentUser = async (req: Request, res: Response) : Promise<void> => {
    const id = req.user?.id

    if(!id){
        res.status(400).json({success:false, message:"No Id founded"})
        return
    }

    const user = await User.findById(id).lean().exec()

    if(!user){
        res.status(404).json({success:false, message: "No user found with this id"})
        return
    }

    res.status(200).json({success: true, user})
}