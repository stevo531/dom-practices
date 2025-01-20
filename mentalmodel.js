 /*function multiplePromises() {
    let promisingOne = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('this is the first promise')
        }, 3000)
    })
    let promisingTwo = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('this is the second promise')
        }, 2000)
    })
    let promisingThree = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('this is the third promise')
        }, 1000)
    })
 const final =  Promise.race([promisingOne,promisingTwo,promisingThree])
    return final
}
multiplePromises().then(data => {
    console.log(data)
})

*/
/*
const url = "htpps://api.spotify.com/v1/artists/0k17h003J5VfsdmQliZtE8"
 async function getData() {
    const request = new Request(url, {
        headers: {
            'Authorization': 'Bearer 123'
        }
    })
const response = await fetch(request)
const data = await response.json()
console.log(data)
 }
 getData() // results in an error as it is hTML documentation// adivsed to use a JSON API
 //htpps://api.spotify.com/v1/artists/0k17h003J5VfsdmQliZtE8


// Exercise 1
const url = 'https://jsonplaceholder.typicode.com/todos/1'

const fetchData = async () =>{
    try {
    const request = await fetch(url)
    const parse = await request.json()
    console.log(parse)
}catch(err) {
    console.log(err)
}
}

fetchData()

// #Exercise 2
function displayNum(){
   const timer = setInterval(() => {
        console.log(2025)
    }, 2000)
    setInterval(() => {
        clearInterval(timer)
    }, 8000)
}
displayNum()
//Exercise 3
*/
const allpromises =  () => {
    let promiseOne = new Promise((resolve, reject) => {
        setTimeout(() => {
 resolve('this is the first promise')
        }, 7000)
    })
    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
 resolve('this is the second promise')
        }, 2000)
    })
    let promise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
 resolve('this is the third promise')
        }, 5000)
    })
    let promise4 = new Promise((resolve, reject) => {
        setTimeout(() => {
 resolve('this is the fourth promise')
        }, 3000)
    })
     const firstPromise =  Promise.race([promiseOne,promise2,promise3,promise4])
    return firstPromise
}
allpromises().then(data => {
    console.log(data)
})
//exercise 4
