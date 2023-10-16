//HAMBURGER MENU CODE

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

//MODAL BUTTON AND CONTAINER VISILIBITY
/****************************/
const startModal = document.querySelector(".start-modal");
const navBar = document.querySelector(".navbar");

//DISTANCE MODAL BUTTON AND CONTAINER VISILIBITY
const modalDistanceBtn = document.querySelector(".modal-link-distance-btn");

modalDistanceBtn.addEventListener("click", function () {
    removeClasses();
    navBar.classList.toggle("active");
    distanceContainer.classList.toggle("active");
})

//LENGTH MODAL BUTTON AND CONTAINER VISILIBITY
const modalLengthBtn = document.querySelector(".modal-link-length-btn");

modalLengthBtn.addEventListener("click", function () {
    removeClasses();
    navBar.classList.toggle("active");
    lengthContainer.classList.toggle("active");
})

//MONEY MODAL BUTTON AND CONTAINER VISILIBITY
const modalMoneyBtn = document.querySelector(".modal-link-money-btn");

modalMoneyBtn.addEventListener("click", function () {
    removeClasses();
    navBar.classList.toggle("active");
    moneyContainer.classList.toggle("active");
})

//WEIGHT MODAL BUTTON AND CONTAINER VISILIBITY
const modalWeightBtn = document.querySelector(".modal-link-weight-btn");

modalWeightBtn.addEventListener("click", function () {
    removeClasses();
    navBar.classList.toggle("active");
    weightContainer.classList.toggle("active");
})

//TEMPERATURE MODAL BUTTON AND CONTAINER VISILIBITY
const modalTempBtn = document.querySelector(".modal-link-temp-btn");

modalTempBtn.addEventListener("click", function () {
    removeClasses();
    navBar.classList.toggle("active");
    tempContainer.classList.toggle("active");
})

//NAV BUTTON AND CONTAINER VISIBILITY
/****************************/

//TEMPERATURE BUTTON AND CONTAINER VISIBILITY
const tempBtn = document.querySelector(".temp-btn");
const tempContainer = document.querySelector(".temperature");
tempBtn.addEventListener("click", function () {
    removeClasses();
    tempContainer.classList.toggle("active");
})

//DISTANCE BUTTON AND CONTAINER VISIBILITY
const distanceBtn = document.querySelector(".distance-btn");
const distanceContainer = document.querySelector(".distance");
distanceBtn.addEventListener("click", function () {
    removeClasses();
    distanceContainer.classList.toggle("active");
})

//LENGTH BUTTON AND CONTAINER VISIBILITY
const lengthBtn = document.querySelector(".length-btn");
const lengthContainer = document.querySelector(".length");
lengthBtn.addEventListener("click", function () {
    removeClasses();
    lengthContainer.classList.toggle("active");
})

//MONEY BUTTON AND CONTAINER VISIBILITY
const moneyBtn = document.querySelector(".money-btn");
const moneyContainer = document.querySelector(".money");
moneyBtn.addEventListener("click", function () {
    removeClasses();
    moneyContainer.classList.toggle("active");

})

//WEIGHT BUTTON AND CONTAINER VISIBILITY
const weightBtn = document.querySelector(".weight-btn");
const weightContainer = document.querySelector(".weight");
weightBtn.addEventListener("click", function () {
    removeClasses();
    weightContainer.classList.toggle("active");

})

//REMOVE ALL CLASSES

function removeClasses() {
    startModal.classList.remove("active");
    distanceContainer.classList.remove("active");
    tempContainer.classList.remove("active");
    moneyContainer.classList.remove("active");
    lengthContainer.classList.remove("active");
    weightContainer.classList.remove("active");
}


/****CONVERSION CODE BELOW****/
/****************************/



//DISTANCE CONVERSION
let inputDistance = document.querySelector(".input-distance");
let convertDistanceBtn = document.querySelector(".convert-distance");
let newMiles = document.querySelector(".new-miles");
let newKm = document.querySelector(".new-km");

const milesToKm = 1.60934;

convertDistanceBtn.addEventListener("click", function () {

    newMiles.innerHTML = inputDistance.value;
    let newKmValue = Math.round(((inputDistance.value * milesToKm) * 100) / 100);
    newKm.textContent = newKmValue;
    inputDistance.value = "";
})

inputDistance.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        convertDistanceBtn.click()
    }
})

//TEMPERATURE CONVERSION
let inputTemp = document.querySelector(".input-temp");
let convertTempBtn = document.querySelector(".convert-temp");
let newFDegrees = document.querySelector(".new-F-degrees");
let newCDegrees = document.querySelector(".new-C-degrees");



convertTempBtn.addEventListener("click", function () {

    newFDegrees.innerHTML = inputTemp.value;
    let newCDegreesValue = Math.round((((((inputTemp.value - 32) * 5)) / 9) * 10) / 10);
    newCDegrees.textContent = newCDegreesValue;
    inputTemp.value = "";
})

inputTemp.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        convertTempBtn.click()
    }
})

//MONEY CONVERSION
let inputMoney = document.querySelector(".input-money");
let convertMoneyBtn = document.querySelector(".convert-money");
let newDollars = document.querySelector(".new-dollars");
let newEuros = document.querySelector(".new-euros");

const dollarsToEuros = .91;

convertMoneyBtn.addEventListener("click", function () {
    newDollars.innerHTML = inputMoney.value;
    let newEuroValue = inputMoney.value * dollarsToEuros.toFixed(2);
    newEuros.textContent = parseFloat(newEuroValue).toFixed(2);
    inputMoney.value = "";
})

inputMoney.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        convertMoneyBtn.click()
    }
})

//WEIGHT CONVERSION
let inputWeight = document.querySelector(".input-weight");
let convertWeightBtn = document.querySelector(".convert-weight");
let newLbs = document.querySelector(".new-lbs");
let newKgs = document.querySelector(".new-kgs");

const lbsToKgs = 0.453592;

convertWeightBtn.addEventListener("click", function () {

    newLbs.innerHTML = inputWeight.value;
    let newKgsValue = Math.round(((inputWeight.value * lbsToKgs) * 10) / 10);
    newKgs.textContent = newKgsValue;
    inputWeight.value = "";
})

inputWeight.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        convertWeightBtn.click()
    }
})

//LENGTH CONVERSION
let inputLength = document.querySelector(".input-length");
let convertLengthBtn = document.querySelector(".convert-length");
let newInches = document.querySelector(".new-inches");
let newInches2 = document.querySelector(".new-inches-2");
let newCentimeters = document.querySelector(".new-cm");
let newMeters = document.querySelector(".new-m");

const inchesToCentimeters = 2.54;


convertLengthBtn.addEventListener("click", function () {

    newInches.innerHTML = inputLength.value;
    newInches2.innerHTML = inputLength.value;
    let newCentimetersValue = (inputLength.value * inchesToCentimeters);
    newCentimeters.textContent = newCentimetersValue;
    newMeters.textContent = (newCentimetersValue * .01).toString().slice(0, 6);
    inputLength.value = "";
})

inputLength.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        convertLengthBtn.click()
    }
})