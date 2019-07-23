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
        hist.innerHTML = "";
        conCat_(el.innerHTML);
      }
    })
  );

  operArray.forEach(el =>
    el.addEventListener("click", () => {
      if (expressionArray[expressionArray.length - 1] === el.innerHTML) {
        return -1;
      } else {
        hist.innerHTML = "";
        conCat_(el.innerHTML);
      }
    })
  );

  ce.addEventListener("click", () => {
    clearScreen();
  });

  c.addEventListener("click", () => {
    result.innerHTML = "";
    hist.innerHTML = "";

    reset();
    console.log(expressString);
    console.log(expressionArray);
  });

  ans.addEventListener("click", () => {
    result.innerHTML = "";
    history.innerHTML = "";
    var ans = eval(expressString);
    hist.innerHTML = expressString;
    result.innerHTML = ans;
    // Resetting Array and Strings
    expressionArray = [ans];
    console.log(expressionArray);
    expressString = String(ans);
    console.log(expressString);
  });

  var clearScreen = () => {
    expressionArray.pop();

    expressString = expressString.substring(0, expressString.length - 1);
    display(expressString);
  };

  var conCat_ = exp => {
    expressionArray.push(exp);

    expressString = expressString.concat(exp);
    display(expressString);
  };

  function display(el) {
    result.innerHTML = el;
  }

  function reset() {
    expressString = "";
    expressionArray = [];
  }
})();
