"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAnimalById = exports.GetAllAnimals = exports.CreateAnimal = void 0;
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
