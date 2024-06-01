// Задача 1:
function getArrayParams(...arr) {
  const initial = 0;
  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 
    initial,
  );

  let countElement = arr.length;
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);
  let avg = parseFloat((sum / countElement).toFixed(2));

  if (countElement === 0) {
    return 0;
  }

  return { min: min, max: max, avg: avg };
}

// Задача 2:
function summElementsWorker(...arr) {
  const initial = 0;
  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initial,
  );

  if (arr.length === 0) {
    return 0;
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);

  if (arr.length === 0) {
    return 0;
  }

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let countElement = arr.length;
  let sumOddElement = 0;
  let sumEvenElement = 0;

  for (let i = 0; i < countElement; i++) {
    const element = arr[i];
    if (element % 2 === 0) {
      sumEvenElement += element;
    } else {
      sumOddElement += element;
    }
  }

  if (countElement === 0) {
    return 0;
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let countElement = arr.length;
  let countEvenElement = 0;
  let sumEvenElement = 0;

  for (let i = 0; i < countElement; i++) {
    const element = arr[i];
    if (element % 2 === 0) {
      sumEvenElement += element;
      countEvenElement++;
    }
  }

  if (countElement === 0) {
    return 0;
  }

  return sumEvenElement / countEvenElement;
}

// Задача 3:
function makeWork (arrOfArr, func) {
  let countArrays = arrOfArr.length;
  let maxWorkerResult = arrOfArr[0][0];

  for (let i = 0; i < countArrays; i++) {
    const numberArray = arrOfArr[i];
    const funcResult = func(...numberArray);
    
    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }
  }

  return maxWorkerResult;
}