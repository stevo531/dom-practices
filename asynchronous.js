/*ES6
--let, const // block scoped which means they arre only accessuble within a certain block of code
{
    // block of code

    // declare variable with let
    let name = "Peter";

    // can be accessed here
    console.log(name); // Peter
}

// can't be accessed here
console.log(name); // output is ERROR

The template literal makes it easier to include variables inside a string.
console.log(`hi, im ${name}`)

default parameters => function numbers(num1, num2 = 15){
                      console.log(num1+num2)
                       }
                       numbers(2) // output = 17 // num2 takes the default parameter
                       numbers(2,5) // output = 7 // num2 also takes a certain value
--function call(name){
  console.log(`hi, ${name}`)
}

function userInput(callback){
  const name = 'steve'
callback(name)
  }
  userInput(call)

-- /*
const reversed = (firstName, lastName, callback) => {
 let reverseFirstName = firstName.split('').reverse().join('')
let reverseLastName = lastName.split('').reverse().join('')
console.log(reverseFirstName,reverseLastName)
callback()
  
}
const functionCallback = () => {
 console.log('callback function invoked!')
 
} 
reversed('Steven', 'Cyubahiro', functionCallback) 


--const changedName = (firstName, lastName, callback) => {
  callback(firstName, lastName)
}

const reversed = (firstName, lastName) => {
  reverseFirstName = firstName.split('').reverse().join('')
  console.log(`format change is ${reverseFirstName}`)
}
changedName('Steven', 'Cyubahiro', reversed)

--function counter(callback){
 setTimeout(() => {
    for (var i = 1; i < 6; i++) {
      console.log(i)
    }
    callback()
  }, 1000);
} 
  


function timer(){
  console.log('counter finished!')
}

   

counter(timer)

--function calculate(num1, num2, callback){
 
  callback(num1, num2)
}

function added(num1, num2){
    let finalNum = num1 + num2
  console.log(`the number is ${finalNum}`)
}

calculate(1,2,added)
*/

//#1
async function fetchUserDetails(userId) {
  // pretend we are making an async call

  return {'name': 'Robin','like': ['pizza'] }// json object
  
}
async function caller(userId){ // if no async there will be an error
const user = await fetchUserDetails(userId)
console.log(user)
}


function getHi(){ // not async
return 'hi'
}

async function caller1(){
  const message =  getHi() // there was an await that could lead to an error as we are awaiting a non-sync function
  console.log(message)
}



const validateUser = ({userId, password}) =>{
  return new Promise((resolve, reject) => {
  if(userId && password) {
    resolve('done')

  }
  else {
    reject({message: 'info incorrect'})
  }
  
})
}

const app = async () => {
  const data = {
    userId: 'userId123',
    password: 'password123',
  }

  try{
   const result = await validateUser(data)
  console.log(result)
} catch (error) {
  console.log(error.message)
}
}

caller('userId123')
caller1()
app()
