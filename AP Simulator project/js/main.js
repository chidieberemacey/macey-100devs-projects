document.querySelector('#yell').addEventListener('click', run)

function run() {
    const fName = document.querySelector('#firstName').value
    const mName = document.querySelector('#middleName').value
    const lName = document.querySelector('#lastName').value
    const oName = document.querySelector('#otherName').value

    //document.querySelector('#placeToYell').innerText = fName + ' ' + mName + ' ' + lName + '' + oName

    //document.querySelector('#placeToYell').innerText = fName + ' ' + mName + ' ' + ' ' + lName + ' ' + oName

    document.querySelector('#placeToYell').innerText = `${fName} ${mName} ${lName} ${oName}`

}

 const synth = window.speechSynthesis;
  document.querySelector('#yell').addEventListener('click', run)
 
  function run() {
  const fName = document.querySelector('#firstName').value
  const mName = document.querySelector('#middleName').value
  const lName = document.querySelector('#lastName').value
  const oName = document.querySelector('#otherName').value

  const yellText =  `${fName} ${mName} ${lName} ${oName}`
 
  document.querySelector('#placeToYell').innerText = yellText
 
  let yellThis = new SpeechSynthesisUtterance(yellText);
 
  synth.speak(yellThis);
 }