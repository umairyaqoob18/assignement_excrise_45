"use strict";
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size, printmessage) {
    console.log(`we select ${size} size shirt with ${printmessage} print on shirt`);
}
make_shirt("medium", " i love typescript");
