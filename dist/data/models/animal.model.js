"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animals = void 0;
const animal_schema_1 = require("../schemas/animal.schema");
const mongoose_1 = require("mongoose");
animal_schema_1.AnimalSchema.statics.createAnimal = async function (obj) {
    const animal = await this.create(obj);
    return animal.save();
};
exports.Animals = (0, mongoose_1.model)('animal', animal_schema_1.AnimalSchema);
