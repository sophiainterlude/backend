"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAnimal = exports.UpdateAnimal = exports.GetAnimalById = exports.GetAllAnimals = exports.CreateAnimal = void 0;
const animal_model_1 = require("../data/models/animal.model");
const CreateAnimal = async (req, res) => {
    const obj = req.body;
    try {
        const animal = await animal_model_1.Animals.createAnimal(obj);
        res.json(animal);
    }
    catch (error) {
        res.status(400).json({ message: "Error creating user" });
    }
};
exports.CreateAnimal = CreateAnimal;
const GetAllAnimals = async (req, res) => {
    try {
        const animals = await animal_model_1.Animals.find({});
        res.json(animals);
    }
    catch (error) {
        res.status(400).json({ message: "Error fetching user" });
    }
};
exports.GetAllAnimals = GetAllAnimals;
const GetAnimalById = async (req, res) => {
    const id = req.params.id;
    try {
        const animal = await animal_model_1.Animals.findById(id);
        console.log("animal", animal);
        if (animal)
            res.json(animal);
        else
            res.status(404).json({ message: "animal not found" });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error fetching user" });
    }
};
exports.GetAnimalById = GetAnimalById;
const UpdateAnimal = async (req, res) => {
    const id = req.params.id;
    const { name, habitat, limbs, covering } = req.body;
    try {
        const animal = await animal_model_1.Animals.findByIdAndUpdate(id);
        if (animal) {
            animal.name = name ?? animal.name;
            animal.habitat = habitat ?? animal.habitat;
            animal.limbs = limbs ?? animal.limbs;
            animal.covering = covering ?? animal.covering;
            const updatedAnimal = await animal.save();
            res.json(animal);
        }
        else
            res.status;
    }
    catch (error) {
        res.status(400).json({ message: "Error updating user" });
    }
};
exports.UpdateAnimal = UpdateAnimal;
// export const UpdateAnimal = async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const {name, habitat, limbs, covering} = req.body;
//   try {
//     const animal = await Animals.findByIdAndUpdate(
//       id,
//       req.body,
//       { new: true, runValidators: true }
//     );
//     if (!animal) {
//       res.status(404).json({ message: "Animal not found" });
//       return;
//     }
//     res.json(animal);
//   } catch (error) {
//     res.status(400).json({ message: "Error updating animal" });
//   }
// };
const DeleteAnimal = async (req, res) => {
    try {
        const animal = await animal_model_1.Animals.findByIdAndDelete(req.params.id);
        if (!animal) {
            res.status(404).json({ message: "Animal not found" });
            return;
        }
        res.json({ message: "Animal deleted successfully", animal });
    }
    catch (error) {
        res.status(400).json({ message: "Error deleting animal" });
    }
};
exports.DeleteAnimal = DeleteAnimal;
