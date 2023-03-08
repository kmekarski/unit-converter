/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterToFeetRatio = 3.281
const literToGallonRatio = 0.264
const kiloToPoundRatio = 2.204

const inputEl = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")
const lengthResultEl = document.getElementById("length-result-p")
const volumeResultEl = document.getElementById("volume-result-p")
const massResultEl = document.getElementById("mass-result-p")

convertBtn.addEventListener("click", () => {
    let inputValue = inputEl.value
    lengthResultEl.textContent = `${inputValue} meters = ${convert(inputValue, "length", "straight")} feet | ${inputValue} feet = ${convert(inputValue, "length", "invert")} meters`
    volumeResultEl.textContent = `${inputValue} liters = ${convert(inputValue, "volume", "straight")} gallons | ${inputValue} gallons = ${convert(inputValue, "volume", "invert")} liters`
    massResultEl.textContent = `${inputValue} kilos = ${convert(inputValue, "mass", "straight")} pounds | ${inputValue} pounds = ${convert(inputValue, "mass", "invert")} kilos`
})

function convert(value, type, invert) {
    let result
    let ratio
    switch(type) {
        case "length":
            {
                ratio = meterToFeetRatio
                break;
            }
        case "volume":
            {
                ratio = literToGallonRatio
                break;
            }
        case "mass":
            {
                ratio = kiloToPoundRatio
                break;
            } 
    }
    if(invert==="invert") {
        result = value/ratio
    } else {
        result = value*ratio
    }
    return (result).toFixed(3)
}