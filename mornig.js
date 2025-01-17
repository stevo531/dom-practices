/*function biggest(numbers){
    const arr = [1,2,3,4,5,56,8]
    for(let i = 0; i < arr.length; i++){
        return Math.max(arr[i])
    }
}*/

/*function reverse(array){
    return array.map(str => str.split('').reverse('').join(''))
}
const elements = ['hello how are you']
const final = reverse(elements)
console.log(final)*/

/*function display(array){
    return array.sort((num1,num2) => num1-num2)
}
const numbers = [4,5,2,5,4,6]
const final = display(numbers)
console.log(final)
function arrange(array){
    const ordered = []
    return Math.max(array)
}
const elements = [100,200,4000,43023,3243]
const finals = arrange(elements)
console.log(finals)*/

/*function sumofelements(array){
    return array.reduce(accumulator, element)
}
const array1 = [1,2,3,45,7,9,9,9]
const finals = sumofelements(array1)*/
//function addElements(total, num) {
  //  return total + num;
  //}
  
/*function sumArray(array) {
    return array.reduce(addElements, 0); // Pass the function and an initial value of 0
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  const sum = sumArray(numbers);
  console.log(sum); // Output: 15

  function nums(accumulator, n){
    return  accumulator - n;
  }
  function sumofThem(array){
    return array.reduce(nums, 0)
  }
  const list = [1,2,3,4,5,5,5]
  const final = sumofThem(list)
  console.log(final)*/

  /*function ordered(array){
    return array.map(str => str.split('').reverse('').join(''))
  }
  const list = ['hi, there you are welcome']
  const finals = ordered(list)
  console.log(finals)*/

  /*function ordered(array){
    return array.filter(num1 => num1 < 0)
    const remaining = array.filter(num1 => num1 > 1)
  }
  function orderedtwo(arrays){
  return arrays.filter(num1 => num1 > 1)
  }

  const lists = [1,2,3,4,-10,-22,100,-1100]
  const finals = orderedtwo(lists)
  console.log(finals)*/
 const array = [1,2,3,4,5,5,6,7,98,44]
 const final = array.map(String)
 console.log(final)