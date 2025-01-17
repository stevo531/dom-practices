//setTimeout(() => {
    
//}, timeout);
function bo(bar){
    bar()
}
bo(function() {
    console.log('kick me')
})

function count(callback){
    let num = 1 

    if(num <=5){
        setTimeout(() => {
            callback(num);
            num++
        }, 1000)
    }
}

