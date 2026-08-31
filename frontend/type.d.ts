interface logInDataType {
    username: string
    password: string
}

interface UserType {
    _id: string
    username: string
    password?: string
    email: string
    status: "Active" | "InActive"
    role: "Employee" | "Manager" | "Admin"
}

interface updateUserData {
    id: string
    username?: string
    password?: string
    email?: string
    status?: "Active" | "InActive",
    role?: "Employee" | "Admin" | "Manager"
}

interface updateNoteData {
    id: string
    noteFor?: string
    title?: string
    description?: string
    priority?: "High" | "Medium" | "Low"
    status?: "Completed" | "Working" | "Pending"
}
interface NoteType {
    _id: string
    noteFor: string
    title: string
    description: string
    priority: "High" | "Medium" | "Low"
    status: "Completed" | "Working" | "Pending"
}