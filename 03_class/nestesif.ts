//ticketing sysytem
let country = ["Pakistan", "Turkey", "Canada"]

// Number() used to convert the string into number
let age = Math.round(Math.random()*90);// gnerates value bt 0 to 1
let domicile =["sindh","balochistan","kpk","punjab"];

// let index = Math.random()*10  // num>0 && num<3
// nested if is used if a condition is bound with another condition and have relation
if (country[0] === "Pakistan"){
    if(age>=18){
        console.log("here is your ticket for pakistani citizen")
    }else {
        console.error("Age restriction for pakistani citizen")
    };
}else if (country[0]== "Turkey"){
    if (age>=30){
        console.log("here is your ticket for turkey citizens")
    }else{
        console.error("Age restriction for turkey citizens")
    };
}else{//executes when all above condition are false
    console.log("invalid country");
};