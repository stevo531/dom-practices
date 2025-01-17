
// CODEWARS EXERCISE 1
function hello(name) {
    //var name
    if(name === 'steven') {
 //nsole.log('Hello, '+name.charAt(0).toUpperCase() + name.slice(1))
   return 'Hello, '+name.charAt(0).toUpperCase() + name.slice(1)
    }else if(name === ''){
        return 'Hello, World'
       
      }
      else {
       return 'undefined'
    }
    
}
console.log(hello('steven'))
  // CODEWARS EXERCISE 2 In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.
/*function twoHighest(arr) {
    return Math.max(...arr)
    
  }
  const array = twoHighest(1,2,3,4,5)
  console.log(array) */
   

 /*const array = [1,2,3,4,5];
 let final = Math.max(1,2,3,4,5)
console.log(final)*/
    

/* JS CHALLENGER EXERCISE
function myFunction(a, b){
if(a === b)
return true
}
const output = myFunction(3,3)
console.log(output)
myFunction() */