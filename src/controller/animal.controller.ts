 import { Request, Response } from "express";
import {Animals } from "../data/models/animal.model";

export const CreateAnimal = async (req: Request, res: Response) => {
  const obj = req.body;
  try {
    const animal = await Animals.createAnimal(obj);
    res.json(animal);
  } catch (error) {
    res.status(400).json({ message: "Error creating user" });
  }
}

export const GetAllAnimals = async (req: Request, res: Response) => {
  try {
    const animals = await Animals.find({});
    res.json(animals);
  } catch (error) {
    res.status(400).json({ message: "Error fetching user" });
  }
}

export const GetAnimalById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const animal = await Animals.findById(id);
    console.log("animal", animal);
    if (animal) res.json(animal);
    else res.status(404).json({ message: "animal not found" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error fetching user" });
  }
}

export const UpdateAnimal = async (req: Request, res: Response) => {
  const id = req.params.id;
  const {name, habitat, limbs, covering} = req.body;
  try {
    const animal = await Animals.findByIdAndUpdate(id);
    if (animal) {
      animal.name = name ?? animal.name;
      animal.habitat = habitat ?? animal.habitat;
      animal.limbs = limbs ?? animal.limbs;
      animal.covering = covering ?? animal.covering;
      const updatedAnimal = await animal.save();
      res.json(animal)
    } else res.status
  } catch (error) {
    res.status(400).json({ message: "Error updating user" });
  }
}


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

export const DeleteAnimal = async (req: Request, res: Response) => {
  try {
    const animal = await Animals.findByIdAndDelete(req.params.id);

    if (!animal) {
      res.status(404).json({ message: "Animal not found" });
      return;
    }
    res.json({ message: "Animal deleted successfully", animal });
  } catch (error) {
    res.status(400).json({ message: "Error deleting animal" });
  }
};
