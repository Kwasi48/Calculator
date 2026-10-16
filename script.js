function add(a, b){
    return a + b;
}

function subtract (a, b){
    return a -b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return Math.floor(a / b);
}

let leftOperand;
let rightOperand;
let operator;

//creating the operate function
function operate(leftOperand, operator, rightOperand){
    switch (operator) {
        case '+':
            return add(leftOperand, rightOperand);
            break;
        case'*':
            return multiply(leftOperand, rightOperand);
            break;
        case'/':
            return divide(leftOperand, rightOperand);
        case '-':
            return subtract(leftOperand, rightOperand);
    }
}

results = [];

const display = document.querySelector('.text');
const nums = document.querySelectorAll('.nums');
const btn_cl = document.querySelector('.clear');
const ins = document.querySelector('.ins');
const outs = document.querySelector('.out');
const ops = document.querySelectorAll('.op');

nums.forEach(but => {
    but.addEventListener('click', () =>{
        let number = but.value;
        //console.log(number);
        results.push(number)
        console.log(results)
        ins.textContent += String(number);
    })
})

ops.forEach(but => {
    but.addEventListener('click', () =>{
        let number = but.value;
        //console.log(number);
        ins.textContent += String(number)
    })
})

btn_cl.addEventListener('click', ()=>{
    ins.textContent = '';
})







