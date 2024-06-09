// Задача 1:
function getArrayParams(...arr) {
  const sum = arr.reduce((acc, item) => acc + item, 0);  

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg = parseFloat((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задача 2:
function summElementsWorker(...arr) {
  const sum = arr.reduce((acc, item) => acc + item, 0);

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

// --------------------------------------НОВОЕ РЕШЕНИЕ-------------------------------------- \\

/*function getArrayParams(...arr) {
  return { 
    min: Math.min(...arr), 
    max: Math.max(...arr), 
    avg: Number((arr.reduce((acc, item) => acc + item, 0) / arr.length).toFixed(2)) 
  };
}

function summElementsWorker(...arr) {
  return arr.reduce((acc, item) => acc + item, 0);
}

function differenceMaxMinWorker(...arr) {
  return arr.length !== 0 ? Math.max(...arr) - Math.min(...arr) : 0;
}

function differenceEvenOddWorker(...arr) {
  const sumOdds = arr.filter(item => item % 2 !== 0).reduce((acc, item) => acc + item, 0);
  const sumEvens = arr.filter(item => item % 2 === 0).reduce((acc, item) => acc + item, 0);
  return sumEvens - sumOdds;
  // ИЛИ:
  // const result = arr.reduce((acc, item) => {
  //   return item % 2 === 0 ? { even: item + acc.even, odd: acc.odd } : { even: acc.even, odd: item + acc.odd } 
  // }, { odd: 0, even: 0 });
  // return result.even - result.odd;
}

function averageEvenElementsWorker(...arr) {
  return arr.length !== 0 ? 
  arr.filter(item => item % 2 === 0).reduce((acc, item, idx, filtetedArr) => acc + item / filtetedArr.length, 0) : 
  0;
}

function makeWork (arrOfArr, func) {
  return Math.max(...arrOfArr.map(arr => func(...arr)));
}*/