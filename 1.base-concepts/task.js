"use strict"

// Задача 1:
function solveEquation(a, b, c) {
  let arr = [];
  let d = (Math.pow(b, 2) - 4 * a * c);

  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2); 
  } else if (d === 0) {
    arr.push(-b / (2 * a));
  }

  return arr;
}

// Задача 2:
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonthlyRate = percent / 100 / 12;
  let sum = amount - contribution;
  let monthlyPayment = sum * (percentMonthlyRate + (percentMonthlyRate / (Math.pow(1 + percentMonthlyRate, countMonths) - 1)));
  
  return parseFloat((monthlyPayment * countMonths).toFixed(2));
}