// Linking the dom
let display = document.querySelector('.display')
let btn = document.querySelectorAll('#btn')
let op = 0
let bool = false
// Default display output
let output = 0

// Geting the value from the calc buttons
btn.forEach((item) => {
    item.addEventListener('click', () => {
        ['+', '-', '*', '/'].includes(item.value) ? bool = true : bool = false;
        if (op == -1) {
            display.innerText = '0'
            op++
        }
        else if (bool == false || op > 0) {
            op == 0 ? (display.innerText = '', op++) : display ; 
            log(item.value) 
        }
    })
})

// Finding the value type and calling the appropriate func()
let ref = ''
type = 0
function log(val) {
    if (bool == false || type == 0) {
        bool ? (ref = val, op++): ref ;
        val == '=' ? opperation() : display.innerText += val ;
        bool ? type++ : type ;
    }
}

function opperation() {
    let formula = display.innerText.replace(/[*+-]/g, '?').replace('/', '?').split('?')
    let first = parseFloat(formula[0])
    let second = parseFloat(formula[1])
    switch (ref) {
        case '+':
            output = first + second
            break;
        case '-':
            output = first - second
            break;
        case '*':
            output = first * second
            break;
        case '/':
            output = first / second
            break;
    }
    display.innerText = output
    op = -1
    type = 0
}

function clear() {
    display.innerText = output
    op = 0
    type = 0
}