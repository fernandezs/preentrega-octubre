import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
} from "./fakeStore.js";

const args = process.argv.slice(2);
console.log(args);

if (args[0] === "GET" && args[1] === "products") {
  getProducts();
} else if (args[0] === "GET" && args[1].includes("products/")) {
  const id = args[1].split("/")[1];
  getProduct(id);
} else if (args[0] === "POST" && args[1] === "products" && args.length === 5) {
  const product = {
    title: args[2],
    price: args[3],
    category: args[4],
  };
  addProduct(product);
} else if (args[0] === "DELETE" && args[1].includes("products/")) {
  const id = args[1].split("/")[1];
  deleteProduct(id);
} else {
  console.log("Invalid command");
}
