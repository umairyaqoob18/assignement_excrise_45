"use strict";
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
Object.defineProperty(exports, "__esModule", { value: true });
//Add one new guest to the beginning of your array.
//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guest_list = ["adil", "waqas", "arslan", "bilal", "muddasir"];
let dont_come = [0];
console.log(dont_come, "nhi a sakte app");
guest_list.splice(0, 1, "amir");
console.log("good news! we have found a bigger table for dinner");
guest_list.unshift("ali");
guest_list.push("suifan");
let middleindex = Math.floor(guest_list.length / 2);
guest_list.splice(middleindex, 0, "hassan");
console.log("update list of our guest");
guest_list.forEach(oneguest => console.log(`asslamulikum ${oneguest},would like to have adinner with me`));
