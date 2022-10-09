export function getSum41(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

/* ------------------------------------------------------ */

export function getNumberOfEven42(arr) {
    let number = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        number++;
      }
    }
    return number;
}

/* ------------------------------------------------------ */

export function getMaxEven45Alt3(...arr) {
    return Math.max(...arr.filter(n=> n%2===0));
}
  
