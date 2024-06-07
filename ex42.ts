//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


function show_magicians(magician:string[]){
magician.forEach(name => console.log(name));
} 
function make_great(magician:string[]){
return magician.map(name => `the great ${name}`);
}

let magician_name=["divide","peter","sunny","rahul"]
let great_magician=make_great(magician_name);
console.log(great_magician)
show_magicians(great_magician)