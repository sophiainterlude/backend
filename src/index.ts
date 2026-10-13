import express, { Request, Response } from 'express';
import { CreateAnimal, GetAllAnimals, GetAnimalById,  UpdateAnimal,
  DeleteAnimal } from "./controller/animal.controller";
import {connect} from "mongoose";
const app = express();

app.use(express.json());

// mongodb+srv://luv_s0so:Sutijay@050610@cluster0.r8cenxa.mongodb.net/
// import express from "express";

app.post("/animal", CreateAnimal);
app.get("/animals", GetAllAnimals);
app.get("/animal/:id", GetAnimalById);
app.patch("/animal/:id", UpdateAnimal);
app.delete("/animal/:id", DeleteAnimal);

 

const main = async () => {
    try{
        await connect("mongodb+srv://luv_s0so:Sutijay050610@cluster0.r8cenxa.mongodb.net/");
        console.log("Database connection successful!")
        app.listen(3000, () => console.log("Server running on PORT 3000"))
    } catch(error) {
        console.error(error)
    }
}
main()