import mongoose, {Document} from "mongoose"
import AutoIncrementFactory from "mongoose-sequence"

const AutoIncrement = AutoIncrementFactory(mongoose as any);

export interface NoteModelType extends Document {
    noteFor: mongoose.Types.ObjectId;
    title: string;
    description: string;
    priority: "High" | "Medium" | "Low";
    status: "Completed" | "Pending" | "Working";
    id:number;
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

NoteModel.plugin(AutoIncrement as any, {inc_field: "id"})
NoteModel.index({noteFor: 1});
const Note = mongoose.model<NoteModelType>("Note", NoteModel)

export default Note