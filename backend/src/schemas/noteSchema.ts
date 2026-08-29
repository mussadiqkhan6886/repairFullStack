import {z} from "zod"

export const noteSchema = z.object({
    noteFor: z.string(),
    title: z.string().min(3).max(100),
    description: z.string().min(5),
    priority: z.enum(["High", "Medium", "Low"]),
})

export type noteZod = z.infer<typeof noteSchema>

export const noteUpdateSchema = z.object({
    noteFor: z.string().optional(),
    title: z.string().min(3).max(100).optional(),
    description: z.string().min(5).optional(),
    priority: z.enum(["High", "Medium", "Low"]).optional(),
    status: z.enum([
        "Completed", "Working", "Pending"
    ]).default("Pending").optional(),
})

export type noteUpdateZod = z.infer<typeof noteUpdateSchema>