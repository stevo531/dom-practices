function addList(){
    const newOne = document.createElement('li')
    const theList = document.getElementsByClassName('removeItem')
const btn = document.getElementById('addItem')
const ulist = document.getElementById('myList')
newOne.innerHTML = 'New Item'
ulist.prepend()
(newOne)
}

function removeList(){
    const lastList = document.getElementById('end')
    lastList.remove()
}