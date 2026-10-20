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

let leftOperand = '';
let rightOperand = '';
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



const display = document.querySelector('.text');
const nums = document.querySelectorAll('.nums');
const btn_cl = document.querySelector('.clear');
const ins = document.querySelector('.ins');
const ops = document.querySelectorAll('.op');

isSecond = false;




nums.forEach((button) => {
    button.addEventListener('click', () => {
        val = button.value;
        if ( leftOperand === '' && isSecond == false){
            leftOperand += val;
            ins.textContent = leftOperand
            console.log(leftOperand)
            console.log(operator)
            console.log(rightOperand)
        }  
        
        if (isSecond == true){
            rightOperand += val;
            ins.textContent = '';
            ins.textContent = rightOperand;
        }
    })
    
})

btn_cl.addEventListener('click', ()=>{
    ins.textContent = '';
    leftOperand = ''
    rightOperand = ''
    operator =  ''
})

ops.forEach((opp) => {
    opp.addEventListener('click', ()=> {
        isSecond = true
        sign = opp.value;
        operator = sign;
        console.log(operator)
    })
}
)









