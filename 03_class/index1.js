var balance = 80;
var minBalance = 85;
var maxBalance = 75;
var result = balance + minBalance + maxBalance;
function creditScore() {
    if (result > 250 && result <= 300) {
        console.log("A+");
    }
    else if (result > 220 && result <= 250) {
        console.log("B");
    }
    else if (result > 180 && result <= 220) {
        console.log("C");
    }
    else if (result > 150 && result < 180) {
        console.log("D");
    }
}
console.log(creditScore);
