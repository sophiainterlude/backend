import { Animal } from "../../types";
import { Schema } from "mongoose";

export const AnimalSchema = new Schema<Animal>({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 100
    },
    habitat: {
        type: String,
        required: [true, 'Please provided the habitat']
    },
    covering: {
        type: String,
        required: true
    },
    limbs: {
        type: Number,
        required: true
    }
}, { timestamps: true })