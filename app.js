// let numbers = document.querySelectorAll('.btn-num');

// var valueRetriever = function () {
//     var number = this.innerText
//     return(number);
// }

var row1 = document.querySelector('.row1');
var row2 = document.querySelector('.row2');
var row3 = document.querySelector('.row3');
var row4 = document.querySelector('.row4');
var row5 = document.querySelector('.row5');


row1.addEventListener("click",doSomething, false);
row2.addEventListener("click",doSomething, false);
row3.addEventListener("click",doSomething, false);
row4.addEventListener("click",doSomething, false);
row5.addEventListener("click",doSomething, false);


function doSomething(e){
    if (e.target !== e.currentTarget){
        const key = e.target;
        const action = key.dataset.action;
        var expression = document.querySelector('#expression');
        var result = document.querySelector('#result');
        var operator = document.querySelector('#operator');
        if(!action){
            // console.log('Numbr Key');
            const num = key.textContent;
            // console.log(num);
            result.innerHTML = result.innerHTML += num;
        }
        else if (action == "cancel"){
            result.innerHTML= result.innerHTML.substring(0, result.innerHTML.length - 1);
        }
        else if (action == "clear"){
            result.innerHTML= "";
            expression.innerHTML = "";
            operator.innerHTML = "";
        }
        else if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
          ) {
            // console.log('operator key!')
            if(expression.innerHTML == ""){
                expression.innerHTML = result.innerHTML;
            }
            else{
                expression.innerHTML = operate(expression.innerHTML,result.innerHTML,action);
                // console.log(action);
            }
            result.innerHTML="";
            let oper = key.textContent;
            operator.innerHTML=oper;
            // console.log(operator);
          }

    }
    // e.stopPropagation();
}

function operate(operand1, operand2, operator){
    if(operand1 == ""){
        alert("Cannot operate on empty operand");
    }
    else{
        // console.log(operator);
        operand1 = Number(operand1);
        operand2 = Number(operand2);
        if(operator == "add"){
            return operand1 + operand2;
        }
        else if(operator == "subtract"){
            return operand1 - operand2;
        }
        else if(operator == "multiply"){
            return operand1 * operand2;
        }
        else if(operator == "divide"){
            return operand1/operand2;
        }
    }
}