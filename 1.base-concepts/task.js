"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  
  if (d === 0) {
    arr.push((-b / (2 * a)));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount)) {
    return false;
  }

  let P = (percent / 100) / 12;
  let S = amount - contribution;
  let n = countMonths;
  let paymentMonth = S * (P + (P / (((1 + P) ** n) - 1)));
  return Number((paymentMonth * n).toFixed(2));
}