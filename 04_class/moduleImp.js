"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const modulesExp_1 = __importDefault(require("./modulesExp"));
console.log(modulesExp_1.default[0].id);
console.log(modulesExp_1.default[0].name);
console.log(modulesExp_1.default[1].id);
console.log(modulesExp_1.default[1].name);
console.log(modulesExp_1.default[2].id);
console.log(modulesExp_1.default[2].name);
//print using for loop
const modulesExp_2 = __importDefault(require("./modulesExp")); //we can call using a changed the name of the object in the impoert file
for (let i = 0; i < modulesExp_2.default.length; i++) {
    console.log(`Student ID is ${modulesExp_2.default[i].id} and the name is ${modulesExp_2.default[i].name}`);
}
const modulesExp_3 = __importDefault(require("./modulesExp")); //we can call using a changed the name of the object in the impoert file
for (let i = 0; i < modulesExp_3.default.length; i++) {
    console.log(`Student ID is ${modulesExp_3.default[i].id} and the name is ${modulesExp_3.default[i].name}`);
}
