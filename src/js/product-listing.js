import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

loadHeaderFooter();

const knownCategories = ["tents", "backpacks", "sleeping-bags"];
const param = getParam("category") || "tents";
const isCategory = knownCategories.includes(param);

const titleLabel = isCategory
  ? param.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
  : `Search: "${param}"`;

const titleSpan = document.querySelector(".title");
if (titleSpan) titleSpan.textContent = titleLabel;

const dataSource = new ProductData();
const element = document.querySelector(".product-list");
if (isCategory) {
  const listing = new ProductList(param, dataSource, element);
  listing.init();
} else {
  dataSource.searchProducts(param).then((results) => {
    const listing = new ProductList(param, dataSource, element);
    listing.renderList(results);
  });
}
