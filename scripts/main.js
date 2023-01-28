"use strict"

let kaktovikDigitsContainer

function generateDigitDiv(digitValue) {
  const div = document.createElement("div")
  div.setAttribute("class", "digit digit-" + digitValue)
  kaktovikDigitsContainer.appendChild(div)
}

function formatDecToKaktovik() {
  const decInputValue = document.getElementById("decInput").value
  const resultBox = document.getElementById("result")
  kaktovikDigitsContainer = document.getElementById("kaktovikDigitsContainer")
  kaktovikDigitsContainer.innerHTML = ""
  const dec = parseInt(decInputValue, 10)
  const twen = dec.toString(20)
  console.log("b-10", dec)
  console.log("b-20", twen)
  resultBox.innerHTML = twen
  const revertedDigits = twen.split("").reverse().join("")
  let i = revertedDigits.length
  while (i) {
    generateDigitDiv(revertedDigits[i - 1])
    console.log(revertedDigits[i - 1])
    i--
  }
}
