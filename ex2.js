"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//variable name in ttitle case,uppercase,lowercase
// lower case 
var my_name = "umair yaqoob";
console.log("lowercase: ".concat(my_name.toLowerCase()));
//uppercase
console.log("uppercase:".concat(my_name.toUpperCase()));
//tittlecase
console.log("tittlecase:".concat(my_name.replace(/\b\w/g, function (c) { return c.toUpperCase(); })));
