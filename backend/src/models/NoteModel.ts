import mongoose, {Document} from "mongoose"

export interface NoteModelType extends Document {
    noteFor: mongoose.Types.ObjectId;
    title: string;
    description: string;
    priority: "High" | "Medium" | "Low";
    status: "Completed" | "Pending" | "Working";
}


const NoteModel = new mongoose.Schema<NoteModelType>({
    noteFor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        enum: ["High", "Medium", "Low"],
        required: true,
    },
    status: {
        type: String,
        enum: ["Completed", "Pending", "Working"],
        default: "Pending"
    }
},
{
    timestamps: true
})

NoteModel.index({noteFor: 1});
const Note = mongoose.model<NoteModelType>("Note", NoteModel)

export default Note