"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let username = ["mahad", "fahad", "aqif", "admin", "bilal"];
username = [];
if (username.length === 0) {
    console.log("you are array is empty find same user!");
}
else {
    username.forEach(oneuser => {
        if (oneuser === "admin") {
            console.log(`hello ${oneuser}would you like to see status report?`);
        }
        else {
            console.log(`hello${oneuser}thank for log in`);
        }
    });
}
