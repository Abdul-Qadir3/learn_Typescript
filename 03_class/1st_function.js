"use strict";
// Function is created for a work that is done repeatedly and avoid repeatition
// functions are of two types 
//1. Concret function = which has any name
//2. Anonymous Or Arrow function=with no name
//function declaration
function prepareMeal(dishName) {
    console.log("Making DIsh is: " + dishName);
}
prepareMeal("chicken tikka"); // funtion call
let newMeal = (dishName_1) => //to hold this function we assign a variable to this function
 {
    console.log("Makingof:" + dishName_1);
};
newMeal("russian salad");
//1. Prepare Meal
//2. Decorate Stage
//3. Music Management
//4. Gift Collection
