// modules are used for code reuseable and also import export different junks of code file to different code files

let studentObj = [ //objects of array
    {id:1 , name:"abdul"}, //object
    {id:2 , name:"kamran"}, //object
    {id:3 , name:"ali"}, //object
    {id:1 , name:"asif"}, //object
    {id:2 , name:"qasim"}, //object
    {id:3 , name:"hamza"}, //object
    {id:1 , name:"abdulaa"}, //object
    {id:2 , name:"kamran"}, //object
    {id:3 , name:"alia"}, //object
]

export let approvedstd = [
    {id:1 , name:"abdulaa"}, //object
    {id:2 , name:"kamran"}, //object
    {id:3 , name:"alia"}, //object
]

let rejstd = [
    {id:1 , name:"asif"}, //object
    {id:2 , name:"qasim"}, //object
    {id:3 , name:"hamza"}, //object
]

export default approvedstd; //we want to access this in another file
