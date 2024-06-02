// Задача 1:
function getArrayParams(...arr) {
  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 
    0,
  );

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg = parseFloat((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задача 2:
function summElementsWorker(...arr) {
  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );

  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  if (arr.length === 0) {
    return 0;
  }

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumOddElement = 0;
  let sumEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let countEvenElement = 0;
  let sumEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  if (arr.length === 0) {
    return 0;
  }

  return sumEvenElement / countEvenElement;
}

// Задача 3:
function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);

  for (let i = 0; i < arrOfArr.length; i++) {
    const funcResult = func(...arrOfArr[i]);
    
    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }
  }

  return maxWorkerResult;
}