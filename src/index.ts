//import log from './tools'
import Student from './student';
import {PersonData, StudentData, Gender, ModeOfEntry} from './type-definitions'
//Student registration
//prepare personal data
let student1PersonalData: PersonData = {
 firstName: "Mary",
 lastName: "Ota",
 gender: Gender.female,
 hobbies: ['Work','Pray','Play'],
 isAlive: true
}
//prepare student data
let student1StudentData: StudentData = {
 department: "information science and media studies",
 matriculationNumber: "234234",
 modeOfEntry: ModeOfEntry.UTME,
 programOfStudy: "Information Science and Media Studies",
 yearOfEntry: new Date()
}
//instantiate the new student
let student1 = new Student(student1StudentData, student1PersonalData)
//access the new student’s data
console.log(`The Student 1 named ${student1.getFullName()} with matriculation number ${student1.matriculationNumber}
belongs to the department ${student1.department}. The height is ${student1.height}`);
//add height to student1
student1.height = 1.7;
console.log(`The Student 1 named ${student1.getFullName()} with matriculation number ${student1.matriculationNumber}
belongs to the department of ${student1.department}. The height is ${student1.height}`); 