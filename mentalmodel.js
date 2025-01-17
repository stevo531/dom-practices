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