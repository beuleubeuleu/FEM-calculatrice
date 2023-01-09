const numberBtns = document.getElementsByClassName("chiffre")

// display numbers
let isFirstInput = true
let userInput = document.querySelector(".display :first-child")

for (let numberBtn of numberBtns) {
    numberBtn.addEventListener("click", () => {
        if (isFirstInput) {
            userInput.textContent = ""
            isFirstInput = false
        }
        userInput.textContent += numberBtn.textContent
    })
}

//delete input

const delBtn = document.querySelector(".boutondel")
delBtn.addEventListener("click", () => {
    userInput.textContent = "0"
    isFirstInput = true
})

//plus operator

let firstNumber = 0
let operator = ""

const plusBtn = document.querySelector(".boutonplus")

function changeOperator(operatorBtn) {
    firstNumber = parseFloat(userInput.textContent)
    isFirstInput = true
    operator = operatorBtn.textContent
}

plusBtn.addEventListener("click", () => {
    changeOperator(plusBtn);
})

// minus operator

const minusBtn = document.querySelector(".boutonmoins")

minusBtn.addEventListener("click", () => {
    changeOperator(minusBtn)
})

//divide operator

const divideBtn = document.querySelector(".boutondiviser")

divideBtn.addEventListener("click", () => {
    changeOperator(divideBtn)
})

//multiply operator

const multiplyBtn = document.querySelector(".boutonx")

multiplyBtn.addEventListener("click", () => {
    changeOperator(multiplyBtn)
})

//reset input

const resestBtn = document.querySelector(".boutonreset")

resestBtn.addEventListener("click", () => {
    firstNumber = 0
    userInput.textContent = "0"
})

// egal button

const egalBtn = document.querySelector(".boutonegal")

egalBtn.addEventListener("click", () => {
    if (operator === "+") {
        firstNumber += parseFloat(userInput.textContent)
    }
    if (operator === "-") {
        firstNumber -= parseFloat(userInput.textContent)
    }
    if (operator === "/") {
        firstNumber = firstNumber / parseFloat(userInput.textContent)
    }
    if (operator === "x") {
        firstNumber = firstNumber * parseFloat(userInput.textContent)
    }
    userInput.textContent = firstNumber
    isFirstInput = true
    firstNumber = 0
})