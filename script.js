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
const result = document.querySelector('.result')

isSecond = false;
ins.textContent = 0




nums.forEach((button) => {
    button.addEventListener('click', () => {
        val = button.value;
        if (isSecond == false){
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
    ins.textContent = 0;
    leftOperand = '' 
    rightOperand = ''
    operator =  ''
    isSecond = false
})

ops.forEach((opp) => {
    opp.addEventListener('click', ()=> {
        if (leftOperand !== '' && rightOperand !== '' && operator !== ''){
            res = operate(parseInt(leftOperand), operator, parseInt(rightOperand))
            leftOperand = res;
            ins.textContent = leftOperand
            rightOperand = ''
        }
        isSecond = true
        sign = opp.value;
        operator = sign;
        console.log(operator)
        
    })
}
)

result.addEventListener('click', () =>{
    if (leftOperand == null || operator == null || rightOperand == null){
        ins.textContent = leftOperand;
    }
    ins.textContent = ''
    answer = operate(parseInt(leftOperand), operator, parseInt(rightOperand))
    leftOperand = answer
    rightOperand = ''
    operator = ''
    ins.textContent = leftOperand

    console.log( leftOperand + operator +rightOperand)
})






// TODO:this is the code for the gotchas but it causes some bugs
// if (leftOperand !== undefined && rightOperand !== undefined && operator !== undefined){
//             res = operate(parseInt(leftOperand), operator, parseInt(rightOperand))
//             leftOperand = res;
//             ins.textContent = leftOperand
//             rightOperand = ''
//         }


