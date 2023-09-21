// Linking the DOM
let placeHolder = document.querySelector('.screen')


// Global Variables
let operation = 0;
let inputOne = [];
let inputTwo = [];
let operator = [];
let output = 0;

// Logic Function

function one () {
    if (operation == 0) {
        if (inputOne <= 999999999999) {
            inputOne += 1
            placeHolder.innerHTML = `${inputOne} ${operator} ${inputTwo}`
        }
        
    }
    else if (operation == 1) {
        if (inputTwo <= 999999999999) {
            inputTwo += 1
            placeHolder.innerHTML = `${inputOne} ${operator} ${inputTwo}`
        }
    }
}

function plus () {
    operator = '+'
    placeHolder.innerHTML = `${inputOne} ${operator} ${inputTwo}`
    operation == 1
}