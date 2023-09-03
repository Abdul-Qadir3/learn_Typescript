interface Product {
    id: number,
    name: string,
    price: number,
    category: number
}
let product_object:Product ={
    id: 22,
    name:"table",
    price: 100,
    category: 4
}

function totalPrice(Products:Product){
    let calcultion = Products.price * Products.category;
    return calcultion
}

totalPrice(product_object)

interface Customer {
    id: number,
    name: string,
    email: string,
}
let orderType:Customer = {
    id: 23,
    name: "chair",
    email: "chair12@example.com",
}