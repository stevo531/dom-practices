/*function retStr() { 
    return "hello world!!!" 
 }  
 var val = retStr() 
 console.log(val) 
retStr()

/*The destructuring assignment syntax is a JavaScript
 expression that makes it possible to unpack values from arrays, 
 or properties from objects, into distinct variables.*/

/* let arr = ['hi', 'steven']
 let [greeting, person] = arr
 console.log(greeting)
 console.log(person)*/
/*
 let greeting, slang
[greeting,, slang] = ['you', 'are welcome', 'bro!'] // skipping some values in an array
console.log(greeting)
console.log((slang))*/

/*let [greeting,...slang] = ['you', 'are welcome', 'bro!']
console.log(greeting) // assigning the rest to an array
console.log(slang)*/

/*let ob = {person: 'Man', name:'steven', height:2.1}
let human = ob.person
let dName = ob.name
let height = ob.height
console.log(human)
console.log(dName)
console.log(height)*/ // => this is not destructuring

let ob = {person: 'Man', name:'steven', height:2.1}
let {person, names, height} = ob
console.log(`you are welcome ${person}`)
