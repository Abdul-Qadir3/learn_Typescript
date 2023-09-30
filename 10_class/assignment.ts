// Sample array for demonstration
const numbers: number[] = [1, 2, 3, 4, 5];

// pop(): Removes and returns the last element of an array
const poppedElement: number | undefined = numbers.pop();
console.log('Popped Element:', poppedElement);
console.log('Updated Array after pop:', numbers);

// push(item1, item2, ...): Adds one or more elements to the end of an array
numbers.push(6, 7);
console.log('Updated Array after push:', numbers);

// shift(): Removes and returns the first element of an array
const shiftedElement: number | undefined = numbers.shift();
console.log('Shifted Element:', shiftedElement);
console.log('Updated Array after shift:', numbers);

// unshift(item1, item2, ...): Adds one or more elements to the beginning of an array
numbers.unshift(-1, 0);
console.log('Updated Array after unshift:', numbers);

// concat(array2, array3, ...): Combines two or more arrays
const moreNumbers: number[] = [8, 9, 10];
const combinedArray: number[] = numbers.concat(moreNumbers);
console.log('Combined Array:', combinedArray);

// join(separator): Joins all elements of an array into a string with a specified separator
const joinedString: string = numbers.join('-');
console.log('Joined String:', joinedString);

// slice(start, end): Returns a new array containing elements from the specified start index to the end index (end not included)
const slicedArray: number[] = numbers.slice(2, 4);
console.log('Sliced Array:', slicedArray);

// indexOf(item): Returns the first index at which a given element can be found in the array, or -1 if it is not present
const indexOfThree: number = numbers.indexOf(3);
console.log('Index of 3:', indexOfThree);

// includes(item): Checks if an element exists in the array and returns a boolean
const includesFive: boolean = numbers.includes(5);
console.log('Includes 5:', includesFive);

// find(callback): Returns the first element in the array that satisfies the provided testing function
const foundElement: number | undefined = numbers.find((num) => num > 3);
console.log('Found Element:', foundElement);

// findIndex(callback): Returns the index of the first element in the array that satisfies the provided testing function
const foundIndex: number = numbers.findIndex((num) => num > 3);
console.log('Found Index:', foundIndex);

// map(callback): Creates a new array with the results of applying a provided function to each element of the original array
const doubledArray: number[] = numbers.map((num) => num * 2);
console.log('Doubled Array:', doubledArray);

// filter(callback): Creates a new array with all elements that pass the provided testing function
const filteredArray: number[] = numbers.filter((num) => num > 2);
console.log('Filtered Array:', filteredArray);

// reduce(callback, initialValue): Applies a function against an accumulator and each element in the array (left-to-right) to reduce it to a single value
const sumOfArray: number = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Sum of Array:', sumOfArray);

// every(callback): Checks if all elements in the array pass the provided testing function and returns a boolean
const allGreaterThanZero: boolean = numbers.every((num) => num > 0);
console.log('All Greater Than 0:', allGreaterThanZero);

// sum(): Calculates the sum of all elements in the array
const arraySum: number = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Array Sum:', arraySum);

// reverse(): Reverses the order of elements in the array
const reversedArray: number[] = [...numbers].reverse();
console.log('Reversed Array:', reversedArray);

// at(index): Accesses the element at a specific index in the array
const elementAtIndex: number | undefined = numbers[2];
console.log('Element at Index 2:', elementAtIndex);
