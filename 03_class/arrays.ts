// when we need more variables of a single type we will use arrays like for 0 fruits you cant define individually so you will create an array
//Arrays are deined using square brackets
//method and function is a same thing
let numbers:number[] = [91,82,63,54,75,46,17,28,39];
            // index =  0   1  2  3  4  5  6  7  8

console.log(numbers)//index putting//if not value return output will be "undefined"
console.log(numbers.length);

numbers.push(101); //adds a value in the last

console.log(numbers)

//to find the number of elements in the array
console.log(numbers.length);

//remove one element from last
numbers.pop()
console.log(numbers.length)