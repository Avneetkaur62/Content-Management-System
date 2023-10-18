import mongoose from "mongoose";
const Schema = mongoose.Schema;
const contentSchema = new Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true,
    }
})
export default mongoose.model("Blog",contentSchema);
