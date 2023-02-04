"use strict"

let kaktovikDigitsContainer
let kaktovikInputField
let decimalConversionResult
let selectedDigits = ""

// Generates a div containing the 'digitValue' relative sprite
// before append it inside the 'containerElement' specified div.
// The dot value is pasted inside without any further conversion.
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

// Splits the input string into two pieces (if decimal),
// converts each one into a base-10 integer and then a base-20
// string. The string gets reversed and re-joined for optimization
// purposes and for each character the 'generateDigitDiv' provides
// the respective kaktovik digit sprite.
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

// If the user clicks on a digit key in the Kaktovik to dec section
// the digit value is displayed on screen with the 'generatedDigitDiv'
// method and the value is saved inside the 'selectedDigits' for
// a later conversion to decimal.
function inputKaktovikDigit(digitValue) {
  if (typeof kaktovikInputField == "undefined")
    kaktovikInputField = document.getElementById("kakInputField")
  generateDigitDiv(digitValue, kaktovikInputField)
  selectedDigits += digitValue
}

// The 'selectedDigits' array's contents gets converted into base-20
// integers and then base-10 strings values.
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
