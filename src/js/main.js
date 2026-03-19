import ProductData from './ProductData.mjs'
import ProductList from './ProductList.mjs'

console.log("i am here")
const productData = new ProductData("tents")

const element = document.querySelector(".product-list");
console.log(productData.getData())


const productList = new ProductList("tents",productData,element)

productList.init()