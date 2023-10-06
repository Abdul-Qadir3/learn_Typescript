let x =Math.random()*100; //returns between 0 and 1 like 0.1 etc...

// if(x > 5){
//     console.log(`value of x is greater then 5 is ${x}`);
// }else{
//     console.log(`value of x is less then is ${x}`)
// }

// ==================================== if and else if
if(x > 0 && x < 5){
    console.log(`value of x is greater then 0 and less then 3 is ${x}`);
}else if(x > 5 && x <=7){
    console.log(`value of x is greater the 5 and is less then or equal to 9 is ${x}`)
}else if(x> 7 && x<=9){
    console.log(`x is greater then and less then and equal to 9 is ${x}`)
}else if(x> 9 && x<=10){
    console.log(`x is greater then 9 and less then or equal to 10 is ${x}`)
}