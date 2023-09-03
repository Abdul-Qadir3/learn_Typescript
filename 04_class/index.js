"use strict";
// let arr1 = ["khi","lhr","rwp","isb","psw"]
// for (let i=0; i<arr1.length; i++){
//     if (arr1[i] =="isb"){
//         console.log("cleanest city is ",arr1[i]);
//         break;
//     }
//     else if(arr1[i] != "isb" && i != 4){
//         console.log("cleanest city not in array: ",arr1[i]);
//     }
// }
let groceryitems = ["bread", "Cooking oil", "egg", "milk", "egg", "fruits", "veg"];
// for mutiple items
const eggcounter = 0;
for (let item = 0; item < groceryitems.length; item++) {
    if (groceryitems[item] == "egg" && eggcounter > 0) {
        continue; //skip this iteration
    }
    console.log("item no, $(item). which is $(greceryitems[item]))");
    console.log("pick from rack");
    console.log("putt in your cart");
    console.log("=============================");
    if (eggcounter > 0) {
        continue;
    }
}
