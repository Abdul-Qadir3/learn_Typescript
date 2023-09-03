"use strict";
let product_object = {
    id: 22,
    name: "table",
    price: 100,
    category: 4
};
function totalPrice(Products) {
    let calcultion = Products.price * Products.category;
    return calcultion;
}
totalPrice(product_object);
let orderType = {
    id: 23,
    name: "chair",
    email: "chair12@example.com",
};
