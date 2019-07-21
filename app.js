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
        var clickeditem = e.target.innerText;
        var dispScreen = document.querySelector('#result');
        var calc = dispScreen.innerHTML;
        if(clickeditem == 'CE'){
            dispScreen.innerHTML="";
        }
        else if(clickeditem == 'C'){
            dispScreen.innerHTML= calc.substring(0, calc.length - 1);
        }
        else if (clickeditem == '='){
            calculate();
        }
        else{
            dispScreen.innerHTML += clickeditem;
        }
    }
    // e.stopPropagation();
}
function calculate(){
    
    var expression = document.querySelector('#result').innerHTML;
    if(expression == ''){
        alert("Empty Operation");
    }
    else{
        console.log(expression);
    }
    
};