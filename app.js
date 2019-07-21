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

var finished=false;

function doSomething(e){
		if (e.target !== e.currentTarget){
				const key = e.target;
				const action = key.dataset.action;
				var expression = document.querySelector('#expression');
				var result = document.querySelector('#result');
				var operator = document.querySelector('#operator');
				if(finished){
						expression.innerHTML="";
						finished=false;
				}
				if(!action){
						const num = key.textContent;
						if(num === '.'){
								if(result.innerHTML.indexOf(num)>-1){
										result.innerHTML = result.innerHTML;
								}
								else{
										result.innerHTML = result.innerHTML += num;
								}
						}
						else{
								result.innerHTML = result.innerHTML += num;
						}
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
						if(expression.innerHTML == ""){
								expression.innerHTML = result.innerHTML;
						}
						else{
								expression.innerHTML = operate(expression.innerHTML,result.innerHTML,key.textContent);
						}
						result.innerHTML="";
						let oper = key.textContent;
						operator.innerHTML=oper;
				}
				else if (action === 'equal'){
						expression.innerHTML = operate(expression.innerHTML,result.innerHTML,operator.innerHTML);
						result.innerHTML="";
						operator.innerHTML="";
						finished=true;
				}
		}
		// e.stopPropagation();
}

function operate(operand1, operand2, operator){
		if(operand1 == ""){
				alert("Cannot operate on empty operand");
		}
		else{
				operand1 = Number(operand1);
				operand2 = Number(operand2);
				var result;
				if(operator == "+"){
						result = operand1 + operand2;
				}
				else if(operator == "-"){
						result = operand1 - operand2;
				}
				else if(operator == "x"){
						result = operand1 * operand2;
				}
				else if(operator == "/"){
						result = operand1/operand2;
				}
				if(result%1===0){
						return result;
				}
				else{
						return result.toFixed(2);
				}
		}

}
