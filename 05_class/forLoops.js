let x = 5; //from where we want to start the loop //initialized outside of loop
for (; x < 10; x++) { //three parameters 1st is "declaration" , 2nd is "testing" , 3rd is "increament"
    console.log(x);
}
let countries = ["Afghanistan", "Pakistan", "India", "Iran",
    "Afghanistan", "Pakistan", "India", "Iran",
    "Afghanistan", "Pakistan", "India", "Iran",
    "Afghanistan", "Pakistan", "India", "Iran",
    "Afghanistan", "Pakistan", "India", "Iran",
    "Afghanistan", "Pakistan", "India", "Iran",
    "Afghanistan", "Pakistan", "India", "Iran",];
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]); //dynamic index fix when we give value to x
    for (let y = 0; y < countries[i].length; y++) { //nested loop
        if (countries[i].charAt(y) == "a" || countries[i].charAt(y) == "A") {
            console.log("*");
        }
        else {
            console.log(countries[i].charAt(y));
        }
    }
}
/*
console.log("Pakistan".toLowerCase())
console.log("Pakistan".toUpperCase())
*/
for (let i = 0; i < countries.length; i++) {
    // if(countries[i].length>5){
    //     console.log(`${countries[i]} Length=${countries[i].length} -> Check`);
    // }else{
    //     console.log(`${countries[i]} Length=${countries[i].length} ->Check`);
    // }
    if (countries.includes("Pakistan")) {
        console.log("Pakistan Zindabad");
    }
}
//for loop with condition
for (x = 1; x < 5; x++) { //starting,condition,increament
    console.log(x);
}
let ranNum = 0;
for (let x = 0; x < 5; x++) {
    ranNum = Math.random() * 10;
    if (ranNum > 5) {
        console.log("Number is greater then  5:- " + ranNum);
    }
    else {
        console.log("Number is less then 5:- " + ranNum);
    }
}
for (let x = 0; x > 10; x--) {
    console.log(x);
}
export {};
// for (;true;x++){
//     console.log(x);
// }
