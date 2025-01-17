// Creating a new Map => a map is a built in object.
const myMap = new Map();

// Adding key-value pairs
myMap.set('name', 'Alice');
myMap.set('age', 30);
myMap.set('city', 'New York');

// Getting a value by key
console.log(myMap.get('name')); // Prints: Alice

// Checking if a key exists
console.log(myMap.has('age')); // Prints: true

// Getting the size of the Map
console.log(myMap.size); // Prints: 3

// Iterating over the Map
for (const [key, value] of myMap.entries()) {
  console.log(`${key}: ${value}`);
}
// Prints:
// name: Alice
// age: 30
// city: New York

// Deleting a key-value pair
myMap.delete('city');
console.log(myMap.size); // Prints: 2

// Clearing the Map
myMap.clear();
console.log(myMap.size); // Prints: 0


//code 2
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
    name => name.toUpperCase()
  ); => an arrow function with map

  const greet = name => `Hello ${name}!`; // 
  greet('Steeve') //  => returns Steeve

  const sayHi = () => console.log('Hello Udacity Student!'); // arrow function with empty parameter
sayHi();

const orderIceCream = (flavor, cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);
orderIceCream('chocolate', 'waffle'); // multiper parameters
