"use strict"

let kaktovikDigitsContainer
let kaktovikInputField
let decimalConversionResult
let selectedDigits = ""

function generateDigitDiv(digitValue, containerElement) {
  const div = document.createElement("div")
  if (digitValue === ".") {
    document.getElementById("keyboardDotButton").setAttribute("disabled", true)
    div.innerHTML += "."
  } else {
    div.setAttribute("class", "flexbox digit digit-" + digitValue)
  }
  containerElement.appendChild(div)
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
      generateDigitDiv(revertedDigits[i - 1], kaktovikDigitsContainer)
      i--
    }
  }
}

function inputKaktovikDigit(digitValue) {
  if (typeof kaktovikInputField == "undefined")
    kaktovikInputField = document.getElementById("kakInputField")
  generateDigitDiv(digitValue, kaktovikInputField)
  selectedDigits += digitValue
}

function formatKaktovikToDec() {
  if (selectedDigits.length <= 0) return
  decimalConversionResult = document.getElementById("decimalResultContainer")
  decimalConversionResult.innerHTML = ""
  const dotSeparatedNumbers = selectedDigits.split(".").slice(0, 2)
  for (let j = 0; j < dotSeparatedNumbers.length; j++) {
    if (j > 0) decimalConversionResult.innerHTML += "."
    const kakt = parseInt(dotSeparatedNumbers[j], 20)
    const dec = kakt.toString(10)
    decimalConversionResult.innerHTML += dec
  }
}
