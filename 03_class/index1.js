"use strict";
let balance = 80;
let minBalance = 85;
let maxBalance = 75;
let result = balance + minBalance + maxBalance;
function creditScore() {
    if (result > 250 && result <= 300) {
        return "A+";
    }
    else if (result > 220 && result <= 250) {
        return "B";
    }
    else if (result > 180 && result <= 220) {
        return "C";
    }
    else if (result > 150 && result < 180) {
        return "D";
    }
}
console.log(creditScore);
