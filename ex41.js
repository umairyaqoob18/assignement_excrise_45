"use strict";
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magician) {
    magician.forEach(name => console.log(name));
}
let magician_name = ["divide", "peter", "sunny", "rahul"];
show_magicians(magician_name);
