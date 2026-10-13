import { Document, Model } from "mongoose";
import { ObjectId } from "mongodb";

export interface Animal extends Document {
    name: string;
    _id: ObjectId;
    habitat: string;
    covering: string;
    limbs: number;
    createdAt: string;
    updatedAt: string;
}

export interface AnimalModel extends Model<Animal> {
    createAnimal: (obj: { habitat: string, name: string, covering: string, limbs: number }) => Promise<Animal>
}