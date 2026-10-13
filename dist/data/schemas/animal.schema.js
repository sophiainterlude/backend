"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalSchema = void 0;
const mongoose_1 = require("mongoose");
exports.AnimalSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
