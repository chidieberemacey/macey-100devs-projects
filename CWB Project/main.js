document.querySelector('#check').addEventListener('click', check)


function check () {
    const day = document.querySelector('#day').value

    if (day === 'Tuesday' || day === 'Thursday') {
        alert('Class Day')
    }

    else if (day ==='Saturday' || day ==='Sunday') {
        alert('Weekend')
    } else {
        alert('Boring')
    }

}