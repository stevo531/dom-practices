let counter = 0;
const element = document.getElementById('mybutton');
const counterp = document.getElementById('counterDisplay')

element.addEventListener('click', functionName);

function functionName(){
    counter++
    counterp.innerHTML= counter;
}