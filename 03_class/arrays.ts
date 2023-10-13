// when we need more variables of a single type we will use arrays like for 50 fruits you cant define individually so you will create an array
//Arrays are deined using square brackets
//method and function are same things
//array can be of any type
let numbers:number[] = [91,82,63,54,75,46,17,28,39];
            // index =  0   1  2  3  4  5  6  7  8

let names : string[];

let mixType0 : number[] | string[] | boolean[]=["Abdul","qadir","10"];//acts as string,number or boolean at on time 

let mixType1 : number[] | string[] | boolean[]=[3,5,7];//acts as string,number or boolean at on time 

let mixType2 : number[] | string[] | boolean[]=[true];//acts as string,number or boolean at on time 

mixType2.push(true)
mixType0.push("Alpha")
mixType1.push(10)

console.log(numbers[7])
console.log(numbers)//index putting//if no value in a variablethen it will return output as "undefined"
console.log(numbers.length); //(length is a property) number of elements//10

console.log(numbers.push(101))// for both numbers and lenght of the array
console.log(numbers) //adds a value in the last // [91,82,63,54,75,46,17,28,39,101]
//console.log(numbers.length);//11  //to find the number of elements in the array

//remove one element from last
numbers.pop()
console.log(numbers)
console.log(numbers.length)//10

numbers.splice(8,0,500);//insert in podition, delet, add
console.log(numbers)
console.log(numbers.length)//11

numbers.splice(8,2,500,600,700,800,900);//insert in podition, delet, add
console.log(numbers)
console.log(numbers.length)

let myslice= numbers.slice(8,11) //returns copy of a section of an array //copy from 8th to 11th element
console.log(myslice)