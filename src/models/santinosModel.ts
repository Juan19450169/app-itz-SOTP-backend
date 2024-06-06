import mongoose from "mongoose";

const tallerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: String,
        requeried: true
    }
})


export default mongoose.model("Taller", tallerSchema);