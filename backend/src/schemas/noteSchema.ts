import {z} from "zod"

export const noteSchema = z.object({
    noteFor: z.string(),
    title: z.string().min(3).max(100),
    description: z.string().min(5),
    priority: z.enum(["High", "Medium", "Low"]),
    status: z.enum([
        "Completed", "Working", "Pending"
    ]).default("Pending"),
    id: z.number()
})

export type noteZod = z.infer<typeof noteSchema>