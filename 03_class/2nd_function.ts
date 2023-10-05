import { log } from "console";

function calculateAverage(num_1:number,num_2:number)//function signature
{
    return (num_1+num_2/2);
}
let avg=calculateAverage(20,60); //assign variable to save the value
console.log(avg)

// for arrow function
// () => {}

let avg2 =(num_1:number,num_2:number):number => //type specific 
{// body is optional fro one line but not for multi line
    let myAvg=(num_1+num_2)/2;
    return myAvg;
}
let avg3 =avg2(4,7)
console.log(avg3);

//arrow for single line
let zzz= (num_3:number,num_5:number) => (num_3+num_5)/2;

// in output the undefine means that that function donont return a value

//Arrow function using the tamplate literals
let z2= (age:number,name:string) => {
    return `My name is ${name} and my age is ${age}`;
}
console.log(z2(26, "Abdul Qadir"))