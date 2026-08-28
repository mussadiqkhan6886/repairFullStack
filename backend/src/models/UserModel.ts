import mongoose, {Document} from "mongoose"

export interface UserModelType extends Document {
    username: string
    email: string
    password: string
    role: "Employee" | "Manager" | "Admin"
    status: "Active" | "InActive"
}

const UserModel = new mongoose.Schema<UserModelType>({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: [3, "Minimum length is 3"]
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    role: {
        type: String,
        enum: ["Employee", "Manager", "Admin"],
        required: true
    },
    status: {
        type: String,
        enum: ["Active", "InActive"],
        default: "Active"
    }
},
{
    timestamps: true
})

const User = mongoose.model<UserModelType>("User", UserModel)
export default User