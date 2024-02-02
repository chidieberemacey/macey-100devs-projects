document.getElementById('blue').onclick = displayBlue
document.getElementById('yellow').onclick = displayYellow
document.getElementById('grey').onclick = displayGrey
document.getElementById('pink').onclick =displayPink


function displayBlue() {
    document.querySelector('body').style.backgroundColor = 'rgba(0,191,255)'
    document.querySelector('body').style.color = 'white'
}

function displayYellow() {
    document.querySelector('body').style.backgroundColor = 'rgb(255,215,0)'
    document.querySelector('body').style.color = 'white'
}

function displayGrey() {
    document.querySelector('body').style.backgroundColor = 'rgb(169,169,169)'
    document.querySelector('body').style.color = 'white'
}

function displayPink() {
    document.querySelector('body').style.backgroundColor = 'rgb(240,136,153)'
    document.querySelector('body').style.color = 'white'
}
