/*const reverse = (firstName, lastName, callback) => {
    let reverseFirstName = firstName.split('').reverse().join('')
    let reverseLastName = lastName.split('').reverse().join('')
    callback(reverseFirstName,reverseLastName) // invoke the callback function passed to reverse and pass firstname and lastname
}
const reversedNames = (reverseFirstName,reverseLastName) => {   //=> simple callback usage-- 
    console.log(reverseFirstName)
    console.log(reverseLastName)
}
reverse('steven', 'cyubahiro', reversedNames)
*/

/* #exercise promise
const promised = new Promise((resolve, reject) => {
    let a = true
    let data = { name: 'steven', age: 24, sex: 'M'}
    setTimeout(() => {
        if(a) {
            resolve(data)
        } else {
            reject('error in retrieving info')
        }
    })
  
})

promised.then((message) => {
    console.log('data retrieved:', message)
})
.catch((error) => {
    console.log('Oops,error:', error)
})  */

  /*
  function dataCollect(callback) {
    setTimeout(() => {
        const error = null
callback(error, 'some data')
    }, 1000)
}

const dataCollectPromises =  ()=> {
    return new Promise((resolve, reject)=> {
       dataCollect((error, data) => {
if(error) {
            reject(error)
        }else {
            resolve(data)
        }
    })
})
}
(async () => {
    try {
    const result = await dataCollectPromises()
    console.log(result)
    } catch(error){
        console.log('error', error)
    }
})()
    

async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    if(!response.ok) {
        throw new Error('network failed')

    }
    const data = await response.json() //parsing of the response
    return data;
    } catch (error) {
        console.log('there was a problem retrieving data' ,error)
        throw error
    }
*/

function wait() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('this is the delayed')
        }, 2000)
    })
}
async function getDelayed() {
    const result  = await
}