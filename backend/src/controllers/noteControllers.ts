import { Request, Response } from "express";
import Note from "../models/NoteModel";
import { noteSchema, noteUpdateSchema } from "../schemas/noteSchema";

export const getAllNotes = async (req: Request, res: Response) : Promise<void> => {
    const notes = await Note.find().lean().exec()

    res.status(200).json({success:true, notes})
}

export const getSingleNote = async (req: Request, res: Response) : Promise<void> => {
    const {id} = req.params

    if(!id){
        res.status(400).json({success:false, message:"id is required"})
        return
    }

    const note = await Note.findById(id).lean().exec()

    res.status(200).json({success: true, note})
}

export const createNewNote = async (req: Request, res: Response) : Promise<void> => {

    const {noteFor, title, description, priority} = req.body

    if(!noteFor || !title || !description || !priority) {
        res.status(400).json({success:false, message: "All fields are required"})
        return
    }

    const safeParsedData = noteSchema.safeParse({noteFor, title, description, priority})

    if(!safeParsedData.success){
        res.status(400).json({success:false, message: "Zod error, please enter correct field data", error:safeParsedData.error})
        return
    }

    const data = safeParsedData.data

    const newNote = await Note.create(data)

    res.status(201).json({success:true, newNote})

}
export const updateNote = async (req: Request, res: Response) : Promise<void> => {
    const {id} = req.params

    if(!id){
        res.status(400).json({success:false, message: "Id is required"})
        return
    }
    const updatedData = req.body

    if(!updatedData){
        res.status(400).json({success:false, message: "Please update any one of given value"})
        return
    }

    const safeParsedNote = noteUpdateSchema.safeParse(updatedData)

    if(!safeParsedNote.success){
        res.status(400).json({success:false, message:"Zod error, please enter correct field data"})
        return
    }

    const data = safeParsedNote.data

    const note = await Note.findByIdAndUpdate(id, data)

    if(!note){
        res.status(500).json({success:false, message: "Server error cant update note"})
        return
    }

    res.status(200).json({success:false, message: "Note updated successfully"})

}
export const deleteNote = async (req: Request, res: Response) : Promise<void> => {
    const {id} = req.params

    if(!id){
        res.status(400).json({success:false, message: "Id is required"})
        return
    }

    const user = await Note.findByIdAndDelete(id)

   
    if(!user){
        res.status(404).json({success: false, message: "no note found with this id"})
        return
    }

    res.status(204).send()
}