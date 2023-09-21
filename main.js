// Linking the DOM
let placeHolder = document.querySelector('.screen')


// Global Variables
let operation = 0;
let inputOne = '';
let inputTwo = '';
let operator = [];
let formula = '';
let output = 0;

// Logic Function

function one () {
    inputOne = [];
    inputTwo = [];
    if (operation == 0) {
        if (formula.length <= 5) {
            inputOne += 1
            formula += inputOne
            logic()
        } 
    }
    else if (operation == 1) {
        if (formula.length <= 11) {
            inputTwo += 1
            formula += inputTwo
            logic()
        }
    }
}

function two () {
    inputOne = [];
    inputTwo = [];
    if (operation == 0) {
        if (formula.length <= 5) {
            inputOne += 2
            formula += inputOne
            logic()
        } 
    }
    else if (operation == 1) {
        if (formula.length <= 11) {
            inputTwo += 2
            formula += inputTwo
            logic()
        }
    }
}

function three () {
    inputOne = [];
    inputTwo = [];
    if (operation == 0) {
        if (formula.length <= 5) {
            inputOne += 3
            formula += inputOne
            logic()
        } 
    }
    else if (operation == 1) {
        if (formula.length <= 11) {
            inputTwo += 3
            formula += inputTwo
            logic()
        }
    }
}

function four () {
    inputOne = [];
    inputTwo = [];
    if (operation == 0) {
        if (formula.length <= 5) {
            inputOne += 4
            formula += inputOne
            logic()
        } 
    }
    else if (operation == 1) {
        if (formula.length <= 11) {
            inputTwo += 4
            formula += inputTwo
            logic()
        }
    }
}

function five () {
    inputOne = [];
    inputTwo = [];
    if (operation == 0) {
        if (formula.length <= 5) {
            inputOne += 5
            formula += inputOne
            logic()
        } 
    }
    else if (operation == 1) {
        if (formula.length <= 11) {
            inputTwo += 5
            formula += inputTwo
            logic()
        }
    }
}

function six () {
    inputOne = [];
    inputTwo = [];
    if (operation == 0) {
        if (formula.length <= 5) {
            inputOne += 6
            formula += inputOne
            logic()
        } 
    }
    else if (operation == 1) {
        if (formula.length <= 11) {
            inputTwo += 6
            formula += inputTwo
            logic()
        }
    }
}

function seven () {
    inputOne = [];
    inputTwo = [];
    if (operation == 0) {
        if (formula.length <= 5) {
            inputOne += 7
            formula += inputOne
            logic()
        } 
    }
    else if (operation == 1) {
        if (formula.length <= 11) {
            inputTwo += 7
            formula += inputTwo
            logic()
        }
    }
}

function eight () {
    inputOne = [];
    inputTwo = [];
    if (operation == 0) {
        if (formula.length <= 5) {
            inputOne += 8
            formula += inputOne
            logic()
        } 
    }
    else if (operation == 1) {
        if (formula.length <= 11) {
            inputTwo += 8
            formula += inputTwo
            logic()
        }
    }
}

function nine () {
    inputOne = [];
    inputTwo = [];
    if (operation == 0) {
        if (formula.length <= 5) {
            inputOne += 9
            formula += inputOne
            logic()
        } 
    }
    else if (operation == 1) {
        if (formula.length <= 11) {
            inputTwo += 9
            formula += inputTwo
            logic()
        }
    }
}

function zero () {
    inputOne = [];
    inputTwo = [];
    if (operation == 0) {
        if (formula.length <= 5) {
            inputOne += 0
            formula += inputOne
            logic()
        } 
    }
    else if (operation == 1) {
        if (formula.length <= 11) {
            inputTwo += 0
            formula += inputTwo
            logic()
        }
    }
}

function plus () {
    if (operation == 0) {
    operator = '+'
    formula += operator
    operation = 1
    logic()
    }
}

function minus () {
    if (operation == 0) {
    operator = '-'
    formula += operator
    operation = 1
    logic()
    }
}

function times() {
    if (operation == 0) {
        operator = '*'
        formula += operator
        operation = 1
        logic()
    }
}

function devide() {
    if (operation == 0) {
        operator = '/'
        formula += operator
        operation = 1
        logic()
    }
}

function whipe () {
    operation = 0;
    inputOne = [];
    inputTwo = [];
    operator = [];
    formula = '';
    output = 0; 
    placeHolder.innerHTML = 0
}


function equal () {
    if (operator == '+') {
        output = formula.replace('+', ',')
        let value = output.split(',')
        let valueOne = parseInt(value[0])
        let valueTwo = parseInt(value[1])
        output = valueOne + valueTwo
        console.log(output)
        placeHolder.innerHTML = output
        valueOne = 0
        valueTwo = 0
        operation = 2
    }
    else if (operator == '-') {
        output = formula.replace('-', ',')
        let value = output.split(',')
        let valueOne = parseInt(value[0])
        let valueTwo = parseInt(value[1])
        output = valueOne - valueTwo
        console.log(output)
        placeHolder.innerHTML = output
        valueOne = 0
        valueTwo = 0
        operation = 2
    }
    else if (operator == '*') {
        output = formula.replace('*', ',')
        let value = output.split(',')
        let valueOne = parseInt(value[0])
        let valueTwo = parseInt(value[1])
        output = valueOne * valueTwo
        console.log(output)
        placeHolder.innerHTML = output
        valueOne = 0
        valueTwo = 0
        operation = 2
    }
    else if (operator == '/') {
        output = formula.replace('/', ',')
        let value = output.split(',')
        let valueOne = parseInt(value[0])
        let valueTwo = parseInt(value[1])
        output = valueOne / valueTwo
        console.log(output)
        placeHolder.innerHTML = output
        valueOne = 0
        valueTwo = 0
        operation = 2
    }
}

function logic () {
    placeHolder.innerHTML = formula
}
