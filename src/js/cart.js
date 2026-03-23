// TEAM NOTE:
// This file was simplified after refactoring the shopping cart into its own module.
//
// Previously, cart.js contained all logic related to:
// - Reading localStorage
// - Rendering cart items
// - Calculating totals
// - Manipulating DOM directly
//
// Now cart.js acts only as an entry point that:
//
// - Loads the shared header and footer using loadHeaderFooter()
// - Queries required DOM elements
// - Creates an instance of the ShoppingCart class
// - Calls init() to render the cart
//
// This separation of concerns keeps the file lightweight and aligns
// the cart implementation with the modular architecture used elsewhere
// in the application.


import { loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

loadHeaderFooter();

const productList = document.querySelector(".product-list");
const cartFooter = document.querySelector(".cart-footer");
const cartTotal = document.querySelector(".cart-total");

// Create a ShoppingCart instance by passing the DOM elements it needs to control.

const shoppingCart = new ShoppingCart(
  productList,
  cartFooter,
  cartTotal
);

// Initialize the cart rendering process.

shoppingCart.init();


// NOTE FOR TEAM:
// Future cart features (remove item, update quantity, checkout validation)
// should be implemented inside ShoppingCart.mjs to maintain architectural consistency.