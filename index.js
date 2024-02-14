// Task: Customer Data Management for an Online Store
// Task 1

const customers = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    location: { city: "New York", country: "USA" },
    account: "Premium",
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    location: { city: "Paris", country: "France" },
    account: "Trial",
  },
  {
    id: 3,
    name: "Ben",
    email: "ben@example.com",
    location: { city: "Washington", country: "USA" },
    account: "Trial",
  },
  {
    id: 4,
    name: "Mathilda",
    email: "mathilda@example.com",
    location: { city: "Berlin", country: "Germany" },
    account: "Premium",
  },
  {
    id: 5,
    name: "Isabella",
    email: "isabella@example.com",
    location: { city: "Madrid", country: "Spain" },
    account: "Premium",
  },
];

const orders = [
  { orderId: 101, customerId: 1, product: "Laptop", quantity: 1, price: 1200 },
  {
    orderId: 102,
    customerId: 2,
    product: "Smartphone",
    quantity: 2,
    price: 800,
  },
  {
    orderId: 102,
    customerId: 3,
    product: "Hairdryer",
    quantity: 3,
    price: 500,
  },
  {
    orderId: 102,
    customerId: 4,
    product: "Ipad",
    quantity: 4,
    price: 300,
  },
  {
    orderId: 102,
    customerId: 5,
    product: "Kindle",
    quantity: 5,
    price: 150,
  },
];

// ------------------------------------------
const europeanCountries = ["France", "England", "Spain", "Germany", "Italy"];
const customersFromEurope = customers.map((person) => {
  for (let i = 0; i < europeanCountries.length; i++) {
    if (person.location.country === europeanCountries[i]) {
      return "Country is in Europe";
    }
  }
  return "Country is not in Europe";
});

// console.log(customersFromEurope);

//----------------------------------------
const customerWithPreAcc = customers.filter((obj) => {
  return obj.account === "Premium";
});

const customerWithTrialAcc = customers.filter((obj) => {
  return obj.account === "Trial";
});

// console.log(customerWithPreAcc);
// console.log(customerWithTrialAcc);

//------------------------------------

const isThereAlice = customers.some((obj) => obj.name === "Alice");

const isThereSteve = customers.some((obj) => obj.name === "Steve");

// console.log(isThereAlice, isThereSteve);

// --------------------------------

const changeAllNames = customers.forEach(
  (userName) => (userName.name = "NO Name")
);

// console.log(customers);

// ----------------------------------------------------

const taxOfProduct = orders.forEach(
  (obj) => (obj.tax = (obj.price * 10) / 100)
);
console.log(taxOfProduct); // tax of pro will be undefined but we will see tax in our orders array

console.log(orders);
