var numberButtons = document.querySelectorAll('[data-number]');
var operator = document.querySelectorAll('[data-operation');
var equalsButton = document.querySelector('[data-equals]');
var deleteButton = document.querySelector('[data-all-clear]');
var clearButton = document.querySelector('[data-del]');
var answer = document.getElementById('output-value');
var history = document.getElementById('history-value');
// var dispScreen = document.querySelector('.dispScreen');

function clear(){
	answer.innerHTML = '';
	
	history.innerText = '';
}

function getHistoryValue(){
	var ans = document.getElementById("history-value").innerText;
	// console.log(ans);
}
function printHistory(el){
	document.getElementById('history-value').innerText = el;
}

function getOutputValue(){
	var ans = document.getElementById("output-value").innerText;
	// console.log(ans);
}
function appendNum(el){
	if(el==""){
		document.getElementById('output-value').innerText = el;
	}else{
		document.getElementById('output-value').innerText = formatNumber(el);
	}
}

// getOutputValue(); 	

function formatNumber(el){
	var num = Number(el);
	return num.toLocaleString("en");
}

function reverseNum(num){
	console.log(typeof num);
	if(num!=NaN && num!=undefined && num!=''){
		return Number(num.replace(/,/g,''));	
	}else{
		return NaN;
	}
	
	// console.log(typeof num);
	// return typeof num;
}

// reverseNum(NaN);

var arrNum = Array.from(numberButtons);
arrNum.forEach(el => el.addEventListener('click', () => {

	// var output=reverseNum(getOutputValue());
	// var output = getOutputValue();
	console.log(output);

	if (output!=undefined && output!=NaN) {
		output = output+el.innerText;
		appendNum(output);
	}

}));

// var number = document.getElementsByClassName("btn-num");
// for(var i =0;i<number.length;i++){
// 	number[i].addEventListener('click',function(){
// 		var output=reverseNum(getOutputValue());
// 		if(output!=NaN){ //if output is a number
// 			output=output+this.id;
// 			appendNum(output);
// 		}
// 	});
// }

var arrOpe = Array.from(operator);
arrOpe.forEach(el => el.addEventListener('click', () => console.log(`${el.innerHTML} pressed`)));




