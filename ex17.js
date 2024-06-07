"use strict";
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
Object.defineProperty(exports, "__esModule", { value: true });
//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//Print a message to each of the two people still on your list, letting them know they’re still invited.
//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
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
console.log("unfourtenly ,the new dinner table at time i can invite only two guest");
while (guest_list.length > 2) {
    let Removeguest = guest_list.pop();
    console.log(`sorry,${Removeguest}i cant invite to dinner`);
}
;
console.log("invite  last two two guests");
guest_list.forEach(lasttwo => console.log(`lucky${lasttwo},you are still invited to dinner`));
guest_list.pop();
guest_list.pop();
console.log("emptylist", guest_list);
