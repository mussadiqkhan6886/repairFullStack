import {z} from "zod"

export const userSchema = z.object({
    username: z.string().min(3).trim(),
    password: z.string().min(4).trim(),
    email: z.string().email(),
    role: z.enum(["Employee" , "Manager" , "Admin"]),
})

export type userZod = z.infer<typeof userSchema>

export const updateUserSchema = z.object({
    username: z.string().min(3).optional(),
    email: z.string().email().optional(),
    password: z.string().min(4).trim().optional(),
    role: z.enum([
        "Employee",
        "Manager",
        "Admin"
    ]).optional(),
    status: z.enum([
        "Active",
        "InActive"
    ]).optional()
});

export type updateUserZod = z.infer<typeof updateUserSchema>