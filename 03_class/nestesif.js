"use strict";
//ticketing sysytem
let country = ["Pakistan", "Turkey", "Canada"];
// Number() used to convert the string into number
let age = Math.round(Math.random() * 90);
// let index = Math.random()*10  // num>0 && num<3
// nested if is used if a condition is bound with another condition and have relation
if (country[0] === "Pakistan") {
    if (age >= 18) {
        console.log("here is your ticket");
    }
    else {
        console.error("Age restriction");
    }
}
else if (country[0] == "Turkey") {
    if (age >= 30) {
    }
    else {
    }
}
else {
    console.log("invalid country");
}
