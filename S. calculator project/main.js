let total = 0

document.querySelector('#handsome').addEventListener('click', addFive)
document.querySelector('#beautiful').addEventListener('click', subSeven)
document.querySelector('#amazing').addEventListener('click', addOne)
document.querySelector('#courageous').addEventListener('click', subSix)
document.querySelector('#spirited').addEventListener('click', makeZero)

function addFive() {
    total = total + 5
    document.querySelector('#enterResult').innerHTML = total
}

function subSeven() {
    total = total - 7
    document.querySelector('#enterResult').innerHTML = total
}

function addOne() {
    total = total + 1
    document.querySelector('#enterResult').innerHTML = total
}

function subSix() {
    total = total - 6
    document.querySelector('#enterResult').innerHTML = total
}

function makeZero() {
    total = 0
    document.querySelector('#enterResult').innerHTML = total
}
