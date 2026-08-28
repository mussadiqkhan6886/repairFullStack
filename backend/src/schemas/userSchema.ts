import {z} from "zod"

export const userSchema = z.object({
    username: z.string().min(3).lowercase().trim(),
    password: z.string().min(4).lowercase().trim(),
    email: z.string().email(),
    role: z.enum(["Employee" , "Manager" , "Admin"]),
    status: z.enum(["Active", "InActive"]).default("Active")
})

export type userZod = z.infer<typeof userSchema>