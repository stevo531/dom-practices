/*const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  console.log(fetchPromise);
  
  fetchPromise.then((response) => {
    console.log(`Received response: ${response.status}`);
  });
  
  console.log("Started request…");*/
  /*let p = new Promise((resolve,reject)  => {
    let a = 1 + 2
    if(a == 2){
        resolve('success') // calls resolev with the message
    } else {
        reject('failed') // calls reject with error
    }
  }
)
p.then((message) => {
    console.log('this is ' +message)
}).catch((message) => {
    console.log('this is the error:' +message)
})*/

let p = new Promise((resolve,reject) => {
  let a = 1 + 1
  if(a == 2){
resolve('Success')
  }
  else{
    reject('Failed')
  }
})

p.then((message) => {
  console.log('this is it ' +message)
}).catch((message) => {
  console.log('Oops, an error' +message)
})