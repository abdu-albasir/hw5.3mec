const numbers = document.querySelectorAll('.number');
const result = document.querySelector('.result span');
const operations = document.querySelectorAll('.operation');
      const equals = document.querySelector('.control[value="="]');
      const clear = document.querySelector('.control[value="C"]');
      const negative = document.querySelector('.control[value="NEG"]');
      const percent = document.querySelector('.operation[value="%"]');
      const power = document.querySelector('.operation[value="^"]');
      const squareRoot = document.querySelector('.operation[value="√"]');
      
      let firstValue = "";
      let isFirstValue = false;
      let secondValue = "";
      let isSecondValue = false;
      let sign = "";
      
      numbers.forEach(number => {
          number.addEventListener('click', (e) => {
              let val = e.target.getAttribute('value');
              if (!isFirstValue) {
                  getFirstValue(val);
              } else if (!isSecondValue) {
                  getSecondValue(val);
              }
          });
      });
      
      operations.forEach(operation => {
          operation.addEventListener('click', (e) => {
              sign = e.target.getAttribute('value');
              isFirstValue = true;
          });
      });
      
      equals.addEventListener('click', () => {
          calculateResult();
      });
      
      clear.addEventListener('click', () => {
          resetCalculator();
      });
      
      negative.addEventListener('click', () => {
          makeNegative();
      });
      
      percent.addEventListener('click', () => {
          calculatePercent();
      });
      
      power.addEventListener('click', () => {
          applyOperation('^');
      });
      
      squareRoot.addEventListener('click', () => {
          applyOperation('√');
      });
      
      function getFirstValue(val) {
          result.innerHTML = "";
          firstValue += val;
          result.innerHTML = firstValue;
          firstValue = +firstValue;
      }
      
      function getSecondValue(val) {
          if (firstValue !== "" && sign !== "") {
              secondValue += val;
              result.innerHTML = secondValue;
              secondValue = +secondValue;
          }
      }
      
      function calculateResult() {
          result.innerHTML = "";
          switch (sign) {
              case "+":
                  result.innerHTML = firstValue + secondValue;
                  break;
              case "-":
                  result.innerHTML = firstValue - secondValue;
                  break;
              case "*":
                  result.innerHTML = firstValue * secondValue;
                  break;
              case "/":
                  result.innerHTML = firstValue / secondValue;
                  break;
              case "^":
                  result.innerHTML = Math.pow(firstValue, secondValue);
                  break;
              case "√":
                  result.innerHTML = Math.sqrt(firstValue);
                  break;
          }
          firstValue = +result.innerHTML;
          secondValue = "";
          isFirstValue = false;
          isSecondValue = false;
      }
      
      function resetCalculator() {
    result.innerHTML = "0"; // Сбросить результат до нуля
    firstValue = "";
    secondValue = "";
    isFirstValue = false;
    isSecondValue = false;
    sign = "";
}

    
      function makeNegative() {
          result.innerHTML = "";
          if (firstValue !== "") {
              result.innerHTML = -firstValue;
              firstValue = +result.innerHTML;
          }
          if (secondValue !== "") {
              result.innerHTML = -secondValue;
              secondValue = +result.innerHTML;
          }
      }
      
      function calculatePercent() {
          result.innerHTML = "";
          if (firstValue !== "") {
              result.innerHTML = firstValue / 100;
              firstValue = +result.innerHTML;
          }
      }
      
      function applyOperation(operation) {
          if (firstValue !== "") {
              switch (operation) {
                  case '^':
                      result.innerHTML = firstValue ** 2; // Возведение в квадрат
                      firstValue = +result.innerHTML;
                      break;
                  case '√':
                      result.innerHTML = Math.sqrt(firstValue); // Корень
                      firstValue = +result.innerHTML;
                      break;
              }
          }
      }
      
