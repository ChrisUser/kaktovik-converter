"use strict"

let kaktovikDigitsContainer

function generateDigitDiv(digitValue) {
  const div = document.createElement("div")
  div.setAttribute("class", "digit digit-" + digitValue)
  kaktovikDigitsContainer.appendChild(div)
}

function formatDecToKaktovik() {
  const decInputValue = document.getElementById("decInputField").value
  kaktovikDigitsContainer = document.getElementById("kaktovikDigitsContainer")
  kaktovikDigitsContainer.innerHTML = ""
  const decimalSeparatedNumbers = decInputValue.split(".").slice(0, 2)
  for (let j = 0; j < decimalSeparatedNumbers.length; j++) {
    if (j > 0) kaktovikDigitsContainer.innerHTML += "."
    const dec = parseInt(decimalSeparatedNumbers[j], 10)
    const twen = dec.toString(20)
    const revertedDigits = twen.split("").reverse().join("")
    let i = revertedDigits.length
    while (i) {
      generateDigitDiv(revertedDigits[i - 1])
      i--
    }
  }
}
