"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = "large", printmessage = "ilove typescript") {
    console.log(`creating a ${size} shirt with the ${printmessage} print on shirt`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "i love you");
