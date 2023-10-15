import approvedstd from "./modulesExp";

console.log(approvedstd[0].id)
console.log(approvedstd[0].name)

console.log(approvedstd[1].id)
console.log(approvedstd[1].name)

console.log(approvedstd[2].id)
console.log(approvedstd[2].name)

//=========================================================================================

//print using for loop

import approve from "./modulesExp"; //we can call using a changed the name of the object in the impoert file

for(let i=0;i<approve.length;i++){
    console.log(`Student ID is ${approve[i].id} and the name is ${approve[i].name}`)
}

//============================================================================================

import approved from "./modulesExp"; //we can call using a changed the name of the object in the impoert file

for(let i=0;i<approved.length;i++){
    console.log(`Student ID is ${approved[i].id} and the name is ${approved[i].name}`)
}