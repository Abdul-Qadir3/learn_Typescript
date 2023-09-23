"use strict";
function carMaintenance1(cb) {
    // Step 1: Log that you're leaving your car at the workshop at 9.
    console.log("I leave my car at 9 in the workshop");
    // Step 2: Simulate a delay of 2 seconds (2000 milliseconds) to mimic car repair.
    setTimeout(() => {
        // Step 3: After the delay, log that the car is fixed.
        console.log("Car is fixed...");
        // Step 4: Call the callback function `cb` with the message "your car is ready."
        cb("your car is ready");
    }, 2000);
}
// Step 5: Define a function `pickDress` that takes a callback parameter.
function pickDress1(callback) {
    // Step 6: Implement the logic for picking a dress (not shown in your code).
    // This function is currently empty and should be filled with your dress-picking logic.
}
// Step 7: Call the `carMaintenance` function.
carMaintenance((text) => {
    // Step 8: Define an anonymous callback function that takes a `text` parameter.
    // This function logs the message received from `carMaintenance`.
    console.log("Car maintenance callback:", text);
    // Step 9: Call the `pickDress` function and pass in a callback function.
    pickDress((dressText) => {
        // Step 10: Define another anonymous callback function for picking a dress.
        // This function logs the message received from `pickDress`.
        console.log("Dress callback:", dressText);
    });
});
