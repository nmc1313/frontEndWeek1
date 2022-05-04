import {user} from './user.js';

const student = user('peter parker', 18);

student.printName();
student.printAge();

//This will write to the front end the student's information
const element = document.getElementById('target');

const html = `The student name is ${student.name}, the age is ${student.age}`;

element.innerHTML = html;