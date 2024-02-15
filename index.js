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
    orderId: 103,
    customerId: 3,
    product: "Hairdryer",
    quantity: 3,
    price: 500,
  },
  {
    orderId: 104,
    customerId: 4,
    product: "Ipad",
    quantity: 4,
    price: 300,
  },
  {
    orderId: 105,
    customerId: 5,
    product: "Kindle",
    quantity: 5,
    price: 150,
  },
];
///////---------- Task 1
const customersEmail = customers.map((customer) => customer.email);

// console.log(customersEmail);

///////--------- Task 2
const totalValue = orders.filter((order) => {
  return order.quantity * order.price > 1000;
});

// console.log(totalValue);

////-------------- Task 3

const customerAlice = customers.find((customer) => customer.name === "Alice");
// console.log(customerAlice);

////------------------ Task 4

const orderIndex = orders.findIndex((order) => order.orderId === 102);

// console.log(orderIndex);

///------------------- Task 5

const customersInUsa = customers.some(
  (customer) => customer.location.country === "USA"
);

// console.log(customersInUsa);

/////------------------------- Task 6

orders.forEach((order) => {
  const customerName = customers.find(
    (customer) => customer.id === order.customerId
  ).name;
  console.log(
    `Order ${order.orderId} by ${customerName} : ${order.quantity} x ${order.product} for $${order.price} each`
  );
});

/////----------------- Task 7
const customerName = customers.sort((a, b) => a.name.localeCompare(b.name));

console.log(customerName);
