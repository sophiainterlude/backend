"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const animal_controller_1 = require("./controller/animal.controller");
const mongoose_1 = require("mongoose");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/animal", animal_controller_1.CreateAnimal);
app.get("/animals", animal_controller_1.GetAllAnimals);
app.get("/animal/:id", animal_controller_1.GetAnimalById);
const main = async () => {
    try {
        await (0, mongoose_1.connect)("mongodb+srv://luv_s0so:Sutijay050610@cluster0.r8cenxa.mongodb.net/");
        console.log("Database connection successful!");
        app.listen(3000, () => console.log("Server running on PORT 3000"));
    }
    catch (error) {
        console.error(error);
    }
};
main();
