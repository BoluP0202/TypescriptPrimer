"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import log from './tools'
const student_1 = __importDefault(require("./student"));
const type_definitions_1 = require("./type-definitions");
//Student registration
//prepare personal data
let student1PersonalData = {
    firstName: "Mary",
    lastName: "Ota",
    gender: type_definitions_1.Gender.female,
    hobbies: ['Work', 'Pray', 'Play'],
    isAlive: true
};
//prepare student data
let student1StudentData = {
    department: "information science and media studies",
    matriculationNumber: "234234",
    modeOfEntry: type_definitions_1.ModeOfEntry.UTME,
    programOfStudy: "Information Science and Media Studies",
    yearOfEntry: new Date()
};
//instantiate the new student
let student1 = new student_1.default(student1StudentData, student1PersonalData);
//access the new student’s data
console.log(`The Student 1 named ${student1.getFullName()} with matriculation number ${student1.matriculationNumber} <br/>
belongs to the department ${student1.department}. The height is ${student1.height}`);
//add height to student1
student1.height = 1.7;
console.log(`The Student 1 named ${student1.getFullName()} with matriculation number ${student1.matriculationNumber} <br/>
belongs to the department of ${student1.department}. The height is ${student1.height}`);
//# sourceMappingURL=index.js.map