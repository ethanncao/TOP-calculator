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
  display.innerHTML += " + ";
})

function add(x, y) {
  console.log(x+y)
  return x + y;
}

//FUNCTIONALITY FOR SUBTRACT BUTTON
const subtractBtn = document.querySelector('.subtract');

subtractBtn.addEventListener('click', () => {
  // add a - symbol to the display to be parsed
  display.innerHTML += " - ";
})

function subtract(x, y) {
  console.log(x-y)
  return x - y;
}

//FUNCTIONALITY FOR MULTIPLY BUTTON
const multiplyBtn = document.querySelector('.multiply');

multiplyBtn.addEventListener('click', () => {
  // add a * symbol to the display to be parsed
  display.innerHTML += " * ";
})

function multiply(x, y) {
  console.log(x*y)
  return x * y;
}

//FUNCTIONALITY FOR DIVIDE BUTTON
const divideBtn = document.querySelector('.divide');

divideBtn.addEventListener('click', () => {
  // add a / symbol to the display to be parsed
  display.innerHTML += " / ";
})

function divide(x, y) {
  console.log(x/y)
  return x/y;
}

// Making the number buttons add the numbers into the display
const numberBtn = document.querySelectorAll('.number');

numberBtn.forEach(button => {
  button.addEventListener('click', event => {
    display.innerHTML += button.innerHTML;
  })
})




