// javascript is a single thread line language thatcan perform a single task at a time
// setTimeout function provides some delay of timeto proceed to next line of code
// async fuction that has to be executed after some time

console.log("This is task 1");

setTimeout(()=> {
    console.log("This is task 2 getting data from server");
}, 3000);

console.log("This is task 3");
console.log("This is task 4");
console.log("This is task 5");