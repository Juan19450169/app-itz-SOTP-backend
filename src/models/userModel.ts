import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    auth0Id: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    tel: {
        type: Number,
        required: true
    },
    marcaVehiculo: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    servicio: {
        type: String,
        required: true
    }
});

export default mongoose.model("User", userSchema);