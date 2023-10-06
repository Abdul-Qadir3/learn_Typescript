"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateAverage(num_1, num_2) {
    return (num_1 + num_2 / 2);
}
let avg = calculateAverage(20, 60); //assign variable to save the value
console.log(avg);
// for arrow function
// () => {}
let avg2 = (num_1, num_2) => //type specific 
 {
    let myAvg = (num_1 + num_2) / 2;
    return myAvg;
};
let avg3 = avg2(4, 7);
console.log(avg3);
//arrow for single line
let zzz = (num_3, num_5) => (num_3 + num_5) / 2;
// in output the undefine means that that function donont return a value
//Arrow function using the tamplate literals
let z2 = (age, name) => {
    return `My name is ${name} and my age is ${age}`;
};
console.log(z2(26, "Abdul Qadir"));
//for optional prarmeter
let z3 = (param1, param2, param3 = 10) => //by giving default value to the parameter typescript takes it as optional
 {
    console.log(`${param1} ${param2} ${param3}`);
    return `${param1} ${param2} ${param3}`;
};
let xyz = z3(2, "hello", 3);
let xy = z3(2);
console.log(xy);
console.log(xyz);
