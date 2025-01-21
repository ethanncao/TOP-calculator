/* In general for each button, it will add it into the display on click.
   Then the operator will find out which operation it needs to run and 
   call that function
*/

// FUNCTIONALITY FOR DISPLAY
// only allows 5 operations at one time
// 23 character limit
const display = document.querySelector('.display');

console.log(display.innerHTML);

// FUNCTIONAILITY FOR ADD BUTTON
const addBtn = document.querySelector('.add');

addBtn.addEventListener('click', () => {
  //add a + symbol to the display
  if (display.innerHTML === "") {
    display.innerHTML = "ERROR"
    return null;
  } else if (display.innerHTML === "ERROR" || display.innerHTML ===  "Infinity") {
    return null;
  }
  display.innerHTML += " + "
})

//FUNCTIONALITY FOR SUBTRACT BUTTON
const subtractBtn = document.querySelector('.subtract');

subtractBtn.addEventListener('click', () => {
  // add a - symbol to the display to be parsed
  if (display.innerHTML === "") {
    display.innerHTML = "ERROR"
    return null;
  } else if (display.innerHTML === "ERROR" || display.innerHTML ===  "Infinity") {
    return null;
  }
  display.innerHTML += " - ";
})

//FUNCTIONALITY FOR MULTIPLY BUTTON
const multiplyBtn = document.querySelector('.multiply');

multiplyBtn.addEventListener('click', () => {
  // add a * symbol to the display to be parsed
  if (display.innerHTML === "") {
    display.innerHTML = "ERROR"
    return null;
  } else if (display.innerHTML === "ERROR" || display.innerHTML ===  "Infinity") {
    return null;
  }
  display.innerHTML += " * ";
})

//FUNCTIONALITY FOR DIVIDE BUTTON
const divideBtn = document.querySelector('.divide');

divideBtn.addEventListener('click', () => {
  // add a / symbol to the display to be parsed
  if (display.innerHTML === "") {
    display.innerHTML = "ERROR"
    return null;
  } else if (display.innerHTML === "ERROR" || display.innerHTML ===  "Infinity") {
    return null;
  }
  display.innerHTML += " / ";
})

// Making the number buttons add the numbers into the display
const numberBtn = document.querySelectorAll('.number');

numberBtn.forEach(button => {
  button.addEventListener('click', event => {
    if (display.innerHTML[0] == "0") {
      display.innerHTML = "ERROR";
      return null;
    } else if (display.innerHTML === "ERROR" || display.innerHTML === "Infinity") {
      return null;
    }
    display.innerHTML += button.innerHTML;
  })
})

// Creating the clear button function
const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', () => {
  display.innerHTML = "";
})

// FUNCTIONAlITY FOR OUT OPERATOR
const calculate = document.querySelector('.operator');

calculate.addEventListener('click', () => {
  let equation = display.innerHTML;
  const result = math.evaluate(equation);
  display.innerHTML = result;
})




