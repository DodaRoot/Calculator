// Linking the dom
let display = document.querySelector('.display')
let btn = document.querySelectorAll('#btn')
let op = 0
let bool = false

// Geting the value from the calc buttons
btn.forEach((item) => {
    item.addEventListener('click', () => {
        ['+', '-', '*', '/'].includes(item.value) ? bool = true : bool = false;
        if (op == -1) {
            display.style.fontSize = '60px'
            display.innerText = '0'
            op++
        }
        else if (bool == false || op > 0) {
            op == 0 ? (display.innerText = '', op++) : display ; 
            log(item.value) 
        }
        let font = display.innerText.length
        font > 9 ? display.style.fontSize = '48px' : false ;
        font > 11 ? display.style.fontSize = '38px' : false ;
        font > 14 ? display.style.fontSize = '28px' : false ;
        font > 17 ? display.style.fontSize = '26px' : false ;
    })
})

// Finding the value type and calling the appropriate func()
let ref = ''
type = 0
function log(val) {
    if (['CE', 'DEL', '+/-', '%', '.'].includes(val)) {
        val == 'CE' ? clear() : false ;
        val == 'DEL' ? deletion() : false;
        val == '+/-' ? negation() : false ;
        val == '%' ? percent() : false;
        val == '.' ? dot(val) : false ;
    }
    else if (bool == false || type == 0) {
        bool ? (ref = val, op++): ref ;
        val == '=' ? opperation() : display.innerText += val ;
        bool ? type++ : type ;
    }
}

// The +, -, *, / opperations func()
let output = 0
function opperation() {
    let formula = ''
    form = display.innerText.replace(/[*+-]/g, '?').replace('/', '?').split('?')
    let val2 = form[2]
    if (neg == 1) {
        formula = negDisplay.replace(/[*+-]/g, '?').replace('/', '?').split('?')
    }
    else if (neg == 2) {
        negDisplay = `${negDisplay}${ref}${val2}`
        formula = negDisplay.replace(/[*+-]/g, '?').replace('/', '?').split('?')
    }
    else {
        formula = display.innerText.replace(/[*+-]/g, '?').replace('/', '?').split('?')
    }
    let first = parseFloat(formula[0].replace('!', '-').replace(/[()]/g, ''))
    let second = parseFloat(formula[1].replace('!', '-').replace(/[()]/g, ''))
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
    display.style.fontSize = '60px'
    display.innerText = output
    op = -1
    type = 0
    count1 = 0
    count2 = 0
    neg = 0
}

// CE opperation func()
function clear() {
    display.style.fontSize = '60px'
    display.innerText = '0'
    op = 0
    type = 0
    count1 = 0
    count2 = 0
    neg = 0
}

// DEL opperation func()
function deletion() {
    let lastChar = display.innerText
    let index = lastChar[lastChar.length - 1]
    if (['+', '-', '*', '/'].includes(index)) {
        type = 0
    }
    let deleted = display.innerText.slice(0, -1) 
    display.innerText = deleted
}

function percent() {
    val = display.innerText
    val = val / 100
    display.innerText = val
}

let count1 = 0
let count2 = 0
function dot (val) {
    if (op < 2) {
        count1 == 0 ? display.innerText += val : false ;
        count1++
    }
    else {
        count2 == 0 ? display.innerText += val : false ;
        count2++
    }
}

let negDisplay = ''
let neg = 0
function negation() {
    form = display.innerText.replace(/[*+-]/g, '?').replace('/', '?').split('?')
    console.log(form)
    if (op < 2) {
        let val = form[0]
        let out = `(-${val})`
        display.innerText = out
        negDisplay = out.replace('-', '!')
        neg = 2
    }
    else if (op == 2) {
        let val1 = form[0]
        let val2 = form[1]
        let out = `${val1}${ref}(-${val2})`
        display.innerText = out
        negDisplay = out.replace('-', '!')
        neg = 1
    }
}
