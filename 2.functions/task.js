function getArrayParams(...arr) {
  let min = 0;
  let max = 0;
  let sum = 0;
  let avg = 0;

  if (!arr.length) {
    return 0;
  }
/* Решение 1. Если делать пункт 3
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
*/
// Решение 2. Если делать пункт 4
  min = Math.min(...arr);
  max = Math.max(...arr);
  sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (!arr.length) {
    return 0;
  }

  let sumElements = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
  return sumElements;
}

function differenceMaxMinWorker(...arr) {
  let max = 0;
  let min = 0;

  if (!arr.length) {
    return 0;
  }

  max = Math.max(...arr);
  min = Math.min(...arr);
  let deff = max - min;
  
  return (deff);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (!arr.length) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return (sumEvenElement - sumOddElement, sumOddElement - sumEvenElement);
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (!arr.length) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    } 
  }

  return (sumEvenElement / countEvenElement);
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = 0;
  let result;

  for (let i = 0; i < arrOfArr.length; i++) {
    result = func(...arrOfArr[i]);
    
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}


