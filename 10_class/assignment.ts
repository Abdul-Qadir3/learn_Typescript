// Sample array to work with
const myArray: number[] = [1, 2, 3, 4, 5];

// pop: Removes the last element from an array and returns it
const poppedElement: number | undefined = myArray.pop();
console.log("Popped element:", poppedElement);
console.log("Updated array after pop:", myArray);

// push: Adds one or more elements to the end of an array and returns the new length
const newLength: number = myArray.push(6, 7);
console.log("New array length after push:", newLength);
console.log("Updated array after push:", myArray);

// shift: Removes the first element from an array and returns it
const shiftedElement: number | undefined = myArray.shift();
console.log("Shifted element:", shiftedElement);
console.log("Updated array after shift:", myArray);

// unshift: Adds one or more elements to the beginning of an array and returns the new length
const newLengthAfterUnshift: number = myArray.unshift(0, -1);
console.log("New array length after unshift:", newLengthAfterUnshift);
console.log("Updated array after unshift:", myArray);

// concat: Combines two or more arrays and returns a new array
const anotherArray: number[] = [8, 9, 10];
const combinedArray: number[] = myArray.concat(anotherArray);
console.log("Combined array:", combinedArray);

// join: Joins all elements of an array into a string, optionally with a specified separator
const arrayAsString: string = myArray.join(", ");
console.log("Array as string:", arrayAsString);

// slice: Extracts a portion of an array into a new array
const slicedArray: number[] = myArray.slice(2, 4);
console.log("Sliced array:", slicedArray);

// indexOf: Returns the first index at which a specified element is found in an array, or -1 if not found
const indexToFind: number = 3;
const indexFound: number = myArray.indexOf(indexToFind);
console.log(`Index of ${indexToFind} in the array:`, indexFound);

// includes: Checks if an array includes a certain element and returns true or false
const includesElement: boolean = myArray.includes(5);
console.log("Array includes 5:", includesElement);

// find: Returns the first element in an array that satisfies a provided testing function
const foundElement: number | undefined = myArray.find((element) => element > 3);
console.log("First element greater than 3:", foundElement);

// findIndex: Returns the index of the first element in an array that satisfies a provided testing function
const foundIndex: number = myArray.findIndex((element) => element > 3);
console.log("Index of first element greater than 3:", foundIndex);

// map: Creates a new array with the results of applying a provided function to every element in the array
const mappedArray: number[] = myArray.map((element) => element * 2);
console.log("Mapped array (doubled values):", mappedArray);

// filter: Creates a new array with all elements that pass a provided testing function
const filteredArray: number[] = myArray.filter((element) => element % 2 === 0);
console.log("Filtered array (even numbers):", filteredArray);

// reduce: Applies a function to an accumulator and each element in the array (from left to right) to reduce it to a single value
const sumOfArray: number = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of array elements:", sumOfArray);

// every: Checks if all elements in an array pass a provided testing function
const allGreaterThanZero: boolean = myArray.every((element) => element > 0);
console.log("All elements greater than 0:", allGreaterThanZero);

// reverse: Reverses the order of elements in an array in place
myArray.reverse();
console.log("Reversed array:", myArray);

// at: Returns the element at a specified index in an array
const indexToAccess: number = 2;
const elementAtIndex: number | undefined = myArray[indexToAccess];
console.log(`Element at index ${indexToAccess}:`, elementAtIndex);