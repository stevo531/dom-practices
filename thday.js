const numbers = [45, 12, 78, 34, 39, 23];
let largest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= largest) {
        largest = numbers[i];
    }
}
console.log(`Largest Number: ${largest}`);
// Output: Largest Number: 89

//ex2
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = [];
for (let i = 0; i < cars.length; i++) {
  text.push(cars[i])  
}
console.log(text)
/* 
Write a function which takes in a string
 and replace all characters with their
  corresponding numbers in their positions in the alphabet and return an array
  of those numbers sorted in ascending order*/
 
  const mumbers = [1,2,3,4,5,5]
  const squares = mumbers.map(num => num * num)
  console.log(squares)

  const grades = [1,2,3,4,5]
  const output  = grades.reduce(acc)
  console.log(output)
  function acc(accumulator, element){
    return Math.max(accumulator, element)

  }
  //const result = finals([22,44,55,43])
 // console.log(result)
  const arr = [10,100,1000,10000]
  const minimum = arr.reduce(final)
  console.log(minimum)
  function final(accumulator, element){
    return Math.min(accumulator, element)
  }
  let a = true;
let b = false;

console.log(a && b); // Logical AND: false
console.log(a || b); // Logical OR: true
console.log(!a);     // Logical NOT: false

