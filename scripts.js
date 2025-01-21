/* In general for each button, it will add it into the display on click.
   Then the operator will find out which operation it needs to run and 
   call that function
*/

// FUNCTIONAILITY FOR ADD BUTTON
const addBtn = document.querySelector('.add');

addBtn.addEventListener('click', () => {
  //add a + symbol to the display
  console.log("hello!");
})

function add(x, y) {
  console.log(x+y)
  return x + y;
}

//FUNCTIONALITY FOR SUBTRACT BUTTON
const subtractBtn = document.querySelector('.subtract');

subtractBtn.addEventListener('click', () => {
  // add a - symbol to the display to be parsed
})

function subtract(x, y) {
  console.log(x-y)
  return x - y;
}

//FUNCTIONALITY FOR MULTIPLY BUTTON
const multiplyBtn = document.querySelector('.multiply');

multiplyBtn.addEventListener('click', () => {
  // add a * symbol to the display to be parsed
})

function multiply(x, y) {
  console.log(x*y)
  return x * y;
}

//FUNCTIONALITY FOR DIVIDE BUTTON
const divideBtn = document.querySelector('.divide');

divideBtn.addEventListener('click', () => {
  // add a / symbol to the display to be parsed
})

function divide(x, y) {
  console.log(x/y)
  return x/y;
}

const display = document.querySelector('.display');

console.log(display.innerHTML);


