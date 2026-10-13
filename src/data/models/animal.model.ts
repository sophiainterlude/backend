import { Animal, AnimalModel } from "../../types";
import { AnimalSchema } from "../schemas/animal.schema";
import { model } from "mongoose";

AnimalSchema.statics.createAnimal = async function (obj: { habitat: string, name: string, covering: string, limbs: number }) {
    const animal = await this.create(obj);
    return animal.save();
}

export const Animals = model<Animal, AnimalModel>('animal', AnimalSchema);