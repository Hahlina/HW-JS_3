`use sctict`;
let resulHtml = document.querySelector(".resultTask");
let nameTask = document.querySelector(".nameTask");
//! Task 1
// nameTask.textContent = "Task #1";
// let sum = 0;
// let minNumber = +prompt("Enter first number");
// let maxNumber = +prompt("Enter second number");

// for (i = minNumber; i <= maxNumber; i++) {
//   sum += i;
// }
// resulHtml.textContent = `The sum of all numbers in the range from ${minNumber} to ${maxNumber} is ${sum}`;
//! Task 2
// nameTask.textContent = "Task #2";
// let number1 = +prompt("Enter first number");
// let number2 = +prompt("Enter second number");
// while (number1 && number2) {
//   if (number1 > number2) {
//     number1 = number1 % number2;
//   } else if (number1 < number2) {
//     number2 = number2 % number1;
//   } else if (number1 === number2) {
//     number1 = 0;
//   }
// }
// resulHtml.textContent = `The greatest common divisor is ${number1 + number2}`;

//! Task 3
// nameTask.textContent = "Task #3";
// let number = +prompt("Enter number");
// resulHtml.textContent += "Divider is: ";
// let divider;
// for (let i = 1; i <= number; i++) {
//   divider = number % i;
//   if (divider === 0 && i < number) {
//     resulHtml.textContent += `${i}, `;
//   } else if (i === number) {
//     resulHtml.textContent += `${i}.`;
//     // Я пробував забрати останій символ із строки, але всі методи які я найшов не працювали, тому трохи колхозно, зато працює))
//   }
// }

//! Task 4
// nameTask.textContent = "Task #4";
// let number = +prompt("Enter number");
// let i = 1;
// while ((number /= 10) >= 1) {
//   i++;
// }
// resulHtml.textContent += `A enter number has ${i} digits`;

//! Task 5
// nameTask.textContent = "Task #5";
// let countMinus = 0;
// let countPlus = 0;
// let countZero = 0;
// let countSynbol = 0;
// for (let i = 0; i < 10; i++) {
//   let number = +prompt("Enter number");
//   if (number === 0) {
//     countZero++;
//   } else if (number > 0) {
//     countPlus++;
//   } else if (number < 0) {
//     countMinus++;
//   } else {
//     countSynbol++;
//   }
// }
// resulHtml.textContent += `You enter positive numbers: ${countPlus}, negative number: ${countMinus}, zero: ${countZero} and invalid values: ${countSynbol} `;

//! Task 6
// nameTask.textContent = "Task #6";
// let i;
// let next = true;
// while ((i = next)) {
//   let number1 = +prompt("Enter number 1");
//   let symbol = prompt("Enter symbol ( / , * , + , -)");
//   let number2 = +prompt("Enter number 2");
//   i++;
//   let result;
//   if (symbol === "+") {
//     result = number1 + number2;
//   } else if (symbol === "-") {
//     result = number1 - number2;
//   } else if (symbol === "*") {
//     result = number1 * number2;
//   } else if (symbol === "/") {
//     result = number1 / number2;
//   } else {
//     alert(`Enter cotect date`);
//     resulHtml.textContent = `Enter corect date`;
//     next = confirm("Do you want to continue?");
//     break;
//   }
//   alert(`Result: ${number1} ${symbol} ${number2} = ${result}`);
//   resulHtml.textContent += `Result: ${number1}${symbol}${number2} = ${result}`;
//   next = confirm("Do you want to continue?");
// }

//! Task 8
// nameTask.textContent = "Task #8";
// let i;
// let next = true;
// let count = 0;
// while ((i = next)) {
//   i++;
//   count++;
//   console.log("count: ", count);
//   next = confirm("Want to see the name of the next day of the week?");
//   if (next === false) {
//     alert("OK");
//     break;
//   }
//   if (count === 1) {
//     alert("Mondey");
//   } else if (count === 2) {
//     alert("Tuesday");
//   } else if (count === 3) {
//     alert("Wednesday");
//   } else if (count === 4) {
//     alert("Thursday");
//   } else if (count === 5) {
//     alert("Friday");
//   } else if (count === 6) {
//     alert("Saturday");
//   } else if (count === 7) {
//     alert("Sunday");
//     count = 0;
//   }
// }

//! Task 9
nameTask.textContent = "Task #9";
for (let i = 2; i < 10; i++) {
  let block = document.createElement("div");
  block.className = "itemBlock9";
  resulHtml.appendChild(block);
  for (j = 1; j < 11; j++) {
    let result = i * j;
    let resultElem = document.createElement("p");
    resultElem.textContent += `${i} * ${j} = ${result}`;
    block.appendChild(resultElem);
  }
}
