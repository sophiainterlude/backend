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