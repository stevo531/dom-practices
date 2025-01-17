
    
/*function differenceOfSquares(numbers) {
   // let n 
    for(let i=1; i<11; i++){
      console.log(i)
      console.log([i*i])
      }
    // ...
    //return 0
  }
  differenceOfSquares()
  let n = 3025
  let m = 386
  console.log('The square of the sum of numbers is' +n)
  console.log('The sum of the squares of the numbers is' +m)*/
  function getCount(str) {
    if(str => str === str.toLowerCase){
    return str.match(/[aeiou]/gi).length;
      }
    else{
      return 0
    }
  }
  console.log(getCount('today is wednesday'))