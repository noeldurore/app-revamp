// Filename: complexCode.js
// Description: A complex code with multiple functions and objects for a fictional e-commerce website.

// Constants
const MAX_PRODUCTS = 100;
const MAX_ORDERS = 1000;

// Data Structures
let products = [];
let orders = [];

// Product Object
function Product(id, name, price, description) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.description = description;
}

// Order Object
function Order(id, products, quantity) {
  this.id = id;
  this.products = products;
  this.quantity = quantity;
}

// Function to generate random products
function generateProducts() {
  for (let i = 0; i < MAX_PRODUCTS; i++) {
    let product = new Product(
      i,
      `Product ${i}`,
      Math.random() * 100,
      `Description ${i}`
    );
    products.push(product);
  }
}

// Function to generate random orders
function generateOrders() {
  for (let i = 0; i < MAX_ORDERS; i++) {
    let orderProducts = [];
    let orderQuantity = Math.floor(Math.random() * 10) + 1;
    for (let j = 0; j < orderQuantity; j++) {
      let randomProductId = Math.floor(Math.random() * MAX_PRODUCTS);
      let product = products[randomProductId];
      orderProducts.push(product);
    }
    let order = new Order(i, orderProducts, orderQuantity);
    orders.push(order);
  }
}

// Function to calculate total order value
function calculateTotalOrdersValue() {
  let totalValue = 0;
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    for (let j = 0; j < order.products.length; j++) {
      let product = order.products[j];
      totalValue += product.price * order.quantity;
    }
  }
  return totalValue.toFixed(2);
}

// Function to find most popular product
function findMostPopularProduct() {
  let productCount = {};
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    for (let j = 0; j < order.products.length; j++) {
      let product = order.products[j];
      if (product.id in productCount) {
        productCount[product.id] += order.quantity;
      } else {
        productCount[product.id] = order.quantity;
      }
    }
  }
  let mostPopularProductId = Object.keys(productCount).reduce(
    (a, b) => (productCount[a] > productCount[b] ? a : b)
  );
  return products[mostPopularProductId].name;
}

// Execution of the code
generateProducts();
generateOrders();
console.log(`Total Orders Value: $${calculateTotalOrdersValue()}`);
console.log(`Most Popular Product: ${findMostPopularProduct()}`);
```

This code simulates a fictional e-commerce website, where products and orders are generated randomly. It includes objects for products and orders, functions to generate random data, calculate total order value, and find the most popular product among orders. The code demonstrates object-oriented programming and data manipulation techniques.