var numbers = document.querySelectorAll(".btn-num");
var operators = document.querySelectorAll(".btn-operator");
var ans = document.querySelector(".btn-operator-ans");
var result = document.getElementById("result");
var hist = document.querySelector(".history");
var c = document.querySelector(".btn-operator-c");
var ce = document.querySelector(".btn-operator-ce");

var numArray = Array.from(numbers);
var operArray = Array.from(operators);

var startCalculation = (function() {
  var expressionArray = [];
  let expressString = "";

  numArray.forEach(el =>
    el.addEventListener("click", () => {
      if (
        expressionArray[expressionArray.length - 1] === "." &&
        el.innerHTML === "."
      ) {
        return -1;
      } else {
        conCat_(el.innerHTML);
      }
    })
  );

  operArray.forEach(el =>
    el.addEventListener("click", () => {
      if (expressionArray[expressionArray.length - 1] === el.innerHTML) {
        return -1;
      } else {
        conCat_(el.innerHTML);
      }
    })
  );

  ce.addEventListener("click", () => {
    clearScreen();
  });

  var clearScreen = () => {
    console.log("helo");
    expressionArray.pop();
    console.log(expressionArray);

    expressString = expressString.substring(0, expressString.length - 1);
    display(expressString);
  };

  var conCat_ = exp => {
    expressionArray.push(exp);
    console.log(expressionArray);

    expressString = expressString.concat(exp);
    display(expressString);
  };

  function display(el) {
    // console.log(el);
    result.innerHTML = el;
  }

  return {
    queryArray: expressionArray,
    // queryExp: expressString,
    test: 100
  };
})(updateAns);

var updateAns = (function(startCalc) {
  ans.addEventListener("click", () => {
    var express = "";
    var exp = startCalc.queryArray;

    exp.forEach(el => {
      express = express.concat(el);
    });

    result.innerHTML = "";
    history.innerHTML = "";
    var ans = eval(express);
    hist.innerHTML = express;
    console.log(express);
    result.innerHTML = ans;
  });

  c.addEventListener("click", () => {
    result.innerHTML = "";
    hist.innerHTML = "";
  });
})(startCalculation);
