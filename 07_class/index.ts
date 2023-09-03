interface cars { //interface kind of object
    mileage: number,
    model: number
}
let lexus : cars ={
    mileage:2000,
    model:2025
}
function EngineEfficiency(car:cars) {
    let calcultion = car.mileage * car.model;
    return calcultion
}
EngineEfficiency(lexus); //function call using parameter of cars

interface bikes {
    model: number;
    mileage: number;
}
let H2r : bikes ={
    model: 2021,
    mileage : 200
}
EngineEfficiency(H2r)

interface Plane {
    mileage: number,
    model: number,
    speed: number,
}
let jf17 :Plane = {
    mileage: 500,
    model: 2018,
    speed: 500
}
EngineEfficiency(jf17)//fullfills minimum requirements

interface Bus {
    model: Number,
    engine_mileage: Number
}
let busObj :Bus = {
    model: 2000,
    engine_mileage: 2021
}
// EngineEfficiency(busObj)// will show error due to different in property key or name 

// structurall and nominal types

// in structure it sees both variable property datatype and name should be same value



// method of compatability
lexus = jf17 // lexus is compatable with jf17
// jf17 = lexus // jf17 is compatable with lexus

//===========================================
let BMW = { model: 2020, mileage:2000, color:"black"}

lexus = { model: 2020, mileage:2000 } // fresh

lexus =BMW //stale object ignores extra parameters
lexus = { model:2020, mileage:2000} // exact match pf the properties


var x: { id: number ,[x:string]: any};

x= {id:12, firstName:"usman"}

let y = { id:500, address:"ISB"}

let z = { id:500, area:500}

x=y // compatible because it fullfills the rquirements

x=z // compatible because it fullfills the rquirements

// y=z // error due to the change in the properties name

// y=x // error because change in the properties name